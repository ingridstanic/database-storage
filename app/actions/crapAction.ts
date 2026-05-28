"use server";
import { connectDB } from "../lib/db";
import { Crap } from "../models/Crap";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";

const crapSchema = z.object({
  text: z
    .string()
    .trim()
    .min(1, "Can not store empty input")
    .max(20, "To much to store"),
});

export const storeCrap = async (formData: FormData) => {
  await connectDB();

  const result = crapSchema.safeParse({ text: formData.get("craptext") });

  if (!result.success) {
    console.log(result.error);
  }

  console.log("your crap is now stored!");

  await Crap.create({
    id: uuidv4(),
    text: result.data?.text,
    isImportant: false,
  });
};
