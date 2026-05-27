import { model, Schema, models } from "mongoose";

const crapToStoreSchema = new Schema({
  id: { type: String, required: true },
  text: { type: String, required: true },
  isImportant: { type: String, required: true },
});

export const Crap = models.crap || model("crap", crapToStoreSchema);
