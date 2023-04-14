import { schemaForm } from "@/app/cep/schema";
import { z } from "zod";

export type FormProps = z.infer<typeof schemaForm>;
