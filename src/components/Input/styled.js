import styled from "styled-components";

export const ContainerInput = styled.div`
  color: var(--white);

  display: flex;
  flex-direction: column;
  margin-bottom: 25px;

  option {
    color: var(--background);

    &:first-child {
      display: none;
    }
  }

  label {
    font-size: var(--font-label);
  }

  input,
  select {
    background: transparent;
    border: 0;
    border-bottom: 1px solid var(--white);
    outline: none;
    color: var(--white);
    font-size: var(--font-input);
  }
`;
