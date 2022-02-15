import { isEmail, isEmpity } from "../validationFunctions.js";

const brandValidation = (data) => {
  let errors = [];

  if (isEmpity(data.name)) {
    errors.push({
      messageKR: "ناو پێویستە بەتاڵ نەبێت",
      messageAr: "يجب تقديم الاسم",
      field: "name",
    });
  } else if (data.name.length > 32) {
    errors.push({
      messageKR: "ناو پێویستە 32 پیت کەمتر بێت",
      messageAr: "يجب أن يكون الاسم أقل من 32 حرفا",
      field: "name",
    });
  }

  if (isEmpity(data.logo)) {
    errors.push({
      messageKR: "لۆگۆ پێویستە بەتاڵ نەبێت",
      messageAr: "يجب ألا يكون الشعار فارغا",
      field: "logo",
    });
  }

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};

export { brandValidation };
