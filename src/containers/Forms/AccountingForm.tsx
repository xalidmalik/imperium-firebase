import React, { forwardRef, useEffect, useState } from "react";
import Fields from "../../components/FormElements/Input/Fields";
import Checkbox from "../../components/FormElements/Input/Checkbox";
import Radiobox from "../../components/FormElements/Input/Radiobox";
import Dropdown from "../../components/FormElements/Input/Dropdown";
import { transactionForm } from "../../helpers/Static/FormFields";
import { reservation } from "../../helpers/Static/System";
import Card from "../../components/Card/Card";
import { useSelector, useDispatch } from "react-redux"
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
import { TransactionModel } from "src/helpers/Database/TransactionInterface";
import { ITransaction } from "../../helpers/Database/TransactionInterface";
import { createTransactionActions } from "src/redux/actions/Transaction";

const AccountingForm: React.FC<any> = (props: any) => {
  const dispatch = useDispatch();

  const { activeTransaction } = props;

  // const putRecord = (model: any) => {
  //   model.Code = "ayazarac";
  //   if (!ImageUrl) {
  //     model.Image = activeCar.Image;
  //   } else {
  //     model.Image = ImageUrl;
  //   }
  //   UpdateCar(model).then(() => {
  //     AlertSwal(message.success.title, message.success.type);
  //   });
  // };

  const CreateRecord = (values: any) => {
    dispatch(createTransactionActions(values))
  };
  return (
    <>
      <Formik
        initialValues={new TransactionModel()}
        onSubmit={(values, { setSubmitting }) => {
          // if (activeTransaction) {
          //   // putRecord(values);
          // } else {
          // }
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
            <Form id="TransactionFormSubmit">
              <Card base={reservation.payment}>
                <Dropdown
                  onChange={setFieldValue}
                  base={transactionForm.Type}
                  touched={touched.Type}
                  errors={errors.Type}
                  values={values.Type}
                  options={accountingType}
                />
                <Fields
                  base={transactionForm.Ammount}
                  touched={touched.Ammount}
                  errors={errors.Ammount}
                  values={values.Ammount}
                />
                <Radiobox
                  base={transactionForm.PaymentType}
                  touched={touched.PaymentType}
                  errors={errors.PaymentType}
                  values={values.PaymentType}
                  options={paymentType}
                />
                <Fields
                  base={transactionForm.Desc}
                  touched={touched.Desc}
                  errors={errors.Desc}
                  values={values.Desc}
                />
              </Card>
            </Form>
          )}
      </Formik>
    </>
  );
};

export default AccountingForm;
