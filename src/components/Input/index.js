import { ContainerInput } from "./styled";

function Input({ label, value, onChange, type }) {
  return (
    <ContainerInput>
      <label>{label}</label>
      {type === "select" ? (
        <select
          onChange={(event) => onChange(event.target.value)}
          value={value}
        >
          <option disabled value=""></option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
          <option value="Outros">Outros</option>
        </select>
      ) : (
        <input
          onChange={(event) => onChange(event.target.value)}
          value={value}
        />
      )}
    </ContainerInput>
  );
}

export default Input;
