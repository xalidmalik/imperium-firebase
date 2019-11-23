import React, { Component } from "react";
import Card from "../../components/Card/Card";
import { car } from "../../helpers/Static/System";
import { carForm } from "../../helpers/Static/FormFields";
// import FieldOutput from "../../components/FormElements/Outputs/FieldOutput";
// import CheckboxOutput from "../../components/FormElements/Outputs/CheckboxOutput";

export class CarOverview extends Component {
  render() {
    const { data } = this.props;
    return (
      console.log(data),
      (
        <>
          <Card base={car.basicfeatures}>
            {/* <FieldOutput base={carForm.BrandId} data={data.BrandName} />
            <FieldOutput base={carForm.BrandModelId} data={data.ModelName} />
            <FieldOutput
              base={carForm.CaseType}
              data={StringCaseTypeList(data.CaseType)}
            />
            <FieldOutput
              base={carForm.EngineCapacity}
              data={data.EngineCapacity}
            />
            <FieldOutput base={carForm.Year} data={data.Year} />
            <FieldOutput
              base={carForm.NumberOfDoors}
              data={data.NumberOfDoors}
            />
            <FieldOutput
              base={carForm.FuelType}
              data={StringFuelType(data.FuelType)}
            />
            <FieldOutput
              base={carForm.GearType}
              data={StringGearType(data.GearType)}
            />
            <FieldOutput
              base={carForm.Classes}
              data={StringCarClasses(data.Classes)}
            />
          </Card>
          <Card base={car.additionalinfo}>
            <FieldOutput base={carForm.Plate} data={data.Plate} />
            <FieldOutput base={carForm.Price} data={data.Price} />
            <FieldOutput base={carForm.Km} data={data.Km} />
            <FieldOutput
              base={carForm.MinDriverLicense}
              data={data.MinDriverLicense}
            /> */}
          </Card>
        </>
      )
    );
  }
}

export default CarOverview;
