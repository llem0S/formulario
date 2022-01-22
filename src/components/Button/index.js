import { ContainerButton } from "./styled";

function Button({ onClick, label, disabled }) {
  return (
    <ContainerButton onClick={onClick} disabled={disabled}>
      {label}
    </ContainerButton>
  );
}

export default Button;
