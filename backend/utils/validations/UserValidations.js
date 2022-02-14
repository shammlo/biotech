import { isEmail, isEmpity } from "../validationFunctions.js";

const registerValidator = (data) => {
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

  if (isEmpity(data.email)) {
    errors.push({
      messageKR: "ئیمەیڵ پێویستە بەتاڵ نەبێت",
      messageAr: "يجب توفير البريد الإلكتروني",
      field: "email",
    });
  } else if (!isEmail(data.email)) {
    errors.push({
      messageKR: "فۆرماتی ئیمەڵەکەت هەڵەیە",
      messageAr: "تنسيق البريد الإلكتروني غير صحيح",
      field: "email",
    });
  } else if (data.email.length > 32) {
    errors.push({
      messageKR: "ئیمەیڵ پێویستە 32 پیت کەمتر بێت",
      messageAr: "يجب أن يكون البريد الإلكتروني أقل من 32 حرفا",
      field: "email",
    });
  }

  if (isEmpity(data.password)) {
    errors.push({
      messageKR: "پاسۆرد نابێت بەتاڵ بێت",
      messageAr: "يجب ألا تكون كلمة المرور فارغة",
      field: "password",
    });
  } else if (data.password.length < 8) {
    errors.push({
      messageKR: "پاسۆرد پێویستە لە 8 پیت کەمتر نەبێت",
      messageAr: "يجب أن تكون كلمة المرور أكثر من 8 أحرف",
      field: "password",
    });
  } else if (data.password.length > 32) {
    errors.push({
      messageKR: "پاسۆرد پێویستە لە 32 پیت زیاتر نەبێت",
      messageAr: "يجب أن تكون كلمة المرور أقل من 32 حرفا",
      field: "password",
    });
  }

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};

const loginValidator = (data) => {
  let errors = [];

  if (isEmpity(data.email)) {
    errors.push({
      messageKR: "ئیمەیڵ نابێت بەتاڵ بێت",
      messageAr: "يجب توفير البريد الإلكتروني",
      field: "email",
    });
  } else if (!isEmail(data.email)) {
    errors.push({
      messageKR: "فۆرماتی ئیمەیڵەکەت هەڵەیە",
      messageAr: "تنسيق البريد الإلكتروني غير صحيح",
      field: "email",
    });
  } else if (data.email.length > 32) {
    errors.push({
      messageKR: "ئیمەیڵ پێویستە لە 32 پیت زیاتر نەبێت",
      messageAr: "يجب أن يكون البريد الإلكتروني أقل من 32 حرفا",
      field: "email",
    });
  }

  if (isEmpity(data.password)) {
    errors.push({
      messageKR: "پاسۆرد پێویستە بەتاڵ نەبێت",
      messageAr: "يجب ألا تكون كلمة المرور فارغة",
      field: "password",
    });
  } else if (data.password.length < 8) {
    errors.push({
      messageKR: "پاسۆرد پێویستە لە 8 پیت کەمتر نەبێت",
      messageAr: "يجب أن تكون كلمة المرور أكثر من 8 أحرف",
      field: "password",
    });
  } else if (data.password.length > 32) {
    errors.push({
      messageKR: "پاسۆرد پێویستە لە 32 پیت کەمتر بێت",
      messageAr: "يجب أن تكون كلمة المرور أقل من 32 حرفا",
      field: "password",
    });
  }

  return {
    errors,
    valid: errors.length === 0 ? true : false,
  };
};

export { registerValidator, loginValidator };
