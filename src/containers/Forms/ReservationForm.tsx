import React, { Component } from "react";
import Fields from "../../components/FormElements/Input/Fields";
import Checkbox from "../../components/FormElements/Input/Checkbox";
import Radiobox from "../../components/FormElements/Input/Radiobox";
// import DropDown from "../../components/FormElements/Input/DropDown";
import { reservationForm } from "../../helpers/Static/FormFields";
import { reservation } from "../../helpers/Static/System";
import Card from "../../components/Card/Card";
import { Formik, Form } from "formik";
import { message } from "../../helpers/Static/System";
import { AlertSwal } from "../../helpers/Alert/Alert";
import { History } from "../../helpers/Static/History";
// import DateTimePicker from "../../components/FormElements/Input/DateTimePicker";
import RightModal from "../../components/Modal/RightModal";
// import CustomerForm from "./CustomerForm";
import Header from "../../components/Header/Header";
// import FieldOutput from "../../components/FormElements/Outputs/FieldOutput";
import moment from "moment";
import {
  ReservationType,
  PaymentType,
  gender,
  color
} from "../../helpers/Static/Options";

class ReservationForm extends Component {
  //   state = {
  //     customers: [],
  //     additionalCustomer: [],
  //     availableCars: [],
  //     isNewCustomer: false,
  //     IsAdditionalDriver: false
  //   };

  //   OpenModal = () => {
  //     this.refs.modal.ToggleModalShow();
  //   };

  //   componentWillUnmount() {
  //     localStorage.removeItem("SelectedReservation");
  //   }

  //   componentWillMount() {
  //     if (this.props.activeReservation) {
  //       this.props.fetchAvailableCars(
  //         moment(this.props.activeReservation.BeginDateTime).format(
  //           "YYYY-MM-DD HH:mm"
  //         ),
  //         moment(this.props.activeReservation.EndDateTime).format(
  //           "YYYY-MM-DD HH:mm"
  //         )
  //       );
  //     }
  //   }

  //   componentDidMount() {
  //     this.props.fetchCustomerList(true);
  //     if (this.props.activeReservation) {
  //       reservationForm.CarId.placeholder = "Yeni Araba Seçiniz";
  //     }
  //   }

  //   reservationCreateControl = prevProps => {
  //     const { reservationCreateIsLoading, reservationCreate } = this.props;
  //     if (
  //       prevProps.reservationCreateIsLoading &&
  //       !reservationCreateIsLoading &&
  //       reservationCreate
  //     ) {
  //       AlertSwal(message.success.title, message.success.type);
  //     } else if (
  //       prevProps.reservationCreateIsLoading &&
  //       !reservationCreateIsLoading &&
  //       !reservationCreate
  //     ) {
  //       AlertSwal(message.error.title, message.error.type);
  //     }
  //   };

  //   reservationUpdateControl = prevProps => {
  //     const { reservationUpdateIsLoading, reservationUpdate } = this.props;

  //     if (
  //       prevProps.reservationUpdateIsLoading &&
  //       !reservationUpdateIsLoading &&
  //       reservationUpdate
  //     ) {
  //       AlertSwal(message.success.title, message.success.type);
  //     } else if (
  //       prevProps.reservationUpdateIsLoading &&
  //       !reservationUpdateIsLoading &&
  //       !reservationUpdate
  //     ) {
  //       AlertSwal(message.error.title, message.error.type);
  //     }
  //   };

  //   componentDidUpdate(prevProps) {
  //     this.setCustomers(prevProps);
  //     this.setAvailableCar(prevProps);
  //     this.reservationCreateControl(prevProps);
  //     this.reservationUpdateControl(prevProps);
  //   }

  //   setCustomers = prevProps => {
  //     const { isLoading, customers, errorMessage } = this.props;
  //     if (this.state.customers.length == 0) {
  //       if (prevProps.isLoading && !isLoading && customers) {
  //         let temp = [];
  //         let tempAdd = [];

  //         if (!this.state.isNewCustomer) {
  //           temp.push({
  //             value: "addNew",
  //             label: `Yeni Ekle`,
  //             tc: 0,
  //             color: "red"
  //           });
  //         }

