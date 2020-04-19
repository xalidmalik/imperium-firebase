import React, { Component } from "react";
import Card from "../../components/Card/Card";
import { car } from "../../helpers/Static/System";
import { carForm } from "../../helpers/Static/FormFields";
import FieldOutput from "../../components/FormElements/Output/FieldOutput";
import CheckboxOutput from "../../components/FormElements/Output/CheckboxOutput";
import { ICar } from "../../helpers/Database/CarInterfaces";

const CarOverview: React.FC<any> = (props: any) => {
  const { data } = props;
  return (
    <>
      <Card base={car.basicfeatures}>
        <FieldOutput base={carForm.BrandName} data={data.BrandName} />
        <FieldOutput base={carForm.ModelName} data={data.ModelName} />
        <FieldOutput base={carForm.CaseType} data={data.CaseType} />
        <FieldOutput base={carForm.EngineCapacity} data={data.EngineCapacity} />
        <FieldOutput base={carForm.Year} data={data.Year} />
        <FieldOutput base={carForm.DoorsNumber} data={data.DoorsNumber} />
        <FieldOutput base={carForm.FuelType} data={data.FuelType} />
        <FieldOutput base={carForm.GearType} data={data.GearType} />
        <FieldOutput base={carForm.Classes} data={data.Classes} />
      </Card>
      <Card base={car.additionalinfo}>
        <FieldOutput base={carForm.Plate} data={data.Plate} />
        <FieldOutput base={carForm.Deposit} data={data.Deposit} />
        <FieldOutput base={carForm.Price} data={data.Price} />
        <FieldOutput base={carForm.KM} data={data.KM} />
        <FieldOutput
          base={carForm.MinDriverLicenseYear}
          data={data.MinDriverLicenseYear}
        />
        <FieldOutput
          base={carForm.MinDrivingLicenseYear}
          data={data.MinDrivingLicenseYear}
        />
      </Card>
    </>
  );
};

export default CarOverview;
