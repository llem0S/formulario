import styled from "styled-components";

export const ContainerButton = styled.button`
  border-radius: 100px;
  border: 0;
  background: var(--pink);
  color: var(--white);
  width: 170px;
  height: 40px;
  cursor: pointer;
  transition: 200ms;

  &:hover {
    filter: grayscale(30%);
  }
`;
