export type AddressData = {
  bairro: string;
  complemento: string;
  uf: string;
  logradouro: string;
  localidade: string;
};

import axios from "axios";

export const fetchAddress = (cep: string) => {
  return axios<AddressData>({
    method: "GET",
    url: `https://viacep.com.br/ws/${cep}/json/`,
  });
};
