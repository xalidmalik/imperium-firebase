import React, { useState, useEffect } from "react";
import Fields from "../../components/FormElements/Input/Fields";
import Radiobox from "../../components/FormElements/Input/Radiobox";
import { carForm } from "../../helpers/Static/FormFields";
import { carSchema } from "../../helpers/Validations/Yup";
import {
  carClasses,
  caseTypeList,
  gearTypeList,
  fuelTypeList,
  engineCapacityList,
  doorsNumberList
} from "../../helpers/Static/Options";
import { car } from "../../helpers/Static/System";
import Card from "../../components/Card/Card";
import { Formik, Form } from "formik";
import { AlertSwal } from "../../helpers/Alert/Alert";
import { message } from "../../helpers/Static/System";
import { History } from "../../helpers/Static/History";
import Dropdown from "../../components/FormElements/Input/Dropdown";
import { CarModel, ICar } from "src/helpers/Database/CarInterfaces";
import Header from "src/components/Header/Header";
import { HeaderCarNew } from "src/helpers/Static/Headers";
import { AddRecord, UpdateRecord } from "../../database/index";
import CarModelList from "../../helpers/Static/CarList.json";

const CarForm: React.FC<any> = (props: any) => {
  const [brandList, setBrandList] = useState<any>([]);
  const [modelList, setModelList] = useState<any>([]);
  const [ImageUrl, setImageUrl] = useState<any>([]);

  const fillBrand = () => {
    setBrandList(
      CarModelList.map((i, index) => ({
        label: i.Name,
        value: index,
        BrandModels: i.BrandModels
      }))
    );
  };
  const fillModel = (ModelName: any) => {
    setModelList(
      ModelName.map((i, index) => ({
        label: i.Name,
        value: index,
        Image: i.Image
      }))
    );
  };

  useEffect(() => {
    fillBrand();
    // if (activeCar) {
    //   fillModel(activeCar.Name);
    // }
  }, []);

  const CreateRecord = (values: ICar) => {
    values.Image = ImageUrl;
    values.Code = "ayazarac";
    AddRecord("Car", "ayazarac", values).then(success => {
      AlertSwal(message.success);
    });
  };

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
          CreateRecord(values);
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
                options={brandList}
                selectedValue={value => fillModel(value.BrandModels)}
              />
              <Dropdown
                onChange={setFieldValue}
                base={carForm.ModelName}
                touched={touched.ModelName}
                errors={errors.ModelName}
                values={values.ModelName}
                options={modelList}
                selectedValue={value => setImageUrl(value.Image)}
                isClearable={true}
              />
              <Dropdown
                onChange={setFieldValue}
                base={carForm.CaseType}
                touched={touched.CaseType}
                errors={errors.CaseType}
                values={values.CaseType}
                options={caseTypeList}
              />
              <Dropdown
                onChange={setFieldValue}
                base={carForm.EngineCapacity}
                touched={touched.EngineCapacity}
                errors={errors.EngineCapacity}
                values={values.EngineCapacity}
                options={engineCapacityList}
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
                options={doorsNumberList}
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
                options={gearTypeList}
              />
              <Radiobox
                base={carForm.Classes}
                touched={touched.Classes}
                errors={errors.Classes}
                values={values.Classes}
                options={carClasses}
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
