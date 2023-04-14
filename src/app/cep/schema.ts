import { z } from "zod";

export const schemaForm = z
  .object({
    address: z.object({
      zipCode: z.string().min(9, "Por favor, informe um CEP válido"),
      street: z.string().nonempty("Por favor, informe um endereço válido"),
      number: z.string().nonempty("Por favor, informe um número válido"),
      district: z.string().nonempty("Por favor, informe um bairro válido"),
      complement: z.string(),
      city: z.string().nonempty("Por favor, informe um cidade válida"),
      state: z.string().nonempty("Por favor, informe um estado válido"),
    }),
  })
  .transform((fields) => ({
    address: {
      zipCode: fields.address.zipCode,
      street: fields.address.street,
      number: fields.address.number,
      district: fields.address.district,
      complement: fields.address.complement,
      city: fields.address.city,
      state: fields.address.state,
    },
  }));