  //         if (!this.state.IsAdditionalDriver) {
  //           tempAdd.push({
  //             value: "addNew",
  //             label: `Yeni Ekle`,
  //             tc: 0,
  //             color: "red"
  //           });
  //         }

  //         customers.map(customer => {
  //           temp.push({
  //             value: customer.Id,
  //             label: `${customer.Name} | ${customer.Surname} | ${customer.Tc}`,
  //             tc: customer.Tc
  //           });
  //         });

  //         customers.map(customer => {
  //           tempAdd.push({
  //             value: customer.Id,
  //             label: `${customer.Name} | ${customer.Surname} | ${customer.Tc}`,
  //             tc: customer.Tc
  //           });
  //         });

  //         this.setState({
  //           customers: temp,
  //           additionalCustomer: tempAdd
  //         });
  //       }
  //     }
  //   };

  //   setAvailableCar = prevProps => {
  //     const { availableCarIsLoading, availableCar } = this.props;

  //     if (
  //       prevProps.availableCarIsLoading &&
  //       !availableCarIsLoading &&
  //       availableCar
  //     ) {
  //       this.setState({
  //         availableCars: availableCar.map(car => ({
  //           label: car.BrandName + " " + car.ModelName + ` | (${car.Plate})`,
  //           value: car.Id
  //         }))
  //       });
  //     }
  //   };

  //   AdditionalCustomerId = null;

  //   isObject = value => {
  //     if (typeof value == "object") {
  //       return true;
  //     }

  //     return false;
  //   };

