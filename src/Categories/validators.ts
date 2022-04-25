import Joi from "joi";

export const createCategoryValidator = Joi.object({
  title: Joi.string().required().max(50),
  licenceId: Joi.string().required().min(36).max(36),
});

export const singleCategory = Joi.object({
  category_id: Joi.number().required(),
});
