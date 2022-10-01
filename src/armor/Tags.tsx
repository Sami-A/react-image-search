import { FC } from "react";
import styled from "@emotion/styled";

const Tags: FC<{ tags: string }> = ({ tags = "" }) => {
  const data = tags.split(",");
  return (
    <TagsContainer>
      {data.map((item: string, index: number) => (
        <span key={index}>{item}</span>
      ))}
    </TagsContainer>
  );
};

const TagsContainer = styled.div`
  padding-top: 0.9rem;
  display: flex;
  gap: 0.5rem;
  span {
    background-color: #121212;
    color: #fff;
    padding: 0.2rem 0.5rem;
    border-radius: 0.3rem;
    text-transform: capitalize;
  }
`;

export default Tags;
