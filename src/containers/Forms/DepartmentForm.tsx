import React, { Component } from "react";
import Fields from "../../components/FormElements/Input/Fields";
import Checkbox from "../../components/FormElements/Input/Checkbox";
import Radiobox from "../../components/FormElements/Input/Radiobox";
// import DropDown from "../../components/FormElements/Input/DropDown";
import { departmentForm } from "../../helpers/Static/FormFields";
import { department } from "../../helpers/Static/System";
import Card from "../../components/Card/Card";
import { Formik, Form } from "formik";
import { message } from "../../helpers/Static/System";
import { AlertSwal } from "../../helpers/Alert/Alert";
import { History } from "../../helpers/Static/History";
import { DepartmentModel } from "src/helpers/Database/DepartmentInterface";
import { departmentSchema } from "../../helpers/Validations/Yup";

class DepartmentForm extends Component {
  OpenModal = () => {
    // this.refs.modal.ToggleModalShow();
  };

  render() {
    return (
      <>
        <Formik
          initialValues={new DepartmentModel()}
          validationSchema={departmentSchema}
          onSubmit={(values, { setSubmitting }) => {}}
        >
          {({
            errors,
            touched,
            values,
            handleSubmit,
            isSubmitting,
            setFieldValue,
            setFieldTouched
          }) => (
            <Form id="DepartmentFormSubmit">
              <Card base={department.corporateinfo}>
                <Fields
                  base={departmentForm.BrandLogo}
                  values={values.BrandLogo}
                  errors={errors.BrandLogo}
                  touched={touched.BrandLogo}
                />
                <Fields
                  base={departmentForm.OfficialEmail}
                  values={values.OfficialEmail}
                  errors={errors.OfficialEmail}
                  touched={touched.OfficialEmail}
                />
                <Fields
                  base={departmentForm.PublicSiteUrl}
                  values={values.PublicSiteUrl}
                  errors={errors.PublicSiteUrl}
                  touched={touched.PublicSiteUrl}
                />
              </Card>

              <Card base={department.departmentinfo}>
                <Fields
                  base={departmentForm.Code}
                  values={values.Code}
                  errors={errors.Code}
                  touched={touched.Code}
                />
                <Fields
                  base={departmentForm.TaxNumber}
                  values={values.TaxNumber}
                  errors={errors.TaxNumber}
                  touched={touched.TaxNumber}
                />
                <Fields
                  base={departmentForm.TaxAdministration}
                  values={values.TaxAdministration}
                  errors={errors.TaxAdministration}
                  touched={touched.TaxAdministration}
                />
                <Fields
                  base={departmentForm.Name}
                  values={values.Name}
                  errors={errors.Name}
                  touched={touched.Name}
                />
                <Fields
                  base={departmentForm.Name}
                  values={values.Name}
                  errors={errors.Name}
                  touched={touched.Name}
                />
              </Card>

              <Card base={department.contactinfo}>
                <Fields
                  base={departmentForm.Address}
                  values={values.Address}
                  errors={errors.Address}
                  touched={touched.Address}
                />
                <Fields
                  base={departmentForm.Email}
                  values={values.Email}
                  errors={errors.Email}
                  touched={touched.Email}
                />
                <Fields
                  base={departmentForm.Phone}
                  values={values.Phone}
                  errors={errors.Phone}
                  touched={touched.Phone}
                />
                <Fields
                  base={departmentForm.FaxNo}
                  values={values.FaxNo}
                  errors={errors.FaxNo}
                  touched={touched.FaxNo}
                />
              </Card>

              <Card base={department.socialmedia}>
                <Fields
                  base={departmentForm.InstagramUrl}
                  values={values.InstagramUrl}
                  errors={errors.InstagramUrl}
                  touched={touched.InstagramUrl}
                />
                <Fields
                  base={departmentForm.FacebookUrl}
                  values={values.FacebookUrl}
                  errors={errors.FacebookUrl}
                  touched={touched.FacebookUrl}
                />
              </Card>
            </Form>
          )}
        </Formik>
      </>
    );
  }
}

export default DepartmentForm;
