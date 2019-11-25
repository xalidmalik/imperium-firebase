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
// import { AlertSwal } from "../../helpers/Alert/Alert";
import { message } from "../../helpers/Static/System";
import { History } from "../../helpers/Static/History";
import Dropdown from "../../components/FormElements/Input/Dropdown";
import { CarModel } from "src/helpers/Database/CarInterfaces";
import Header from "src/components/Header/Header";
import { HeaderCarNew } from "src/helpers/Static/Headers";

const CarForm: React.FC<any> = (props: any) => {
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

  return (
    <>
      <Header
        titleFirst={HeaderCarNew.titleFirst}
        linkFirst={HeaderCarNew.linkFirst}
        titleSecond={HeaderCarNew.titleSecond}
        btnForm={HeaderCarNew.btnForm}
        btnTitle={HeaderCarNew.btnTitle}
      />
      <Formik
        initialValues={new CarModel()}
        validationSchema={carSchema}
        onSubmit={(values, { setSubmitting }) => {
          // if (this.props.activeCar) {
          //   this.updateCarModelling(values);
          //   console.log("update car :", values);
          //   this.props.putCar(values);
          // } else {
          //   this.newCarModelling(values);
          //   this.props.postCar(values);
          // }
        }}
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
          <Form id="CarFormSubmit">
            <Card base={car.basicfeatures}>
              <Dropdown
                onChange={setFieldValue}
                base={carForm.BrandName}
                touched={touched.BrandName}
                errors={errors.BrandName}
                values={values.BrandName}
                // options={this.state.brands}
                // selectedValue={value => this.setAllModel(value.value)}
              />
              <Dropdown
                onChange={setFieldValue}
                base={carForm.ModelName}
                touched={touched.ModelName}
                errors={errors.ModelName}
                values={values.ModelName}
                // options={this.state.models}
                isClearable={true}
              />
              <Dropdown
                onChange={setFieldValue}
                base={carForm.CaseType}
                touched={touched.CaseType}
                errors={errors.CaseType}
                values={values.CaseType}
                options={CaseTypeList}
              />
              <Dropdown
                onChange={setFieldValue}
                base={carForm.EngineCapacity}
                touched={touched.EngineCapacity}
                errors={errors.EngineCapacity}
                values={values.EngineCapacity}
                options={EngineCapacityList}
              />

              <Fields
                base={carForm.Year}
                touched={touched.Year}
                errors={errors.Year}
                values={values.Year}
              />
              <Radiobox
                base={carForm.DoorsNumber}
                touched={touched.DoorsNumber}
                errors={errors.DoorsNumber}
                values={values.DoorsNumber}
                // options={gearTypeList}
              />
              <Radiobox
                base={carForm.FuelType}
                touched={touched.FuelType}
                errors={errors.FuelType}
                values={values.FuelType}
                options={fuelTypeList}
              />
              <Radiobox
                base={carForm.GearType}
                touched={touched.GearType}
                errors={errors.GearType}
                values={values.GearType}
                options={GearTypeList}
              />
              <Radiobox
                base={carForm.Classes}
                touched={touched.Classes}
                errors={errors.Classes}
                values={values.Classes}
                options={CarClasses}
              />
            </Card>
            <Card base={car.additionalinfo}>
              {/* <ColorPicker
                base={carForm.Color}
                options={color}
                touched={touched.Color}
                errors={errors.Color}
                values={values.Color}
              /> */}
              <Fields
                base={carForm.Plate}
                touched={touched.Plate}
                errors={errors.Plate}
                values={values.Plate}
              />
              <Fields
                base={carForm.Price}
                touched={touched.Price}
                errors={errors.Price}
                values={values.Price}
              />
              <Fields
                base={carForm.Deposit}
                touched={touched.Deposit}
                errors={errors.Deposit}
                values={values.Deposit}
              />
              <Fields
                base={carForm.KM}
                touched={touched.KM}
                errors={errors.KM}
                values={values.KM}
              />
              <Fields
                base={carForm.Color}
                touched={touched.Color}
                errors={errors.Color}
                values={values.Color}
              />
              <Fields
                base={carForm.MinDriverLicenseYear}
                touched={touched.MinDriverLicenseYear}
                errors={errors.MinDriverLicenseYear}
                values={values.MinDriverLicenseYear}
              />
              <Fields
                base={carForm.MinDrivingLicenseYear}
                touched={touched.MinDrivingLicenseYear}
                errors={errors.MinDrivingLicenseYear}
                values={values.MinDrivingLicenseYear}
              />
            </Card>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default CarForm;
