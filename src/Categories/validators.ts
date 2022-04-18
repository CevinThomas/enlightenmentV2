import Joi from "joi";

export const createCategoryValidator = Joi.object({
  title: Joi.string().required().max(50),
});

export const singleCategory = Joi.object({
  category_id: Joi.number().required(),
});
