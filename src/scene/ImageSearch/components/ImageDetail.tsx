import { FC } from "react";
import styled from "@emotion/styled";

import { ImageContent } from "../types";

import numberFormat from "@/helpers/numberFormatter";

import OptimizedImage from "@/armor/OptimizedImage";
import Tags from "@/armor/Tags";

import Download from "@/svg/Download";
import Comment from "@/svg/Comment";
import Like from "@/svg/Like";

const ImageDetail: FC<{
  selectedImage: ImageContent;
}> = ({ selectedImage }) => {
  return (
    <>
      <OptimizedImage
        src={selectedImage.largeImageURL}
        placeholderSrc={selectedImage.previewURL}
      />
      <Tags tags={selectedImage.tags} />
      <Footer>
        <div className="footer-items">
          <Download /> <span>{numberFormat(selectedImage.downloads)}</span>
        </div>
        <div className="footer-items">
          <Comment />
          <span>{numberFormat(selectedImage.comments)}</span>
        </div>
        <div className="footer-items">
          <Like />
          <span>{numberFormat(selectedImage.likes)}</span>
        </div>
      </Footer>
    </>
  );
};

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;

  .footer-items {
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }
`;

export default ImageDetail;
