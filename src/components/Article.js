import React from "react";
import { useRouter } from "next/navigation";
import { styled } from "@mui/material/styles";
import { Spacing } from "components";

const ArticleContainer = styled('div')({
  '& .title': {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    '&:hover': {
      color: '#1976d2',
    },
  },
  '& .content': {
    fontSize: '1rem',
    color: 'rgba(0, 0, 0, 0.6)',
    marginTop: '8px',
  },
});

function Article({ title, content, id }) {
  const router = useRouter();
  
  const goToReadDetail = () => {
    router.push(`/reads/${id}`);
  };

  return (
    <ArticleContainer id={id}>
      <div className="title" onClick={goToReadDetail}>
        {title}
      </div>
      <div className="content">{content}</div>
      <Spacing size={32} />
    </ArticleContainer>
  );
}

export default Article;
