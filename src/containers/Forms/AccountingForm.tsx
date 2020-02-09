import React, { forwardRef, useEffect, useState } from "react";
import Fields from "../../components/FormElements/Input/Fields";
import Checkbox from "../../components/FormElements/Input/Checkbox";
import Radiobox from "../../components/FormElements/Input/Radiobox";
import Dropdown from "../../components/FormElements/Input/Dropdown";
import { accountingForm } from "../../helpers/Static/FormFields";
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
  accountingType,
  paymentType,
  gender,
  color
} from "../../helpers/Static/Options";
import { ReservationModel } from "src/helpers/Database/ReservationInterface";
import { ICustomer } from "../../helpers/Database/CustomerInterfaces";

const AccountingForm: React.FC<any> = (data: any) => {
  //   const { activeReservation } = data;
  //   console.log("active :", activeReservation);

  //   const [customers, setCustomer] = useState<ICustomer[]>(
  //     new Array<ICustomer>()
  //   );

  //   const [selectedCarId, setSelectedCarId] = useState<any>();
  //   const [selectedCustomerId, setSelectedCustomerId] = useState<any>();

  //   const [availableCars, setAvailableCars] = useState<any>();

  //   useEffect(() => {
  //     setCustomersList();
  //   }, []);
  return (
    <>
      <Formik
        initialValues={new ReservationModel()}
        onSubmit={(values, { setSubmitting }) => {}}
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
            <Card base={reservation.payment}>
              <Dropdown
                onChange={setFieldValue}
                base={accountingForm.ReservationTypes}
                touched={touched.ReservationTypes}
                errors={errors.ReservationTypes}
                values={values.ReservationTypes}
                options={accountingType}
              />
              <Fields
                base={accountingForm.Price}
                touched={touched.Price}
                errors={errors.Price}
                values={values.Price}
              />
              <Radiobox
                base={accountingForm.PaymentType}
                touched={touched.PaymentType}
                errors={errors.PaymentType}
                values={values.PaymentType}
                options={paymentType}
              />
            </Card>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AccountingForm;
