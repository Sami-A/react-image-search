import { useState } from "react";
import styled from "@emotion/styled";

import numberFormat from "@/helpers/numberFormatter";

import { Images } from "../types";

import OptimizedImage from "@/armor/OptimizedImage";
import Dialog from "@/armor/Dialog";
import Tags from "@/armor/Tags";

import Download from "@/svg/Download";
import Comment from "@/svg/Comment";
import Like from "@/svg/Like";

const Image = ({ data }: { data: Images }) => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };
  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <ImageContainer>
        <OptimizedImage
          onClick={openDialog}
          src={data.largeImageURL}
          placeholderSrc={data.previewURL}
        />
      </ImageContainer>
      <Dialog
        isDialogOpen={isDialogOpen}
        closeDialog={closeDialog}
        title="Photo"
      >
        <ImageDetail>
          <OptimizedImage
            onClick={openDialog}
            src={data.largeImageURL}
            placeholderSrc={data.previewURL}
          />
          <Tags tags={data.tags} />
          <div className="image-footer">
            <div className="image-footer-items">
              <Download /> <span>{numberFormat(data.downloads)}</span>
            </div>
            <div className="image-footer-items">
              <Comment />
              <span>{numberFormat(data.comments)}</span>
            </div>
            <div className="image-footer-items">
              <Like />
              <span>{numberFormat(data.likes)}</span>
            </div>
          </div>
        </ImageDetail>
      </Dialog>
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
const ImageDetail = styled.div`
  & > img {
    width: 100%;
    height: auto;
  }

  .image-footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
  }

  .image-footer-items {
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }
`;

export default Image;
