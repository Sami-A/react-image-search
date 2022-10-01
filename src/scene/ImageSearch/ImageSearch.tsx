import { FC, useCallback, useState } from "react";
import styled from "@emotion/styled";

import { ImageContent, ImageSearchResponse } from "./types";

import useSearch from "@/helpers/useSearch";

import SearchBar from "./components/SearchBar";
import Image from "./components/Image";
import ImageDetail from "./components/ImageDetail";

import ErrorBox from "@/armor/ErrorBox";
import Spinner from "@/armor/Spinner";
import Dialog from "@/armor/Dialog";

const ImageSearch: FC = () => {
  const {
    search,
    isLoading,
    data: images,
    isError,
    error,
  } = useSearch<ImageSearchResponse>();

  const [selectedImage, setSelectedImage] = useState<ImageContent>(
    {} as ImageContent
  );
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const openDialog = (imageData: ImageContent) => {
    setSelectedImage(imageData);
    setIsDialogOpen(true);
  };
  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  function searchImage(searchKey: string) {
    const query = `per_page=24&image_type=photo&q=${searchKey}`;
    search(query);
  }

  const getStyle = useCallback(() => {
    if (images?.hits && images?.hits.length > 0) return {};
    return {
      height: "100vh",
      justifyContent: "center",
    };
  }, [images?.hits.length]);

  return (
    <ImageSearchContainer style={getStyle()}>
      <SearchBar
        isLoading={isLoading}
        isError={isError}
        searchImage={searchImage}
      />
      {isError && <ErrorBox message={error} />}
      {isLoading && <Spinner />}
      {/**
       * - We are showing the image list container even though
       * it might be loading or has error.
       * - It's better if we show them the previous result until
       *   ongoing process are over rather than displaying an empty space.
       */}
      <ImagesContainer>
        {images?.hits instanceof Array && images?.hits.length > 0
          ? images.hits.map((item: ImageContent) => (
              <Image key={item.id} data={item} onClick={openDialog} />
            ))
          : images?.hits &&
            images?.hits.length < 1 &&
            !isLoading &&
            !isError && <h5>Did not match any image.</h5>}
      </ImagesContainer>
      <Dialog
        isDialogOpen={isDialogOpen}
        closeDialog={closeDialog}
        title="Photo"
      >
        {/* In the future use context to access selectedImage */}
        <ImageDetail selectedImage={selectedImage} />
      </Dialog>
    </ImageSearchContainer>
  );
};

const ImageSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;

  & > h2 {
    margin-bottom: 0.5rem;
  }
`;

const ImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
  max-width: 56.3rem;
`;

export default ImageSearch;
