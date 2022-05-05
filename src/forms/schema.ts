import I18n from "i18n-js";
import * as Yup from "yup";

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const includeDigRegExp = /([0-9]+)/;
const includeCharRegExp = /([A-z]+)/;

export const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .required(I18n.t("required"))
    .min(6)
    .matches(includeDigRegExp, I18n.t("min_digit"))
    .matches(includeCharRegExp, I18n.t("min_char")),
  phone_number: Yup.string()
    .matches(phoneRegExp, I18n.t("invalid_phone_number"))
    .matches(/(01)(\d){9}\b/, I18n.t("invalid_phone_number"))
    .required(I18n.t("required")),
});
