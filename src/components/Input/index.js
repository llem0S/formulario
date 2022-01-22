import { ContainerInput } from "./styled";

function Input({ label, value, onChange, type }) {
  return (
    <ContainerInput>
      <label>{label}</label>
      {type === "select" ? (
        <select>
          <option disabled selected></option>
          <option>Masculino</option>
          <option>Feminino</option>
          <option>Outros</option>
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
