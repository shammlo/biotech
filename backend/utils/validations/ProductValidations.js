import { isEmpity } from "../validationFunctions.js";

const productValidation = (data) => {
  let errors = [];

  if (isEmpity(data.nameKR)) {
    errors.push({
      messageKR: "ناو پێویستە بەتاڵ نەبێت",
      messageAr: "يجب تقديم الاسم",
      field: "nameKR",
    });
  } else if (data.nameKR.length > 32) {
    errors.push({
      messageKR: "ناو پێویستە 32 پیت کەمتر بێت",
      messageAr: "يجب أن يكون الاسم أقل من 32 حرفا",
      field: "nameKR",
    });
  }

  if (isEmpity(data.nameAR)) {
    errors.push({
      messageKR: "ناو پێویستە بەتاڵ نەبێت",
      messageAr: "يجب تقديم الاسم",
      field: "nameAR",
    });
  } else if (data.nameAR.length > 32) {
    errors.push({
      messageKR: "ناو پێویستە 32 پیت کەمتر بێت",
      messageAr: "يجب أن يكون الاسم أقل من 32 حرفا",
      field: "nameAR",
    });
  }

  if (isEmpity(data.image)) {
    errors.push({
      messageKR: "لۆگۆ پێویستە بەتاڵ نەبێت",
      messageAr: "يجب ألا يكون الشعار فارغا",
      field: "image",
    });
  }

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};

export { productValidation };
