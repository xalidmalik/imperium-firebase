import React, { Component } from "react";
import Fields from "../../components/FormElements/Input/Fields";
import { signForm } from "../../helpers/Static/FormFields";
import { signSchema } from "../../helpers/Validations/Yup";
import { Formik, Form } from "formik";
import { LoginWithEmail } from "../../database/Auth";
import SecureSore from "secure-ls";
import { auth } from "../../firebase/firebaseconfig";

class LoginData extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          DepartmentCode: "",
          Username: "",
          Password: ""
        }}
        validationSchema={signSchema}
        onSubmit={(values, { setSubmitting }) => {
          LoginWithEmail(values.Username, values.Password)
            .then(response => {
              if (response.user) {
                let ls = new SecureSore();
                ls.set("userId", response.user.uid);
                let isLogin = auth.currentUser;
                console.log("is login :", isLogin);
                window.location.reload();
              }
            })
            .catch(error => {
              console.log("Response :", error);
            });
        }}
      >
        {({ errors, touched, values, handleSubmit, isSubmitting }) => (
          <Form>
            <Fields
              values={values.Username}
              base={signForm.Username}
              touched={touched.Username}
              errors={errors.Username}
            />
            <Fields
              values={values.Password}
              base={signForm.Password}
              touched={touched.Password}
              errors={errors.Password}
            />

            <button
              type="submit"
              className="px-6 py-4 mt-20 w-full bg-orange-400 rounded shadow-base"
            >
              Giriş Yap
            </button>
          </Form>
        )}
      </Formik>
    );
  }
}

export default LoginData;
