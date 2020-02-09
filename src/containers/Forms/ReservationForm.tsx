import React, { forwardRef, useEffect, useState } from "react";
import Fields from "../../components/FormElements/Input/Fields";
import Checkbox from "../../components/FormElements/Input/Checkbox";
import Radiobox from "../../components/FormElements/Input/Radiobox";
import Dropdown from "../../components/FormElements/Input/Dropdown";
import { reservationForm } from "../../helpers/Static/FormFields";
import { reservation } from "../../helpers/Static/System";
import Card from "../../components/Card/Card";
import { Formik, Form } from "formik";
import { message } from "../../helpers/Static/System";
import { AlertSwal } from "../../helpers/Alert/Alert";
import { History } from "../../helpers/Static/History";
import DatetimePicker from "../../components/FormElements/Input/DatetimePicker";
import RightModal from "../../components/Modal/RightModal";
import CustomerForm from "./CustomerForm";
import Header from "../../components/Header/Header";
import FieldOutput from "../../components/FormElements/Output/FieldOutput";
import moment from "moment";
import {
  reservationType,
  paymentType,
  gender,
  color
} from "../../helpers/Static/Options";
import { ReservationModel } from "src/helpers/Database/ReservationInterface";
import { ICustomer } from "../../helpers/Database/CustomerInterfaces";
import {
  GetRecords,
  GetAvailableCars,
  AddRecord,
  UpdateRecord
} from "../../database/index";
import { IReservation } from "../../helpers/Database/ReservationInterface";
import { isEmpty } from "lodash";

