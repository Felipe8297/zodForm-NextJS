import styled from "styled-components";

export const Conteiner = styled.div`
  background-color: rgb(23, 23, 23);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 10rem;
  height: 400px;
  width: 200px;
  margin: auto;
  margin-top: 6rem;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
`;

export const SubTittle = styled.h2`
  font-size: 80px;
  color: white;
  font-family: "Inter";
  margin-bottom: 2rem;
`;
export const StyledButton = styled.button`
  background-color: #7dd87d;
  font-family: "Inter";
  font-weight: bold;
  border: none;
  padding: 12px;
  border-radius: 8px;
  font-size: 20px;
  width: 200px;
  color: black;

  &:hover {
    filter: brightness(60%);
    transition: filter 0.4s;
  }
`;
