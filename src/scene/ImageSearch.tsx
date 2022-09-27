import styled from "@emotion/styled";
import SearchBar from "./components/SearchBar";
import Spinner from "../armor/Spinner";
import Image from "./components/Image";

import useSearch from "../helpers/useSearch";

import { Images } from "./types";

const ImageSearch = () => {
  const { search, isLoading, data: images } = useSearch();

  function searchImage(searchKey: string) {
    search(searchKey);
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
      <SearchBar isLoading={isLoading} searchImage={searchImage} />
      {isLoading && <Spinner />}
      <ImagesContainer>
        {images?.hits &&
          images?.hits.map((item: Images) => (
            <Image key={item.id} data={item} />
          ))}
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
