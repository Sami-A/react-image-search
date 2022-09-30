import styled from "@emotion/styled";

import useSearch from "@/helpers/useSearch";

import SearchBar from "./components/SearchBar";
import Image from "./components/Image";

import ErrorBox from "@/armor/ErrorBox";
import Spinner from "@/armor/Spinner";

import { Images, ImageSearchResponse } from "./types";

const ImageSearch = () => {
  const {
    search,
    isLoading,
    data: images,
    isError,
    error,
  } = useSearch<ImageSearchResponse>();

  function searchImage(searchKey: string) {
    const searchUrl = `per_page=24&image_type=photo&q=${searchKey}`;
    search(searchUrl);
  }

  function getStyle() {
    if (images?.hits && images?.hits.length > 0) return {};
    return {
      height: "100vh",
      justifyContent: "center",
    };
  }

  return (
    <ImageSearchContainer style={getStyle()}>
      <SearchBar
        isLoading={isLoading}
        isError={isError}
        searchImage={searchImage}
      />
      {isError && <ErrorBox message={error} />}
      {isLoading && <Spinner />}
      <ImagesContainer>
        {images?.hits && images?.hits.length > 0
          ? images?.hits.map((item: Images) => (
              <Image key={item.id} data={item} />
            ))
          : images?.hits instanceof Array &&
            images?.hits.length < 1 &&
            !isLoading &&
            !isError && <h5>Did not match any image.</h5>}
      </ImagesContainer>
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
