import React from 'react';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/navigation';
import Spacing from './Spacing';

const ArticleTitle = styled('div')({
  lineHeight: '1.25rem',
  fontStyle: 'italic',
  fontWeight: 700,
  textTransform: 'uppercase',
  fontSize: '1.125rem',
  paddingLeft: '0.75rem',
  borderLeft: '2px solid #E02020',
  marginBottom: '1.125rem',
  cursor: 'pointer',
});

const ArticleContent = styled('div')({
  lineHeight: '1.125rem',
  fontSize: '1rem',
  paddingLeft: '0.75rem',
  marginBottom: '0.5rem',
});

function Article({ title, content, id }) {
  const router = useRouter();
  const goToReadDetail = () => {
    router.push(`/reads/${id}`);
  };

  return (
    <div id={id}>
      <ArticleTitle onClick={goToReadDetail}>{title}</ArticleTitle>
      <ArticleContent>{content}</ArticleContent>
      <Spacing size={32} />
    </div>
  );
}

export default Article;
