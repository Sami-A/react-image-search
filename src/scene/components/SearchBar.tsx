import styled from "@emotion/styled";
import {
  KeyboardEvent,
  MutableRefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";

type Props = {
  isLoading: boolean;
  searchImage: (searchKey: string) => void;
};

let searchKey: string;

const SearchBar = ({ isLoading, searchImage }: Props) => {
  const searchInput = useRef() as MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    const keyDownHandler = (event: any) => {
      if (event.key === "Enter") {
        event.preventDefault();
        search();
      }
    };
    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  function search() {
    if (!searchKey) searchKey === searchInput.current?.value;

    if (searchKey === searchInput.current?.value) return;

    searchKey = searchInput.current?.value;
    if (searchKey) searchImage(searchKey);
  }

  return (
    <SearchBarContainer>
      <h2 className="search-header">Search Image</h2>
      <div className="search-form">
        <input ref={searchInput} name="query" />
        <button disabled={isLoading} onClick={search} className="Search-Bar-Submit">
          Search
        </button>
      </div>
    </SearchBarContainer>
  );
};

const SearchBarContainer = styled.div`
  margin: 1rem 0;

  .search-header {
    text-align: center;
    margin-bottom: 1rem;
  }

  .search-form {
    display: flex;
    gap: 0.3rem;
    height: 2.2rem;

    & > input {
      height: inherit;
      border: 0.1rem solid #ccc;
      border-radius: 0.2rem;
      padding: 0 0.5rem;
    }

    & > button {
      padding: 0.3rem 0.7rem;
      height: inherit;
      line-height: 50%;
      background-color: #000;
      color: #fff;
      border: none;
      border-radius: 0.3rem;
    }
    & > button:disabled {
      background-color: #555555;
      cursor: not-allowed;
    }
  }
`;

export default SearchBar;
