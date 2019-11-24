import react from "react";
import { IHeaderValidation } from "../Types/HeaderValidation";

export const HeaderCustomerList: IHeaderValidation = {
  titleFirst: "Müşteriler",
  btnTitle: "Yeni Ekle",
  btnLink: "/customer/new"
};
export const HeaderCarList: IHeaderValidation = {
  titleFirst: "Arabalar",
  btnTitle: "Yeni Ekle",
  btnLink: "/car/new"
};
export const HeaderReservationList: IHeaderValidation = {
  titleFirst: "Rezervasyonlar",
  btnTitle: "Yeni Ekle",
  btnLink: "/reservation/new"
};

export const HeaderCustomerNew: IHeaderValidation = {
  titleFirst: "Müşteriler",
  linkFirst: "/customer",
  titleSecond: "Yeni Müşteri Ekle",
  btnTitle: "Kaydet",
  btnForm: "CustomerFormSubmit"
};
export const HeaderCarNew: IHeaderValidation = {
  titleFirst: "Arabalar",
  linkFirst: "/car",
  titleSecond: "Yeni Araba Ekle",
  btnTitle: "Kaydet",
  btnForm: "CarFormSubmit"
};

export const HeaderCustomerOverview: IHeaderValidation = {
  titleFirst: "Müşteriler",
  linkFirst: "/car",
  btnTitle: "Kaydet",
  btnForm: "CarFormSubmit"
};
