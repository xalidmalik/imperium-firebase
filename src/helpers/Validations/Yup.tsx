import * as yup from "yup"; // for everything

export const customerSchema = yup.object().shape({
  Name: yup.string().required("Bu alan zorunludur."),
  Surname: yup.string().required("Bu alan zorunludur."),
  Tc: yup.string().required("Bu alan zorunludur."),
  Gender: yup.string().required("Bu alan zorunludur."),
  BirthOfDateTime: yup
    .date()
    .required("Bu alan zorunludur.")
    .min(new Date(1900, 1, 1), "Geçersiz tarih girdiniz")
    .max(new Date(), "Geçersiz tarih girdiniz"),
  FirstPhone: yup.string().required("Bu alan zorunludur"),
  LicenseYear: yup
    .date()
    .required("Bu alan zorunludur.")
    .min(new Date(1900, 1, 1), "Geçersiz tarih girdiniz")
    .max(new Date(), "Geçersiz tarih girdiniz"),
  SerialNumberOfDrivingLicense: yup.string().required("Bu alan zorunludur"),
  DrivingClasses: yup.string().required("Bu alan zorunludur")
});

export const carSchema = yup.object().shape({
  BrandId: yup.string().required("Bu alan zorunludur."),
  BrandModelId: yup.string().required("Bu alan zorunludur."),
  FuelType: yup.string().required("Bu alan zorunludur."),
  GearType: yup.string().required("Bu alan zorunludur."),
  Plate: yup.string().required("Bu alan zorunludur."),
  Price: yup.string().required("Bu alan zorunludur."),
  Classes: yup.string().required("Bu alan zorunludur.")
});

export const signSchema = yup.object().shape({
  Username: yup.string().required("Bu alan zorunludur."),
  Password: yup.string().required("Bu alan zorunludur.")
});
