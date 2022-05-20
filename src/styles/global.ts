import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: var(--background-white-alpha);
    color: var(--primary-text-color);
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    transition: all 0.25s linear;
  }

  .ant-btn {
    border-radius: 10px !important;
  }

  .ant-modal-content, .ant-modal-header{
    border-radius: 10px !important;

  }
`;
