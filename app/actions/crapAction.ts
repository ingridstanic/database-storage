"use server";
import { revalidatePath } from "next/cache";
import { connectDB } from "../lib/db";
import { CrapModel } from "../models/CrapSchema";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";
import { Crap } from "../models/Crap";
import { error } from "console";

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

  await CrapModel.create({
    id: uuidv4(),
    text: result.data?.text,
    isImportant: false,
  });
  revalidatePath("/");
};

export const deleteCrap = async (formData: FormData) => {
  await connectDB();
  const crapid = formData.get("crapid");
  await CrapModel.deleteOne({ id: crapid });
  revalidatePath("/");
};

export const toggleCrap = async (formData: FormData) => {
  await connectDB();
  const crapid = formData.get("crapid") as string;

  const foundCrap = await CrapModel.findOne({ id: crapid });

  if (!foundCrap) {
    throw new Error("Crap not found");
  }

  foundCrap.isImportant = !foundCrap.isImportant;
  await foundCrap.save();

  revalidatePath("/");
};
