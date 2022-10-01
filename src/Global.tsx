import { Global, css } from "@emotion/react";

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        html {
          height: 100vh;
        }

        button {
          cursor: pointer;
        }

        .pointer {
          cursor: pointer;
        }

        .text-center {
          text-align: center;
        }
      `}
    />
  );
};

export default GlobalStyle;
