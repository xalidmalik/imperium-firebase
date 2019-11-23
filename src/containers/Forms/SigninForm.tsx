import React, { Component } from "react";
import Fields from "../../components/FormElements/Input/Fields";
import { signForm } from "../../helpers/Static/FormFields";
import { signSchema } from "../../helpers/Validations/Yup";
import { Formik, Form } from "formik";
import { History } from "../../helpers/Static/History";

class LoginData extends Component {
  //   componentDidUpdate(prevProps) {
  //     if (prevProps.isLoading && !this.props.isLoading && this.props.token) {
  //       localStorage.setItem("token", this.props.token);
  //       localStorage.setItem(
  //         "accesstoken",
  //         AxiosClient.defaults.headers.common["token"]
  //       );
  //       window.location.reload();
  //     }
  //     if (this.props.errorMessage) {
  //       alert("Kullanıcı adı , şifre veya şube kodu yanlış");
  //     }
  //   }

  render() {
    return (
      <> </>
      //   <Formik
      //     initialValues={{
      //       DepartmentCode: "",
      //       Username: "",
      //       Password: ""
      //     }}
      //     validationSchema={signSchema}
      //     onSubmit={(values, { setSubmitting }) => {
      //       localStorage.setItem("departmentcode", values.DepartmentCode);
      //       this.props.fetchToken(values.Username, values.Password);
      //     }}
      //   >
      //     {/* {({ errors, touched, values, handleSubmit, isSubmitting }) => (
      //       <Form>
      //         <Fields
      //           base={signForm.DepartmentCode}
      //           touched={touched.DepartmentCode}
      //           errors={errors.DepartmentCode}
      //         />
      //         <Fields
      //           base={signForm.Username}
      //           touched={touched.Username}
      //           errors={errors.Username}
      //         />
      //         <Fields
      //           base={signForm.Password}
      //           touched={touched.Password}
      //           errors={errors.Password}
      //         />

      //         <button
      //           type="submit"
      //           className="px-6 py-4 mt-20 w-full bg-orange-400 rounded shadow-base"
      //         >
      //           Giriş Yap
      //         </button>
      //       </Form>
      //     )} */}
      //   </Formik>
    );
  }
}

export default LoginData;
