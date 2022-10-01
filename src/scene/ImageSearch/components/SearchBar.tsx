import { useCallback, useEffect, useState, FC } from "react";
import styled from "@emotion/styled";

type Props = {
  isLoading: boolean;
  isError: boolean;
  searchImage: (searchKey: string) => void;
};

let searchKey: string;

const SearchBar: FC<Props> = ({ isLoading, isError, searchImage }) => {
  const [searchInput, setSearchInput] = useState<string>("");

  const keyDownHandler = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault();
        search();
      }
    },
    [searchInput]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [keyDownHandler]);

  function search() {
    if (!searchKey) searchKey === searchInput;

    /**
     * - If search key is the same,
     *   this will help prevent unnecessary request going to the server.
     * - However, is there was an error occurred the user can
     *   try as many times as they desired.
     **/
    if (searchKey === searchInput && !isError) return;

    searchKey = searchInput;
    if (searchKey) searchImage(searchKey);
  }

  return (
    <SearchBarContainer>
      <h2 className="search-header">Search Image</h2>
      <div className="search-form">
        <input
          name="query"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button disabled={isLoading || !searchInput} onClick={search}>
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
    & > input:focus {
      outline: 0.12rem solid #000;
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
