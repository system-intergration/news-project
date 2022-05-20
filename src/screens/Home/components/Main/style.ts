import styled from "styled-components";

export const Container = styled.div`
  margin-left: 16rem;
  position: relative;
  padding: 0 4rem;

  .tags-list {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const Tag = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-style: ridge;
  border-radius: 30px;
  width: 100px;
  height: 27px;
  cursor: pointer;
  transition: 0.2s all ease-in-out;
  margin: 0 0.3em;
  margin-bottom: 0.7em;

  &:hover {
    background-color: var(--catskill-white);
  }
`;

export const News = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
