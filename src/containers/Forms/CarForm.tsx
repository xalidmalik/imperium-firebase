import React, { Component } from "react";
import Fields from "../../components/FormElements/Input/Fields";
import Radiobox from "../../components/FormElements/Input/Radiobox";
import { carForm } from "../../helpers/Static/FormFields";
import { carSchema } from "../../helpers/Validations/Yup";
import {
  CarClasses,
  CaseTypeList,
  GearTypeList,
  fuelTypeList,
  EngineCapacityList
} from "../../helpers/Static/Options";
import { car } from "../../helpers/Static/System";
import Card from "../../components/Card/Card";
import { Formik, Form } from "formik";
import { AlertSwal } from "../../helpers/Alert/Alert";
import { message } from "../../helpers/Static/System";
import { History } from "../../helpers/Static/History";
// import DropDown from "../../components/FormElements/Input/DropDown";

class CarForm extends Component {
  //   state = {
  //     brands: [],
  //     models: []
  //   };
  //   setAllBrand = prevProps => {
  //     const {
  //       allBrandIsLoading,
  //       allBrand,
  //       allBrandError,
  //       activeCar
  //     } = this.props;
  //     if (prevProps.allBrandIsLoading && !allBrandIsLoading && allBrand) {
  //       this.setState(
  //         {
  //           brands: allBrand.map(brand => ({
  //             label: brand.Name,
  //             value: brand.Id
  //           }))
  //         },
  //         () => {
  //           setTimeout(() => {
  //             activeCar && this.setAllModel(activeCar.BrandId);
  //           }, 770);
  //         }
  //       );
  //     }
  //   };

  //   setAllModel = brandId => {
  //     const { allModel } = this.props;
  //     if (allModel) {
  //       this.setState({
  //         models: allModel
  //           .filter(q => q.BrandId == brandId)
  //           .map(model => ({
  //             label: model.Name,
  //             value: model.Id
  //           }))
  //       });
  //     }
  //   };

  //   createCarControl = prevProps => {
  //     const { carCreateResponse, carCreateIsLoading } = this.props;
  //     if (
  //       prevProps.carCreateIsLoading &&
  //       !carCreateIsLoading &&
  //       carCreateResponse
  //     ) {
  //       AlertSwal(message.success.title, message.success.type);
  //     } else if (
  //       prevProps.carCreateIsLoading &&
  //       !carCreateIsLoading &&
  //       !carCreateResponse
  //     ) {
  //       AlertSwal(message.error.title, message.error.type);
  //     }
  //   };

  //   updateCarControl = prevProps => {
  //     const { carUpdateResponse, carUpdateIsLoading } = this.props;

  //     if (
  //       prevProps.carUpdateIsLoading &&
  //       !carUpdateIsLoading &&
  //       carUpdateResponse
  //     ) {
  //       AlertSwal(message.success.title, message.success.type);
  //     } else if (
  //       prevProps.carUpdateIsLoading &&
  //       !carUpdateIsLoading &&
  //       !carUpdateResponse
  //     ) {
  //       AlertSwal(message.error.title, message.error.type);
  //     }
  //   };

  //   componentDidMount() {
  //     this.props.fetchAllBrand();
  //     this.props.fetchAllModel();
  //   }

  //   componentDidUpdate(prevProps) {
  //     this.setAllBrand(prevProps);
  //     this.createCarControl(prevProps);
  //     this.updateCarControl(prevProps);
  //   }

  //   isObject = value => {
  //     if (value && typeof value == "object") {
  //       return true;
  //     }
  //     return false;
  //   };

  //   newCarModelling = values => {
  //     values.BrandId = values.BrandId.value;
  //     values.BrandModelId = values.BrandModelId.value;
  //     values.CaseType = values.CaseType.value;
  //     values.EngineCapacity = values.EngineCapacity.label;
  //   };

  //   updateCarModelling = values => {
  //     values.BrandId = this.isObject(values.BrandId)
  //       ? values.BrandId.BrandId
  //       : values.BrandId;

  //     values.BrandModelId = this.isObject(values.BrandModelId)
  //       ? values.BrandModelId.value
  //       : values.BrandModelId;

  //     values.CaseType = this.isObject(values.CaseType)
  //       ? values.CaseType.value
  //       : values.CaseType;

  //     values.EngineCapacity = this.isObject(values.EngineCapacity)
  //       ? values.EngineCapacity.label
  //       : values.EngineCapacity;
  //   };

