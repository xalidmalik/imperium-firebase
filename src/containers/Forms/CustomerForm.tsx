import React, { Component } from "react";
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
// import {
//   drivingClasses,
//   bloodGroup
// } from "../../helpers/Static/TransferedData";
import { city as NationalityCities } from "../../helpers/Static/Cities";

class CustomerForm extends Component {
  state = {
    countries: [],
    cities: [],
    counties: []
  };

  // CustomerCreateControl = prevProps => {
  //   const {
  //     customerCreateIsLoading,
  //     customerCreateResponse,
  //     errorMessage,
  //     isModal
  //   } = this.props;

  //   if (
  //     prevProps.customerCreateIsLoading &&
  //     !customerCreateIsLoading &&
  //     customerCreateResponse
  //   ) {
  //     AlertSwal(message.success.title, message.success.type);
  //     if (isModal) {
  //       this.props.IsCustomerCreate && this.props.IsCustomerCreate(true);
  //     }
  //   }
  // };

  // CustomerUpdateControl = prevProps => {
  //   const { customerUpdateResponse, customerUpdateIsLoading } = this.props;

  //   if (
  //     prevProps.customerUpdateIsLoading &&
  //     !customerUpdateIsLoading &&
  //     customerUpdateResponse
  //   ) {
  //     AlertSwal(message.success.title, message.success.type);
  //   } else if (
  //     prevProps.customerUpdateIsLoading &&
  //     !customerUpdateIsLoading &&
  //     !customerUpdateResponse
  //   ) {
  //     localStorage.setItem(
  //       "SelectedCustomer",
  //       JSON.stringify(this.props.activeCustomer)
  //     );
  //     AlertSwal(message.error.title, message.error.type);
  //   }
  // };

  // setCountries = prevProps => {
  //   const { countryIsLoading, countries, activeCustomer } = this.props;
  //   let temp = [];
  //   if (prevProps.countryIsLoading && !countryIsLoading && countries) {
  //     countries.map(country => {
  //       temp.push({
  //         value: country.Code,
  //         label: country.Name
  //       });
  //     });
  //     this.setState({
  //       countries: temp
  //     });
  //   }
  // };

  // setCities = countryCode => {
  //   const { cities, activeCustomer } = this.props;
  //   if (cities) {
  //     let temp = [];
  //     cities
  //       .filter(b => b.CountryCode == countryCode)
  //       .map(city => {
  //         temp.push({
  //           value: city.Id,
  //           label: city.Name
  //         });
  //       });
  //     this.setState(
  //       {
  //         cities: temp,
  //         counties: []
  //       },
  //       () => {
  //         this.state.cities.length !== 0 &&
  //           activeCustomer &&
  //           this.setCounties(activeCustomer.CityId);
  //       }
  //     );
  //   }
  // };

  // setCounties = cityId => {
  //   const { counties, cities } = this.props;
  //   if (counties && cities) {
  //     let temp = [];
  //     counties
  //       .filter(b => b.CityId == cityId)
  //       .map(county => {
  //         temp.push({
  //           value: county.Id,
  //           label: county.Name
  //         });
  //       });
  //     this.setState({
  //       counties: temp
  //     });
  //   }
  // };

  // componentWillMount() {
  //   this.props.fetchCountry();
  //   this.props.fetchCity();
  //   this.props.fetchCounty();
  // }

  // componentDidUpdate(prevProps) {
  //   this.CustomerCreateControl(prevProps);
  //   this.CustomerUpdateControl(prevProps);
  //   this.setCountries(prevProps);
  // }

  // componentDidMount() {
  //   console.log("Ek sofor", this.props.AdditionalCustomerId);
  //   setTimeout(() => {
  //     const { activeCustomer } = this.props;
  //     if (activeCustomer) {
  //       this.setCities(activeCustomer.CountryCode);
  //     }
  //   }, 770);
  // }

  // isObject = value => {
  //   if (value && typeof value == "object") {
  //     return true;
  //   }
  //   return false;
  // };

  // updateModelControl = values => {
  //   values.BloodGroup = this.isObject(values.BloodGroup)
  //     ? values.BloodGroup.value
  //     : values.BloodGroup;

  //   values.CityId = this.isObject(values.CityId)
  //     ? values.CityId.value
  //     : values.CityId;

  //   values.CountryCode = this.isObject(values.CountryCode)
  //     ? values.CountryCode.value
  //     : values.CountryCode;

  //   values.CountyId = this.isObject(values.CountyId)
  //     ? values.CountyId.value
  //     : values.CountyId;

  //   values.DrivingClasses = this.isObject(values.DrivingClasses)
  //     ? values.DrivingClasses.label
  //     : values.DrivingClasses;

  //   values.Nationality = this.isObject(values.Nationality)
  //     ? values.Nationality.label
  //     : values.Nationality;
  //   localStorage.setItem("SelectedCustomer", JSON.stringify(values));
  // };

