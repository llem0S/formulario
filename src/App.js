import ContainerCenter from "./components/ContainerCenter";
import Input from "./components/Input";

function App() {
  return (
    <main>
      <ContainerCenter>
        <Input label="Nome" />
        <Input label="E-mail" />
        <Input label="Apelido" />
        <Input label="Sexo" type="select" />
      </ContainerCenter>
    </main>
  );
}

export default App;