  render() {
    // const selectedCar = JSON.parse(localStorage.getItem("SelectedReservation"));

    return (
      <>
        {/* <Formik
          initialValues={
            this.props.activeReservation || {
              BeginDateTime: null,
              EndDateTime: null,
              ReservationStatus: "",
              CustomerId: "",
              Price: "",
              KmStart: "",
              KmEnd: "",
              CarId: "",
              PaymentType: "0",
              FuelCount: "",
              Deposit: "",
              AmountPaid: "",
              AdditionalCustomerId: ""
            }
          }
          onSubmit={(values, { setSubmitting }) => {
            if (this.props.activeReservation) {
              alert("active");
              let model = {
                BeginDateTime: moment(values.BeginDateTime.toString()).format(
                  "YYYY.MM.DD HH:mm"
                ),
                EndDateTime: moment(values.EndDateTime.toString()).format(
                  "YYYY.MM.DD HH:mm"
                ),
                ReservationStatus: this.isObject(values.ReservationStatus)
                  ? values.ReservationStatus.value
                  : values.ReservationStatus,

                CustomerId: this.isObject(values.CustomerId)
                  ? values.CustomerId.value
                  : values.CustomerId,

                Price: values.Price || 0,
                KmStart: values.KmStart || 0,
                KmEnd: values.KmEnd || 0,

                CarId: this.isObject(values.CarId)
                  ? values.CarId.value
                  : values.CarId,

                PaymentType: this.isObject(values.PaymentType)
                  ? values.PaymentType.value
                  : values.PaymentType,

                FuelCount: values.FuelCount || 0,
                Deposit: values.Deposit || 0,
                AmountPaid: values.AmountPaid || 0,
                IsApproval: true,

                AdditionalCustomerId: this.isObject(values.AdditionalCustomerId)
                  ? values.AdditionalCustomerId.value
                  : values.AdditionalCustomerId
              };
              this.props.putReservation(model);
              console.log("update reservation :", model);
            } else {
              let model = {
                BeginDateTime: moment(values.BeginDateTime.toString()).format(
                  "YYYY.MM.DD HH:mm"
                ),
                EndDateTime: moment(values.EndDateTime.toString()).format(
                  "YYYY.MM.DD HH:mm"
                ),
                ReservationStatus: values.ReservationStatus.value,
                CustomerId: this.isObject(values.CustomerId)
                  ? values.CustomerId.value
                  : values.CustomerId,

                Price: values.Price || 0,
                KmStart: values.KmStart || 0,
                KmEnd: values.KmEnd || 0,
                CarId: values.CarId.value,
                PaymentType: values.PaymentType.value || 0,
                FuelCount: values.FuelCount || 0,
                Deposit: values.Deposit || 0,
                AmountPaid: values.AmountPaid || 0,
                IsApproval: true,
                AdditionalCustomerId: this.isObject(values.AdditionalCustomerId)
                  ? values.AdditionalCustomerId.value
                  : values.AdditionalCustomerId
              };
              console.log(model);
              this.props.postReservation(model);
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
                <DateTimePicker
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
                <DateTimePicker
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
                {this.props.activeReservation ? (
                  <FieldOutput
                    base={reservationForm.SelectedCar}
                    data={`${selectedCar.CarBrandName} ${selectedCar.CarModelName} | ${selectedCar.CarPlate} `}
                  />
                ) : null}

                <DropDown
                  runFuction={() => {
                    this.props.fetchAvailableCars(
                      moment(values.BeginDateTime).format("YYYY-MM-DD HH:mm"),
                      moment(values.EndDateTime).format("YYYY-MM-DD HH:mm")
                    );
                  }}
                  onChange={setFieldValue}
                  base={reservationForm.CarId}
                  touched={touched.CarId}
                  errors={errors.CarId}
                  values={values.CarId}
                  options={this.state.availableCars}
                />
              </Card>
              <Card base={reservation.customer}>
                <DropDown
                  onChange={setFieldValue}
                  base={reservationForm.CustomerId}
                  touched={touched.CustomerId}
                  errors={errors.CustomerId}
                  values={
                    this.state.isNewCustomer && !this.state.IsAdditionalDriver
                      ? this.props.customers[this.props.customers.length - 1].Id
                      : values.CustomerId
                  }
                  options={this.state.customers}
                  selectedValue={value => {
                    if (value.value == "addNew") {
                      this.OpenModal();
                    }
                  }}
                  onCustomerChange={value => {
                    if (value) {
                      values.CustomerId = value.value;
                    }
                  }}
                />
                <DropDown
                  onChange={setFieldValue}
                  onCustomerChange={value => {
                    if (value) {
                      values.AdditionalCustomerId = value.value;
                    }
                  }}
                  base={reservationForm.AdditionalCustomerId}
                  touched={touched.AdditionalCustomerId}
                  errors={errors.AdditionalCustomerId}
                  options={this.state.additionalCustomer}
                  values={
                    this.state.IsAdditionalDriver
                      ? this.props.customers[this.props.customers.length - 1].Id
                      : values.AdditionalCustomerId
                  }
                  selectedValue={value => {
                    if (value.value == "addNew") {
                      this.setState(
                        {
                          IsAdditionalDriver: true
                        },
                        () => {
                          this.OpenModal();
                        }
                      );
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
                  base={reservationForm.AmountPaid}
                  touched={touched.AmountPaid}
                  errors={errors.AmountPaid}
                  values={values.AmountPaid}
                />

                <Radiobox
                  base={reservationForm.PaymentType}
                  touched={touched.PaymentType}
                  errors={errors.PaymentType}
                  values={values.PaymentType}
                  options={PaymentType}
                />

                <DropDown
                  onChange={setFieldValue}
                  base={reservationForm.ReservationStatus}
                  touched={touched.ReservationStatus}
                  errors={errors.ReservationStatus}
                  values={values.ReservationStatus}
                  options={ReservationType}
                />
              </Card>
            </Form>
          )}
        </Formik>
        <RightModal ref="modal">
          <HeaderReservationCustomerNew closeModal={() => this.OpenModal()} />
          <CustomerForm
            AdditionalCustomerId={this.state.IsAdditionalDriver}
            IsCustomerCreate={value => {
              if (value) {
                this.OpenModal();
                this.setState(
                  {
                    customers: [],
                    isNewCustomer: this.state.IsAdditionalDriver ? false : true
                  },
                  () => {
                    this.props.fetchCustomerList(true);
                  }
                );
              }
            }}
            isModal={true}
          />
        </RightModal> */}
      </>
    );
  }
}

export default ReservationForm;
