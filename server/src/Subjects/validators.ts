import Joi from "joi";

export const subjectPayload = Joi.object({
  title: Joi.string().required().max(50),
  description: Joi.string().max(200),
  categoryId: Joi.number().required(),
  licenceId: Joi.string().required().min(36).max(36),
});
