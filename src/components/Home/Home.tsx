"use client";
import { useRouter } from "next/navigation";
import { Conteiner, StyledButton, SubTittle } from "./styles";


const Home = () => {
  const { push } = useRouter();

  const handleRout = () => {
    push(`/cep`);
  };

  return (
    <Conteiner>
      <SubTittle>Zod Form</SubTittle>
      <StyledButton onClick={() => handleRout()}>{"->"}</StyledButton>
    </Conteiner>
  );
};

export default Home;