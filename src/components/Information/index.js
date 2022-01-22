import { ContainerInformation } from "./styled";

function Information({ label, value }) {
  return (
    <ContainerInformation>
      {label}: {value}
    </ContainerInformation>
  );
}

export default Information;
