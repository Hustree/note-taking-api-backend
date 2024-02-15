import Joi from "joi";

export const NoteValidationSchema = Joi.object({
  title: Joi.string().required(),
  body: Joi.string().required(),
});
