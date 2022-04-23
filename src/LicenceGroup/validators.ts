import Joi from "joi";

export const insertLicenceValidators = Joi.object({
  companyName: Joi.string().required(),
  logoUrl: Joi.string().optional().allow(""),
});
