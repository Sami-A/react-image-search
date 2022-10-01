import { FC } from "react";
import styled from "@emotion/styled";

import { ImageContent } from "../types";

import OptimizedImage from "@/armor/OptimizedImage";

const Image: FC<{
  data: ImageContent;
  onClick: (imageData: ImageContent) => void;
}> = ({ data, onClick }) => {
  return (
    <>
      <ImageContainer onClick={() => onClick(data)}>
        <OptimizedImage
          src={data.largeImageURL}
          placeholderSrc={data.previewURL}
        />
      </ImageContainer>
    </>
  );
};

const ImageContainer = styled.div`
  height: 10rem;
  width: 10rem;
  border-radius: 0.3rem;
  overflow: hidden;
  cursor: pointer;
  background-color: #ccc;
  -webkit-box-shadow: 3px 3px 10px 3px #ccc;
  -moz-box-shadow: 3px 3px 10px 3px #ccc;
  box-shadow: 3px 3px 10px 3px #ccc;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
    border-radius: 3rem;
  }
`;

export default Image;
