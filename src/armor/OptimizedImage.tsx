import { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "@emotion/styled";

type Props = {
  onClick?: () => void;
  src: string;
  placeholderSrc?: string;
};

const OptimizedImage: FC<Props> = ({ onClick, src, placeholderSrc }) => (
  <ImageContainer>
    <LazyLoadImage
      onClick={onClick}
      src={src}
      placeholderSrc={placeholderSrc}
      alt="photo"
      height={"100%"}
      width={"100%"}
      effect="blur"
    />
  </ImageContainer>
);

const ImageContainer = styled.div`
  height: inherit;
  margin: 0;
  padding: 0;

  .lazy-load-image-background.blur {
    filter: blur(0.9px);
  }

  .lazy-load-image-background.blur.lazy-load-image-loaded {
    filter: blur(0);
    transition: filter 0.3s;
  }

  .lazy-load-image-background.blur > img {
    opacity: 0;
  }

  .lazy-load-image-background.blur.lazy-load-image-loaded > img {
    opacity: 1;
    transition: opacity 0.3s;
  }
`;

export default OptimizedImage;
