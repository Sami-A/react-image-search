import styled from "@emotion/styled";
import { LazyLoadImage } from "react-lazy-load-image-component";

type Props = {
  onClick: () => void;
  src: string;
  placeholderSrc?: string;
};

const OptimizedImage = ({ onClick, src, placeholderSrc = "" }: Props) => (
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
    filter: blur(15px);
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
