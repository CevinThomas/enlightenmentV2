import Joi from "joi";

export const licencePayloadValidator = Joi.object({
  companyName: Joi.string().required(),
  logoUrl: Joi.string().required().allow(""),
});

export const fetchLicenceValidator = Joi.object({
  licenceGroupId: Joi.string().required().min(36).max(36),
});

export const updateLicenceValidator = Joi.object({
  companyName: Joi.string(),
  logoUrl: Joi.string().required().allow(""),
  status: Joi.string().required().valid("active", "inactive"),
});

export const withUsersQuery = Joi.object({
  withUsers: Joi.boolean().optional(),
});
