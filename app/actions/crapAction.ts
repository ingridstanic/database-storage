"use server";
import { connectDB } from "../lib/db";
import { Crap } from "../models/Crap";
import { v4 as uuidv4 } from "uuid";

export const storeCrap = async (formData: FormData) => {
  await connectDB();

  const craptext = formData.get("craptext") as string;

  //validering checka in zod

  await Crap.create({
    id: uuidv4(),
    text: craptext,
    isImportant: false,
  });
};
