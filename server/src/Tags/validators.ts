import Joi from "joi";

export const createTagValidator = Joi.object({
  title: Joi.string().required().max(50),
});

export const singleTagValidator = Joi.object({
  tagId: Joi.number().required(),
});
