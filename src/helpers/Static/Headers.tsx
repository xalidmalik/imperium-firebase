import react from "react";
import { IHeaderValidation } from "../Types/HeaderValidation";

//* Header Board ---------------------------------------

export const HeaderCustomerBoard: IHeaderValidation = {
  titleFirst: "Müşteriler",
  btnTitle: "Yeni Ekle",
  btnLink: "/customer/new"
};
export const HeaderCarBoard: IHeaderValidation = {
  titleFirst: "Arabalar",
  btnTitle: "Yeni Ekle",
  btnLink: "/car/new"
};
export const HeaderReservationBoard: IHeaderValidation = {
  titleFirst: "Rezervasyonlar",
  btnTitle: "Yeni Ekle",
  btnLink: "/reservation/new"
};
export const HeaderAccountingBoard: IHeaderValidation = {
  titleFirst: "Ön Mühasebe",
  btnTitle: "Gelir / Gider Ekle",
  btnLink: "/accounting/new"
};
export const HeaderSettingBoard: IHeaderValidation = {
  titleFirst: "Ayarlar"
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
export const HeaderAccountingNew: IHeaderValidation = {
  titleFirst: "Muhasebe",
  linkFirst: "/accounting",
  titleSecond: "Gelir - gider ekle",
  btnTitle: "Kaydet",
  btnForm: "TransactionFormSubmit"
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
