import react from "react";
import { IHeaderValidation } from "../Types/HeaderValidation";

//* Header List ---------------------------------------

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

//* Header New ---------------------------------------

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
export const HeaderReservationNew: IHeaderValidation = {
  titleFirst: "Rezervasyonlar",
  linkFirst: "/reservation",
  titleSecond: "Yeni Rezervayon Yap",
  btnTitle: "Kaydet",
  btnForm: "ReservationFormSubmit"
};

//* Header overview ---------------------------------------

export const HeaderCustomerOverview: IHeaderValidation = {
  titleFirst: "Müşteriler",
  linkFirst: "/customer"
};

export const HeaderCarOverview: IHeaderValidation = {
  titleFirst: "Arabalar",
  linkFirst: "/car"
};

export const HeaderReservationOverview: IHeaderValidation = {
  titleFirst: "Rezervasyonlar",
  linkFirst: "/reservation"
};
//* Header Edit ---------------------------------------

export const HeaderCustomerEdit: IHeaderValidation = {
  titleFirst: "Müşteriler",
  linkFirst: "/customer",
  linkSecond: "/customer/detail",
  titleThird: "Bilgileri Düzenle",
  btnTitle: "Güncelle",
  btnForm: "CustomerFormSubmit"
};
export const HeaderCarEdit: IHeaderValidation = {
  titleFirst: "Arabalar",
  linkFirst: "/car",
  linkSecond: "/car/detail",
  titleThird: "Bilgileri Düzenle",
  btnTitle: "Güncelle",
  btnForm: "CarFormSubmit"
};
export const HeaderReservationEdit: IHeaderValidation = {
  titleFirst: "Rezervasyonlar",
  linkFirst: "/reservation",
  linkSecond: "/reservation/detail",
  titleThird: "Bilgileri Düzenle",
  btnTitle: "Güncelle",
  btnForm: "ReservationFormSubmit"
};
