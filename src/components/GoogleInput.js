import styled from "styled-components";

export const GoogleInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid lightgray;
  padding: 3px 20px;
  border-radius: 999px;
  width: 65vw;
  max-width: 560px;
  margin: 0 auto;
  margin-top: 20px;
  transition: all 0.2s;

  &:hover {
    -webkit-box-shadow: 5px 5px 6px -1px #898989;
    box-shadow: 5px 5px 6px -1px #898989;
    cursor: pointer;
  }

  & .search__inputIcon {
    color: gray;
  }

  & input {
    flex: 1;
    padding: 10px 20px;
    font-size: medium;
    border: none;
  }

  & input:focus {
    outline-width: 0;
  }
`;
