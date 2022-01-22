import { useState } from "react";
import Button from "./components/Button";
import ContainerCenter from "./components/ContainerCenter";
import Information from "./components/Information";
import Input from "./components/Input";

function App() {
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [genre, setGenre] = useState("");

  function validateFormInformation() {
    return name !== "" && email !== "" && nickname !== "" && genre !== "";
  }

  function validateFormSend() {
    if (validateFormInformation()) {
      setPage(2);
    }
  }

  return (
    <main>
      <ContainerCenter>
        {page === 1 ? (
          <>
            <Input label="Nome" value={name} onChange={setName} />
            <Input label="E-mail" value={email} onChange={setEmail} />
            <Input label="Apelido" value={nickname} onChange={setNickname} />
            <Input
              label="Sexo"
              type="select"
              value={genre}
              onChange={setGenre}
            />
            <Button
              label="Salvar"
              disabled={!validateFormInformation()}
              onClick={validateFormSend}
            />
          </>
        ) : (
          <>
            <Information label="Nome" value={name} />
            <Information label="E:mail" value={email} />
            <Information label="Apelido" value={nickname} />
            <Information label="Sexo" value={genre} />
            <Button label="Voltar" onClick={() => setPage(1)} />
          </>
        )}
      </ContainerCenter>
    </main>
  );
}

export default App;
