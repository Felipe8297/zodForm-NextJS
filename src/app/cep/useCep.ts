import { FormProps } from "@/services/schemaTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { schemaForm } from "./schema";
import { useCallback, useEffect } from "react";
import { AddressData, fetchAddress } from "@/services/request";
import formatedCep from "@/utils/formatCep";

export const useCep = () => {
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormProps>({
    criteriaMode: "all",
    mode: "all",
    resolver: zodResolver(schemaForm),
    defaultValues: {
      address: {
        zipCode: "",
        street: "",
        number: "",
        district: "",
        complement: "",
        city: "",
        state: "",
      },
    },
  });

  const zipCode = watch("address.zipCode");

  const handleFormSubmit = (data: FormProps) => {
    console.log(data);
  };

  const handleSetData = useCallback(
    (data: AddressData) => {
      setValue("address.city", data.localidade);
      setValue("address.street", data.logradouro);
      setValue("address.state", data.uf);
      setValue("address.district", data.bairro);
      setValue("address.complement", data.complemento);
    },
    [setValue]
  );

  const handleFetchAddress = useCallback(
    async (zipCode: string) => {
      try {
        const { data } = await fetchAddress(zipCode);
        handleSetData(data);
      } catch {
        //DO nothing
      }
    },
    [handleSetData]
  );

  useEffect(() => {
    setValue("address.zipCode", formatedCep(zipCode));
    if (zipCode.length !== 9) return;
    handleFetchAddress(zipCode);
  }, [handleFetchAddress, setValue, zipCode]);
  
  return {
    errors,
    register,
    handleFormSubmit,
    handleSubmit,
  };
};
