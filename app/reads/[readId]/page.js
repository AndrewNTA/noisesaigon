import { ARTICLE_QUERY } from './queries';
import ReadDetail from './ReadDetail';

export async function generateMetadata({ params }) {
  const { readId } = params;
  const defaultMetadata = {
    title: 'Noise Saigon - Live Music in Saigon',
    description:
      'Discover live music events, gigs, and the latest reads about the Saigon music scene.',
  };

  try {
    const response = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: ARTICLE_QUERY.loc.source.body,
        variables: { id: readId },
      }),
    });

    if (!response.ok) {
      return defaultMetadata;
    }

    const { data } = await response.json();
    const article = data?.article;

    if (!article) {
      return {
        title: 'Article Not Found',
        description: 'The requested article could not be found.',
      };
    }

    return {
      title: `Noise Saigon - ${article.name}`,
      description: article.brief,
      openGraph: {
        title: article.name,
        description: article.brief,
        images: article.photo?.url
          ? [
              {
                url: article.photo.url,
                width: 970,
                height: 600,
                alt: article.name,
              },
            ]
          : [
              {
                url: 'https://media.graphassets.com/resize=fit:clip,height:600,width:970/Do1dGjAUTWeFv64ZSMpu',
                width: 970,
                height: 600,
                alt: 'Noise Saigon',
              },
            ],
      },
      twitter: {
        card: 'summary_large_image',
        title: article.name,
        description: article.brief,
        images: article.photo?.url ? [article.photo.url] : [],
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return defaultMetadata;
  }
}

export default function Page({ params }) {
  return <ReadDetail readId={params.readId} />;
}
