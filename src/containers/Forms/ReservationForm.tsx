import React, { forwardRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import Fields from "../../components/FormElements/Input/Fields";
import Radiobox from "../../components/FormElements/Input/Radiobox";
import Dropdown from "../../components/FormElements/Input/Dropdown";
import { reservationForm } from "../../helpers/Static/FormFields";
import { reservation, customer } from "../../helpers/Static/System";
import Card from "../../components/Card/Card";
import { Formik, Form } from "formik";
import { message } from "../../helpers/Static/System";
import { AlertSwal } from "../../helpers/Alert/Alert";
import DatetimePicker from "../../components/FormElements/Input/DatetimePicker";
import RightModal from "../../components/Modal/RightModal";
import CustomerForm from "./CustomerForm";
import Header from "../../components/Header/Header";
import FieldOutput from "../../components/FormElements/Output/FieldOutput";
import moment from "moment";
import {
  reservationType,
  paymentType,

} from "../../helpers/Static/Options";
import { ReservationModel } from "src/helpers/Database/ReservationInterface";
import { ICustomer } from "../../helpers/Database/CustomerInterfaces";
import {
  GetAvailableCars,
} from "../../firebase/database/index";
import { IReservation } from "../../helpers/Database/ReservationInterface";
import { CreateBooking, UpdateBooking } from "src/firebase/database/Booking";
import { GetAllCar, GetCarById } from "src/firebase/database/Car";
import { GetAllCustomer, GetCustomerById } from "src/firebase/database/Customer";
import { CreateBookingActions } from "src/redux/actions/Booking";

const ReservationForm: React.FC<any> = (data: any) => {
  const dispatch = useDispatch();
  const { activeReservation } = data;

  const [pageIndex, setPageIndex] = useState(0);
  const [customers, setCustomer] = useState<ICustomer[]>(
    new Array<ICustomer>()
  );

  const [selectedCar, setSelectedCar] = useState<any>();
  const [selectedCustomer, setSelectedCustomer] = useState<any>();

  const [availableCars, setAvailableCars] = useState<any>();

  const setAvailableCarList = (values) => {
    GetAvailableCars(values.BeginDateTime, values.EndDateTime).then(async (ids) => {
      console.log("sadaw", ids)

      setAvailableCars(
        ids.map((data: any) => ({
          label: `${data.BrandName} | ${data.ModelName} | ${data.Plate}`,
          value: data.Id,
        }))
      );

    }
    );
  };

  const setCustomersList = () => {
    GetAllCustomer("ayazarac").then((data: any) => {
      let temp: any = [];

      temp.push({
        label: "Yeni Ekle",
        value: "addNew",
      });

      data.map((d: any) => {
        temp.push({
          label: `${d.Name} ${d.Surname}-${d.TCNumber}`,
          value: d.Id,
        });
      });
      setCustomer(temp);
      console.log("cus", customers);
    });
  };

  const CreateRecord = (values: IReservation) => {
    values.Customer = selectedCustomer;
    values.Car = selectedCar;
    values.CarId = selectedCar.Id
    values.Code = "ayazarac";
    values.BeginDateTime = values.BeginDateTime.toString();
    values.EndDateTime = values.EndDateTime.toString();

    console.log("Giderkem", values)
    dispatch(CreateBookingActions(values))
  };

  const PutRecord = (values: IReservation) => {
    values.Customer = selectedCustomer || values.Customer;
    values.Car = selectedCar || values.Car;
    values.Code = "ayazarac";
    values.BeginDateTime = values.BeginDateTime.toString();
    values.EndDateTime = values.EndDateTime.toString();
    UpdateBooking(values).then(() => {
      AlertSwal(message.success.title, message.success.type);
    });
  };

  useEffect(() => {
    setCustomersList();
  }, []);
  useEffect(() => {
    console.log("delected customer", selectedCustomer)
  }, [selectedCustomer]);
  // useEffect(() => {
  // }, [selectedCar]);

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
          setFieldTouched,
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
                  selectedValue={(val) => {
                    alert(val.value);
                    GetCarById(val.value).then((find) => {
                      find.Id = val.value;
                      setSelectedCar(find);
                      console.log("carlar", find);
                    });
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
                  selectedValue={(val) => {
                    GetCustomerById(val.value).then((find) => {
                      find.Id = val.value;
                      setSelectedCustomer(find);
                      console.log("cuslar", find);
                    });
                  }}
                  onCustomerChange={(value) => {
                    if (value) {
                      values.CustomerId = value.value;
                    }
                  }}
                />
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
