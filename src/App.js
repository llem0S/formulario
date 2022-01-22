import { useState } from "react";
import Button from "./components/Button";
import ContainerCenter from "./components/ContainerCenter";
import Information from "./components/Information";
import Input from "./components/Input";

function App() {
  const [page, setPage] = useState(2);

  return (
    <main>
      <ContainerCenter>
        {page === 1 ? (
          <>
            <Input label="Nome" />
            <Input label="E-mail" />
            <Input label="Apelido" />
            <Input label="Sexo" type="select" />
            <Button />
          </>
        ) : (
          <>
            <Information label="Nome" />
            <Information label="E:mail" />
            <Information label="Apelido" />
            <Information label="Sexo" />
          </>
        )}
      </ContainerCenter>
    </main>
  );
}

export default App;