const ReservationForm: React.FC<any> = (data: any) => {
  const { activeReservation } = data;
  console.log("active :", activeReservation);

  const [customers, setCustomer] = useState<ICustomer[]>(
    new Array<ICustomer>()
  );

  const [selectedCarId, setSelectedCarId] = useState<any>();
  const [selectedCustomerId, setSelectedCustomerId] = useState<any>();

  const [availableCars, setAvailableCars] = useState<any>();

  const setAvailableCarList = values => {
    GetAvailableCars(values.BeginDateTime, values.EndDateTime).then(q => {
      if (isEmpty(q)) {
        GetRecords("Car", "ayazarac").then(q => {
          setAvailableCars(
            q.map((data: any) => ({
              label: `${data.BrandName} | ${data.ModelName} | ${data.Plate}`,
              value: data.Id
            }))
          );
        });
      } else {
        setAvailableCars(
          q.map((data: any) => ({
            label: `${data.Car.BrandName} | ${data.Car.ModelName} | ${data.Car.Plate}`,
            value: data.CarId
          }))
        );
      }
    });
  };

  const setCustomersList = () => {
    GetRecords("Customer", "ayazarac").then((data: any) => {
      let temp: any = [];

      temp.push({
        label: "Yeni Ekle",
        value: "addNew"
      });

      data.map((d: any) => {
        temp.push({
          label: `${d.Name} ${d.Surname}-${d.TCNumber}`,
          value: d.Id
        });
      });
      setCustomer(temp);
    });
  };

  const CreateRecord = (values: IReservation) => {
    values.CustomerId = selectedCustomerId;
    values.CarId = selectedCarId;
    values.Code = "ayazarac";
    values.BeginDateTime = values.BeginDateTime.toString();
    values.EndDateTime = values.EndDateTime.toString();

    AddRecord("Reservation", "ayazarac", values).then(() => {
      AlertSwal(message.success.title, message.success.type);
    });
  };

  const PutRecord = (values: IReservation) => {
    values.CustomerId = selectedCustomerId || values.CustomerId;
    values.CarId = selectedCarId || values.CarId;
    values.Code = "ayazarac";
    values.BeginDateTime = values.BeginDateTime.toString();
    values.EndDateTime = values.EndDateTime.toString();
    UpdateRecord("ayazarac", "Reservation", values).then(() => {
      AlertSwal(message.success.title, message.success.type);
    });
  };

  useEffect(() => {
    setCustomersList();
  }, []);

  return (
    <>
      <Formik
        initialValues={activeReservation || new ReservationModel()}
        onSubmit={(values, { setSubmitting }) => {
          if (activeReservation) {
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
          setFieldTouched
        }) => (
          <Form id="ReservationFormSubmit">
            <Card base={reservation.history}>
              <DatetimePicker
                showTimeSelect={true}
                onChange={setFieldValue}
                base={reservationForm.BeginDateTime}
                touched={touched.BeginDateTime}
                errors={errors.BeginDateTime}
                values={values.BeginDateTime}
                seletedStart={true}
                startDate={values.BeginDateTime}
                endDate={values.EndDateTime}
              />
              <DatetimePicker
                showTimeSelect={true}
                onChange={setFieldValue}
                base={reservationForm.EndDateTime}
                touched={touched.EndDateTime}
                errors={errors.EndDateTime}
                values={values.EndDateTime}
                minDate={values.BeginDateTime}
                selectedEnd={true}
                startDate={values.BeginDateTime}
                endDate={values.EndDateTime}
              />
            </Card>
            <Card base={reservation.car}>
              {activeReservation ? (
                <FieldOutput
                  base={reservationForm.SelectedCar}
                  data={`${activeReservation.Car.BrandName} ${activeReservation.Car.ModelName} | ${activeReservation.Car.Plate} `}
                />
              ) : null}

              <Dropdown
                runFuction={() => {
                  setAvailableCarList(values);
                }}
                onChange={setFieldValue}
                base={reservationForm.CarId}
                touched={touched.CarId}
                errors={errors.CarId}
                values={values.CarId}
                options={availableCars}
                selectedValue={val => {
                  alert(val.value);
                  setSelectedCarId(val.value);
                }}
              />
            </Card>
            <Card base={reservation.customer}>
              <Dropdown
                onChange={setFieldValue}
                base={reservationForm.CustomerId}
                touched={touched.CustomerId}
                errors={errors.CustomerId}
                options={customers}
                values={values.CustomerId}
                selectedValue={val => {
                  setSelectedCustomerId(val.value);
                }}
                onCustomerChange={value => {
                  if (value) {
                    values.CustomerId = value.value;
                  }
                }}
              />
              {/* <Dropdown
                onChange={setFieldValue}
                onCustomerChange={value => {
                  if (value) {
                    values.AdditionalCustomerId = value.value;
                  }
                }}
                base={reservationForm.AdditionalCustomerId}
                touched={touched.AdditionalCustomerId}
                errors={errors.AdditionalCustomerId}
                // options={this.state.additionalCustomer}
                // values={
                //   this.state.IsAdditionalDriver
                //     ? this.props.customers[this.props.customers.length - 1].Id
                //     : values.AdditionalCustomerId
                // }
                // selectedValue={value => {
                //   if (value.value == "addNew") {
                //     this.setState(
                //       {
                //         IsAdditionalDriver: true
                //       },
                //       () => {
                //         this.OpenModal();
                //       }
                //     );
                //   }
                // }}
              /> */}
            </Card>
            <Card base={reservation.payment}>
              <Fields
                base={reservationForm.Price}
                touched={touched.Price}
                errors={errors.Price}
                values={values.Price}
              />
              <Fields
                base={reservationForm.Deposit}
                touched={touched.Deposit}
                errors={errors.Deposit}
                values={values.Deposit}
              />
              <Fields
                base={reservationForm.Paid}
                touched={touched.Paid}
                errors={errors.Paid}
                values={values.Paid}
              />

              <Radiobox
                base={reservationForm.PaymentType}
                touched={touched.PaymentType}
                errors={errors.PaymentType}
                values={values.PaymentType}
                options={paymentType}
              />

              <Dropdown
                onChange={setFieldValue}
                base={reservationForm.ReservationTypes}
                touched={touched.ReservationTypes}
                errors={errors.ReservationTypes}
                values={values.ReservationTypes}
                options={reservationType}
              />
            </Card>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ReservationForm;
