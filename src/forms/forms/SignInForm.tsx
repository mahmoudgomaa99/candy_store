import { TouchableOpacity } from "react-native";
import TextInput from "../../components/atoms/TextInput";
import I18n from "i18n-js";
import { Formik } from "formik";
import { login_initial_values } from "../initial_values";
import TextView from "../../components/atoms/TextView";
import { styles } from "./styles";
import { LoginSchema } from "../schema";
import { useAppDispatch } from "../../redux/store";
import User from "../../redux/user";
import { unwrapResult } from "@reduxjs/toolkit";
import useTokensSetter from "../../hooks/useTokens/useTokenSetter";
import { useLoadingSelector } from "../../redux/selectors";

const SignInForm = () => {
  const dispach = useAppDispatch();
  const loadingSignin = useLoadingSelector(User.thunks.doSignIn);
  const { setTokens } = useTokensSetter();
  const onSubmit = (values: any, action: any) => {
    dispach(User.thunks.doSignIn(values))
      .then(unwrapResult)
      .then((res) => {
        const { headers } = res;
        setTokens("uid", headers.uid);
        setTokens("token", headers.token);
      })
      .catch((error) => console.log(error));
  };
  return (
    <Formik
      initialValues={login_initial_values}
      onSubmit={(values, action) => {
        onSubmit(values, action);
      }}
      validationSchema={LoginSchema}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }: any) => (
        <>
          <TextInput
            placeholder={I18n.t("phone_number")}
            name="phone_number"
            onChangeText={handleChange("phone_number")}
            onBlur={handleBlur("phone_number")}
            value={values.phone_number}
            error={errors.phone_number && touched.phone_number}
          />
          <TextInput
            placeholder={I18n.t("password")}
            name="password"
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
            error={errors.password && touched.password}
          />
          <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
            <TextView title={I18n.t("login")} style={styles.btn_txt} />
          </TouchableOpacity>
        </>
      )}
    </Formik>
  );
};

export default SignInForm;
