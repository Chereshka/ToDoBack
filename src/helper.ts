import express from "express";

const codeLenth: number = 5;

export const generateCode = () => {
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < codeLenth; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const generateErr = (
  res: express.Response,
  errors: any,
  code: number = 400
) => {
  return res.status(code).json({
    error: errors,
  });
};

export const generateSucc = (
  res: express.Response,
  data?: any,
  message?: string
) => {
  let result = {};

  if (data) {
    result = { ...result, data: data };
  }

  if (message) {
    result = { ...result, message: message };
  }

  return res.status(200).json({
    success: result,
  });
};

// export const validateRequest = (schema: ObjectSchema, params: any, res: express.Response) => {
//     const result = schema.validate(params, {abortEarly: false});
//     if (result.error) {
//         var resArray = {};
//         result.error.details.forEach((element: Joi.ValidationErrorItem) => {
//             resArray[element.context.label] = element.message
//         });
//         return generateErr(res, resArray);
//     }
//     return false;
// }

export const escapeRegex = (input: string) => {
  return input.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
};