  render() {
    return (
      <Formik
        initialValues={
          this.props.activeCustomer || {
            Address: "",
            BirthOfDateTime: "",
            BloodGroup: "",
            CityId: null,
            CountryCode: null,
            CountyId: null,
            DrivingClasses: "",
            EMail: "",
            FirstPhone: "",
            Gender: "0",
            LicenseYear: "",
            LocationSite: "",
            Name: "",
            NameOfFather: "",
            NameOfMother: "",
            Nationality: "",
            PassportSerialNumber: "",
            Profession: "",
            SecondPhone: "",
            SecondPhoneOwner: null,
            SerialNumberOfDrivingLicense: "",
            Surname: "",
            Tc: "",
            IsAdditionalDriver: this.props.AdditionalCustomerId ? true : false
          }
        }
        validationSchema={customerSchema}
        onSubmit={(values, { setSubmitting }) => {
          if (this.props.activeCustomer) {
            this.updateModelControl(values);
            this.props.putCustomer(values);
          } else {
            values.BloodGroup = values.BloodGroup && values.BloodGroup.value;
            values.CityId = values.CityId && values.CityId.value;
            values.CountryCode = values.CountryCode && values.CountryCode.value;
            values.CountyId = values.CountyId && values.CountyId.value;
            values.DrivingClasses =
              values.DrivingClasses && values.DrivingClasses.label;
            values.Nationality = values.Nationality && values.Nationality.label;
            this.props.postCustomer(values);
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
                base={defaultForm.Tc}
                touched={touched.Tc}
                errors={errors.Tc}
                values={values.Tc}
              />
              <Radiobox
                touched={touched.Gender}
                errors={errors.Gender}
                values={values.Gender}
                options={gender}
                base={defaultForm.Gender}
              />

              <Fields
                base={defaultForm.BirthOfDateTime}
                touched={touched.BirthOfDateTime}
                errors={errors.BirthOfDateTime}
                values={values.BirthOfDateTime}
              />
              <Dropdown
                base={defaultForm.Nationality}
                touched={touched.Nationality}
                errors={errors.Nationality}
                values={values.Nationality}
                options={NationalityCities}
                onChange={setFieldValue}
              />
              <Dropdown
                base={defaultForm.BloodGroup}
                touched={touched.BloodGroup}
                errors={errors.BloodGroup}
                values={values.BloodGroup}
                // options={bloodGroup}
                onChange={setFieldValue}
              />

              <Fields
                base={defaultForm.NameOfMother}
                touched={touched.NameOfMother}
                errors={errors.NameOfMother}
                values={values.NameOfMother}
              />
              <Fields
                base={defaultForm.NameOfFather}
                touched={touched.NameOfFather}
                errors={errors.NameOfFather}
                values={values.NameOfFather}
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
                base={defaultForm.SecondPhone}
                touched={touched.SecondPhone}
                errors={errors.SecondPhone}
                values={values.SecondPhone}
              />

              <Fields
                base={defaultForm.SecondPhoneOwner}
                touched={touched.SecondPhoneOwner}
                errors={errors.SecondPhoneOwner}
                values={values.SecondPhoneOwner}
              />

              <Fields
                base={defaultForm.EMail}
                touched={touched.EMail}
                errors={errors.EMail}
                values={values.EMail}
              />

              <Fields
                base={defaultForm.WorkPhone}
                touched={touched.WorkPhone}
                errors={errors.WorkPhone}
                values={values.WorkPhone}
              />

              <Fields
                base={defaultForm.WorkPlace}
                touched={touched.WorkPlace}
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
                isLoading={this.props.countryIsLoading}
                base={defaultForm.CountryCode}
                touched={touched.CountryCode}
                errors={errors.CountryCode}
                values={values.CountryCode}
                options={this.state.countries}
                onChange={setFieldValue}
                selectedValue={value => this.setCities(value.value)}
              />
              <Dropdown
                isLoading={this.props.cityIsLoading}
                base={defaultForm.CityId}
                touched={touched.CityId}
                errors={errors.CityId}
                values={values.CityId}
                options={this.state.cities}
                onChange={setFieldValue}
                selectedValue={value => this.setCounties(value.value)}
                loadingMessage="Yükleniyor..."
              />
              <Dropdown
                isLoading={this.props.countyIsLoading}
                base={defaultForm.CountyId}
                touched={touched.CountyId}
                errors={errors.CountyId}
                values={values.CountyId}
                options={this.state.counties}
                onChange={setFieldValue}
                loadingMessage="Yükleniyor..."
              />

              <Fields
                base={defaultForm.Address}
                touched={touched.Address}
                errors={errors.Address}
                values={values.Address}
                loadingMessage="Yükleniyor..."
              />
            </Card>

            <Card base={customer.driveLicense}>
              <Dropdown
                isLoading={this.props.countyIsLoading}
                base={defaultForm.DrivingClasses}
                touched={touched.DrivingClasses}
                errors={errors.DrivingClasses}
                values={values.DrivingClasses}
                options={drivingClasses}
                onChange={setFieldValue}
              />

              <Fields
                base={defaultForm.SerialNumberOfDrivingLicense}
                touched={touched.SerialNumberOfDrivingLicense}
                errors={errors.SerialNumberOfDrivingLicense}
                values={values.SerialNumberOfDrivingLicense}
              />

              <Fields
                base={defaultForm.LicenseYear}
                touched={touched.LicenseYear}
                errors={errors.LicenseYear}
                values={values.LicenseYear}
              />
            </Card>
          </Form>
        )}
      </Formik>
    );
  }
}

export default CustomerForm;