  render() {
    return (
      // <Formik
      //   initialValues={
      //     this.props.activeCar || {
      //       BrandId: "",
      //       BrandModelId: "",
      //       Plate: "",
      //       CaseType: "",
      //       FuelType: "1",
      //       GearType: "1",
      //       Km: "",
      //       EngineCapacity: "",
      //       NumberOfDoors: "",
      //       Price: "",
      //       MinDriverLicense: "",
      //       Maintenance: false,
      //       Crash: false,
      //       Color: "",
      //       Deposit: "",
      //       Classes: "0",
      //       Year: "",
      //       IsDeleted: false
      //     }
      //   }
      //   validationSchema={carSchema}
      //   onSubmit={(values, { setSubmitting }) => {
      //     if (this.props.activeCar) {
      //       this.updateCarModelling(values);
      //       console.log("update car :", values);

      //       this.props.putCar(values);
      //     } else {
      //       this.newCarModelling(values);
      //       this.props.postCar(values);
      //     }
      //   }}
      // >
      //   {({
      //     errors,
      //     touched,
      //     values,
      //     handleSubmit,
      //     isSubmitting,
      //     setFieldValue,
      //     setFieldTouched
      //   }) => (
      //     <Form id="CarFormSubmit">
      //       <Card base={car.basicfeatures}>
      //         <DropDown
      //           onChange={setFieldValue}
      //           base={carForm.BrandId}
      //           touched={touched.BrandId}
      //           errors={errors.BrandId}
      //           values={values.BrandId}
      //           options={this.state.brands}
      //           selectedValue={value => this.setAllModel(value.value)}
      //         />
      //         <DropDown
      //           onChange={setFieldValue}
      //           base={carForm.BrandModelId}
      //           touched={touched.BrandModelId}
      //           errors={errors.BrandModelId}
      //           values={values.BrandModelId}
      //           options={this.state.models}
      //           isClearable={true}
      //         />
      //         <DropDown
      //           onChange={setFieldValue}
      //           base={carForm.CaseType}
      //           touched={touched.CaseType}
      //           errors={errors.CaseType}
      //           values={values.CaseType}
      //           options={CaseTypeList}
      //         />
      //         <DropDown
      //           onChange={setFieldValue}
      //           base={carForm.EngineCapacity}
      //           touched={touched.EngineCapacity}
      //           errors={errors.EngineCapacity}
      //           values={values.EngineCapacity}
      //           options={EngineCapacityList}
      //         />

      //         <Fields
      //           base={carForm.Year}
      //           touched={touched.Year}
      //           errors={errors.Year}
      //           values={values.Year}
      //         />
      //         <Fields
      //           base={carForm.NumberOfDoors}
      //           touched={touched.NumberOfDoors}
      //           errors={errors.NumberOfDoors}
      //           values={values.NumberOfDoors}
      //         />
      //         <Radiobox
      //           base={carForm.FuelType}
      //           touched={touched.FuelType}
      //           errors={errors.FuelType}
      //           values={values.FuelType}
      //           options={fuelTypeList}
      //         />
      //         <Radiobox
      //           base={carForm.GearType}
      //           touched={touched.GearType}
      //           errors={errors.GearType}
      //           values={values.GearType}
      //           options={GearTypeList}
      //         />
      //         <Radiobox
      //           base={carForm.Classes}
      //           touched={touched.Classes}
      //           errors={errors.Classes}
      //           values={values.Classes}
      //           options={CarClasses}
      //         />
      //         {/* <Radiobox
      //           base={carForm.NumberOfDoors}
      //           touched={touched.NumberOfDoors}
      //           errors={errors.NumberOfDoors}
      //           values={values.NumberOfDoors}
      //           options={gearTypeList}
      //         /> */}

      //         {/* <Checkbox
      //           base={carForm.Maintenance}
      //           touched={touched.Maintenance}
      //           errors={errors.Maintenance}
      //           values={values.Maintenance}
      //         /> */}
      //       </Card>
      //       <Card base={car.additionalinfo}>
      //         {/* <ColorPicker
      //           base={carForm.Color}
      //           options={color}
      //           touched={touched.Color}
      //           errors={errors.Color}
      //           values={values.Color}
      //         /> */}
      //         <Fields
      //           base={carForm.Plate}
      //           touched={touched.Plate}
      //           errors={errors.Plate}
      //           values={values.Plate}
      //         />
      //         <Fields
      //           base={carForm.Price}
      //           touched={touched.Price}
      //           errors={errors.Price}
      //           values={values.Price}
      //         />
      //         <Fields
      //           base={carForm.Km}
      //           touched={touched.Km}
      //           errors={errors.Km}
      //           values={values.Km}
      //         />
      //         <Fields
      //           base={carForm.MinDriverLicense}
      //           touched={touched.MinDriverLicense}
      //           errors={errors.MinDriverLicense}
      //           values={values.MinDriverLicense}
      //         />
      //       </Card>
      //     </Form>
      //   )}
      // </Formik>
      <> </>
    );
  }
}

export default CarForm;
