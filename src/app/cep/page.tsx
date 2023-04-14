"use client";

import {
  Button,
  ConteinerCep,
  StyledDiv,
  StyledForm,
  StyledInput,
  StyledSpan,
  Tittle,
} from "./styles";

import { useCep } from "./useCep";

export default function Cep() {
  const { errors, handleSubmit, handleFormSubmit, register } = useCep();

  return (
    <ConteinerCep>
      <StyledDiv>
        <Tittle>CEP</Tittle>
        <StyledForm onSubmit={handleSubmit(handleFormSubmit)}>
          <StyledInput
            type="text"
            placeholder="CEP"
            {...register("address.zipCode")}
            maxLength={9}
          />
          {errors.address?.zipCode && (
            <StyledSpan>{errors.address?.zipCode.message}</StyledSpan>
          )}

          <StyledInput
            type="text"
            placeholder="Endereço"
            {...register("address.street")}
            maxLength={9}
          />
          {errors.address?.street && (
            <StyledSpan>{errors.address?.street.message}</StyledSpan>
          )}
          <StyledInput
            type="text"
            placeholder="Número"
            {...register("address.number")}
            maxLength={9}
          />
          {errors.address?.number && (
            <StyledSpan>{errors.address?.number.message}</StyledSpan>
          )}
          <StyledInput
            type="text"
            placeholder="Complemento"
            {...register("address.complement")}
            maxLength={9}
          />
          <StyledInput
            type="text"
            placeholder="Bairro"
            {...register("address.district")}
            maxLength={9}
          />
          {errors.address?.district && (
            <StyledSpan>{errors.address?.district.message}</StyledSpan>
          )}
          <StyledInput
            type="text"
            placeholder="Cidade"
            {...register("address.city")}
            maxLength={9}
          />
          {errors.address?.city && (
            <StyledSpan>{errors.address?.city.message}</StyledSpan>
          )}
          <StyledInput
            type="text"
            placeholder="Estado"
            {...register("address.state")}
            maxLength={9}
          />
          {errors.address?.state && (
            <StyledSpan>{errors.address?.state.message}</StyledSpan>
          )}

          <Button type="submit">Enviar</Button>
        </StyledForm>
      </StyledDiv>
    </ConteinerCep>
  );
}
