import React, { useState, useEffect } from "react";
import Fields from "../../components/FormElements/Input/Fields";
import Checkbox from "../../components/FormElements/Input/Checkbox";
import Radiobox from "../../components/FormElements/Input/Radiobox";
import { defaultForm } from "../../helpers/Static/FormFields";
import { customerSchema } from "../../helpers/Validations/Yup";
import { gender } from "../../helpers/Static/Options";
import { customer } from "../../helpers/Static/System";
import Card from "../../components/Card/Card";
import Dropdown from "../../components/FormElements/Input/Dropdown";
import { Formik, Form } from "formik";
import { AlertSwal } from "../../helpers/Alert/Alert";
import { message } from "../../helpers/Static/System";
import { History } from "../../helpers/Static/History";
import { drivingClasses, bloodGroup } from "../../helpers/Static/Options";
import { city as NationalityCities, city } from "../../helpers/Static/Cities";
import {
  ICustomer,
  CustomerModel
} from "src/helpers/Database/CustomerInterfaces";
import { locations } from "../../helpers/Static/CountriesAndCities";
import { CreateCustomer, UpdateCustomer } from "src/database/Customer";

const CustomerForm: React.FC<any> = (data: any) => {
  const { activeCustomer } = data;
  const fillCities = countryName => {
    if (countryName) {
      let city = Object.keys(locations[countryName]);
      setCities(city.map((c, index) => ({ label: c, value: index })));
    }
  };

  const fillCountries = () => {
    let country = Object.keys(locations);
    setCountries(country.map((c, index) => ({ label: c, value: index })));
  };

  const fillCounties = (countryName, cityName) => {
    if (countryName && cityName) {
      let county = Object.values(locations[countryName][cityName]);
      setCounties(county.map((c, index) => ({ label: c, value: index })));
    }
  };

  const [cities, setCities] = useState<any>([]);
  const [countries, setCountries] = useState<any>([]);
  const [counties, setCounties] = useState<any>([]);

  useEffect(() => {
    fillCountries();
    if (activeCustomer) {
      fillCities(activeCustomer.Country);
      fillCounties(activeCustomer.Country, activeCustomer.City);
    }
  }, []);

  const CreateRecord = (values: ICustomer) => {
    values.Code = "ayazarac";
    CreateCustomer(values).then(success => {
      AlertSwal(message.success.title, message.success.type);
    });
  };

  const PutRecord = (values: ICustomer) => {
    values.Code = "ayazarac";
    UpdateCustomer(values).then(success => {
      AlertSwal(message.success.title, message.success.type);
    });
  };

  return (
    <>
      <Formik
        initialValues={activeCustomer || new CustomerModel()}
        validationSchema={customerSchema}
        onSubmit={(values, { setSubmitting }) => {
          if (activeCustomer) {
            PutRecord(values);
          } else {
            CreateRecord(values);
          }
        }}
      >
        {({
          errors,
          touched,
          values,
          handleSubmit,
          isSubmitting,
          setFieldValue,
          setFieldTouched,
          handleReset,
          dirty
        }) => (
            <Form id="CustomerFormSubmit">
              <Card base={customer.identity}>
                <Fields
                  base={defaultForm.Name}
                  touched={touched.Name}
                  errors={errors.Name}
                  values={values.Name}
                />
                <Fields
                  base={defaultForm.Surname}
                  touched={touched.Surname}
                  errors={errors.Surname}
                  values={values.Surname}
                />
                <Fields
                  base={defaultForm.TCNumber}
                  touched={touched.TCNumber}
                  errors={errors.TCNumber}
                  values={values.TCNumber}
                />
                <Radiobox
                  touched={touched.Gender}
                  errors={errors.Gender}
                  values={values.Gender}
                  options={gender}
                  base={defaultForm.Gender}
                />

                <Fields
                  base={defaultForm.BirthDate}
                  touched={touched.BirthDate}
                  errors={errors.BirthDate}
                  values={values.BirthDate}
                />
                <Dropdown
                  base={defaultForm.BirthPlace}
                  touched={touched.BirthPlace}
                  errors={errors.BirthPlace}
                  values={values.BirthPlace}
                  options={NationalityCities}
                  onChange={setFieldValue}
                />
                <Dropdown
                  base={defaultForm.BloodGroup}
                  touched={touched.BloodGroup}
                  errors={errors.BloodGroup}
                  values={values.BloodGroup}
                  options={bloodGroup}
                  onChange={setFieldValue}
                />

                <Fields
                  base={defaultForm.MotherName}
                  touched={touched.MotherName}
                  errors={errors.MotherName}
                  values={values.MotherName}
                />
                <Fields
                  base={defaultForm.FatherName}
                  touched={touched.FatherName}
                  errors={errors.FatherName}
                  values={values.FatherName}
                />
              </Card>
              <Card base={customer.contact}>
                <Fields
                  base={defaultForm.FirstPhone}
                  touched={touched.FirstPhone}
                  errors={errors.FirstPhone}
                  values={values.FirstPhone}
                />
                <Fields
                  base={defaultForm.EmergencyPhone}
                  touched={touched.EmergencyPhone}
                  errors={errors.EmergencyPhone}
                  values={values.EmergencyPhone}
                />

                <Fields
                  base={defaultForm.EmergencyPhoneOwner}
                  touched={touched.EmergencyPhoneOwner}
                  errors={errors.EmergencyPhoneOwner}
                  values={values.EmergencyPhoneOwner}
                />

                <Fields
                  base={defaultForm.Email}
                  touched={touched.Email}
                  errors={errors.Email}
                  values={values.Email}
                />

                <Fields
                  base={defaultForm.WorkPhone}
                  touched={touched.WorkPhone}
                  errors={errors.WorkPhone}
                  values={values.WorkPhone}
                />

                <Fields
                  base={defaultForm.WorkPlace}
                  touched={touched.WorkPhone}
                  errors={errors.WorkPlace}
                  values={values.WorkPlace}
                />

                <Fields
                  base={defaultForm.Profession}
                  touched={touched.Profession}
                  errors={errors.Profession}
                  values={values.Profession}
                />

                <Dropdown
                  base={defaultForm.Country}
                  touched={touched.Country}
                  errors={errors.Country}
                  values={values.Country}
                  options={countries}
                  onChange={setFieldValue}
                  selectedValue={value => {
                    fillCities(value.label);
                  }}
                />
                <Dropdown
                  base={defaultForm.City}
                  touched={touched.City}
                  errors={errors.City}
                  values={values.City}
                  options={cities}
                  onChange={setFieldValue}
                  selectedValue={value => {
                    fillCounties(values.Country, value.label);
                  }}
                  loadingMessage="Yükleniyor..."
                />
                <Dropdown
                  base={defaultForm.County}
                  touched={touched.County}
                  errors={errors.County}
                  values={values.County}
                  options={counties}
                  onChange={setFieldValue}
                  loadingMessage="Yükleniyor..."
                />

                <Fields
                  base={defaultForm.Address}
                  touched={touched.Address}
                  errors={errors.Address}
                  values={values.Address}
                />
              </Card>

              <Card base={customer.driveLicense}>
                <Dropdown
                  base={defaultForm.DrivingClasses}
                  touched={touched.DrivingClasses}
                  errors={errors.DrivingClasses}
                  values={values.DrivingClasses}
                  options={drivingClasses}
                  onChange={setFieldValue}
                  isMulti={true}
                />

                <Fields
                  base={defaultForm.DrivingLicenseNumber}
                  touched={touched.DrivingLicenseNumber}
                  errors={errors.DrivingLicenseNumber}
                  values={values.DrivingLicenseNumber}
                />

                <Fields
                  base={defaultForm.DrivingLicenseYear}
                  touched={touched.DrivingLicenseYear}
                  errors={errors.DrivingLicenseYear}
                  values={values.DrivingLicenseYear}
                />
              </Card>
            </Form>
          )}
      </Formik>
    </>
  );
};

export default CustomerForm;
