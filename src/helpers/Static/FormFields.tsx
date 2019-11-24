import { IUser } from "../Database/UserInterfaces";

export const defaultForm = {
  Name: {
    title: "İsim",
    placeholder: "İsim Giriniz",
    type: "text",
    for: "Name",
    required: true
  },
  Surname: {
    title: "Soyisim",
    placeholder: "Soyisim Giriniz",
    type: "text",
    for: "Surname",
    required: true
  },
  BirthOfDateTime: {
    title: "Doğum Tarihi",
    type: "date",
    for: "BirthOfDateTime",
    // placeholder: "Gün / Ay / Yıl",
    required: true
    // mask: true,
    // masked: [/[1-9]/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]
  },
  Nationality: {
    title: "Doğum Yeri",
    placeholder: "Şehir Seçiniz",
    for: "Nationality"
  },
  NameOfFather: {
    title: "Baba Adı",
    placeholder: "İsim Giriniz",
    type: "text",
    for: "NameOfFather"
  },
  NameOfMother: {
    title: "Anne Adı",
    placeholder: "İsim Giriniz",
    type: "text",
    for: "NameOfMother"
  },
  Gender: {
    title: "Cinsiyet",
    type: "radio",
    for: "Gender",
    required: true
  },
  BloodGroup: {
    title: "Kan Grubu",
    placeholder: "Kan Grubu Giriniz",
    for: "BloodGroup"
  },
  Tc: {
    title: "T.C. Numarası",
    placeholder: "T.C. Numarası Giriniz",
    type: "text",
    for: "Tc",
    required: true,
    mask: true,
    masked: [
      /[1-9]/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      /\d/
    ]
  },
  PassportSerialNumber: {
    title: "Pasaport Numarası",
    placeholder: "Pasaport Numarası Giriniz",
    type: "number",
    for: "PassportSerialNumber"
  },
  FirstPhone: {
    title: "Cep Telefonu",
    placeholder: "Telefon Numarası Giriniz",
    type: "tel",
    for: "FirstPhone",
    required: true,
    mask: true,
    masked: [
      "(",
      /[1-9]/,
      /\d/,
      /\d/,
      ")",
      " ",
      /\d/,
      /\d/,
      /\d/,
      "-",
      /\d/,
      /\d/,
      /\d/,
      /\d/
    ]
  },
  WorkPhone: {
    title: "İş Telefonu",
    placeholder: "Telefon Numarası Giriniz",
    type: "tel",
    for: "WorkPhone",
    mask: true,
    masked: [
      "(",
      /[1-9]/,
      /\d/,
      /\d/,
      ")",
      " ",
      /\d/,
      /\d/,
      /\d/,
      "-",
      /\d/,
      /\d/,
      /\d/,
      /\d/
    ]
  },
  WorkPlace: {
    title: "İş Yeri",
    placeholder: "İş Yeri Giriniz",
    type: "text",
    for: "WorkPlace"
  },
  SecondPhone: {
    title: "Acil Durum Telefonu",
    placeholder: "Telefon Numarası Giriniz",
    type: "tel",
    for: "SecondPhone",
    mask: true,
    masked: [
      "(",
      /[1-9]/,
      /\d/,
      /\d/,
      ")",
      " ",
      /\d/,
      /\d/,
      /\d/,
      "-",
      /\d/,
      /\d/,
      /\d/,
      /\d/
    ]
  },
  Email: {
    title: "Email Adresi",
    placeholder: "Email adresi giriniz",
    type: "text",
    for: "Email",
    required: false
  },
  Profession: {
    title: "Meslek",
    placeholder: "Meslek Giriniz",
    type: "text",
    for: "Profession"
  },
  Address: {
    title: "Açık Adres",
    placeholder: "Açık Adres Giriniz",
    type: "text",
    for: "Address"
  },
  CanSendSms: {
    title: "Bildirim Onayı",
    placeholder: "SMS ve E-Posta Gönderimini Onaylıyorum",
    type: "checkbox",
    for: "CanSendSms"
  },

  Note: {
    title: "Not",
    type: "text",
    for: "Note",
    placeholder: "Not Giriniz"
  },

  LicenseYear: {
    title: "Ehliyet Alma Tarihi",
    type: "date",
    required: true,
    for: "LicenseYear",
    placeholder: "Tarih Giriniz"
  },
  SerialNumberOfDrivingLicense: {
    title: "Ehliyet Seri Numarası",
    type: "number",
    required: true,
    for: "SerialNumberOfDrivingLicense",
    placeholder: "Seri Numarası Giriniz"
  },
  DrivingClasses: {
    title: "Ehliyet Sınıfı",
    for: "DrivingClasses",
    required: true,
    placeholder: "Sınıf Seçiniz"
  },
  SecondPhoneOwner: {
    title: "Acil Durum Telefonu Sahibi",
    type: "text",
    placeholder: "İsim Giriniz",
    for: "SecondPhoneOwner"
  },
  Country: {
    title: "Ülke",
    placeholder: "Ülke seçiniz",
    for: "Country"
  },
  City: {
    title: "İl",
    placeholder: "İl seçiniz",
    for: "City"
  },

  County: {
    title: "İlçe",
    placeholder: "İlçe seçiniz",
    for: "County"
  }
};
export const carForm = {
  BrandId: {
    title: "Marka",
    placeholder: "Seçiniz",
    for: "BrandId",
    required: true
  },
  BrandModelId: {
    title: "Model",
    placeholder: "Seçiniz",
    for: "BrandModelId",
    required: true
  },
  Plate: {
    title: "Plaka",
    type: "text",
    placeholder: "Plakayı Giriniz",
    for: "Plate",
    required: true
  },

  CaseType: {
    title: "Kasa Tipi",
    placeholder: "Seçiniz",
    for: "CaseType"
  },

  GearType: {
    title: "Vites Tipi",
    type: "radio",
    for: "GearType",
    required: true
  },

  FuelType: {
    title: "Yakıt Tipi",
    type: "radio",
    for: "FuelType",
    required: true
  },

  Km: {
    title: "KM Değeri",
    placeholder: "Şu Anki Değeri Giriniz",
    type: "text",
    for: "Km"
  },

  EngineCapacity: {
    title: "Motor Hacmi",
    placeholder: "Seçiniz",
    for: "EngineCapacity"
  },

  NumberOfDoors: {
    title: "Kapı Sayısı",
    for: "NumberOfDoors"
  },

  Price: {
    title: "Fiyat",
    type: "text",
    placeholder: "Günlük Fiyat Giriniz",
    for: "Price",
    required: true
  },
  MinDriverLicense: {
    title: "Minimum Ehliyet Yaşı",
    placeholder: "Minimum Ehliyet Yaşı Giriniz",
    type: "text",
    for: "MinDriverLicense"
  },

  Classes: {
    title: "Sınıf",
    type: "radio",
    for: "Classes",
    required: true
  },

  Year: {
    title: "Üretim Yılı",
    placeholder: "Üretim Yılını Giriniz",
    type: "text",
    for: "Year"
  },
  Maintenance: {
    title: "Bakım",
    type: "checkbox",
    for: "Maintenance"
  },
  Crash: {
    title: "Kaza Durumu",
    type: "checkbox",
    for: "Crash"
  },
  Color: {
    title: "Renk",
    type: "radio",
    for: "Color"
  },
  Deposit: {
    title: "Depozit",
    type: "number",
    for: "Deposit"
  }
};

export const reservationForm = {
  SelectedCar: {
    title: "Seçilen Araba",
    placeholder: "Seçilen Araba",
    for: "SelectedCar"
  },
  DeliveryLocation: {
    title: "Şube",
    placeholder: "Şube Seçiniz",
    for: "DeliveryLocation"
  },

  BeginDateTime: {
    title: "Başlangıç Tarihi",
    for: "BeginDateTime",
    required: true
  },

  EndDateTime: {
    title: "Bitiş Tarihi",
    for: "EndDateTime",
    required: true
  },

  ReservationStatus: {
    title: "Rezervasyon Durumu",
    for: "ReservationStatus",
    placeholder: "Durum Seçiniz"
  },

  CustomerId: {
    title: "Müşteri Seçimi",
    placeholder: "Seçiniz",
    for: "CustomerId"
  },

  AdditionalCustomerId: {
    title: "Ek Şöför",
    placeholder: "Seçiniz",
    for: "AdditionalCustomerId"
  },

  Price: {
    title: "Tutar",
    placeholder: "Tutar Giriniz",
    type: "text",
    for: "Price"
  },

  KmStart: {
    title: "KM Başlangıç Değeri",
    placeholder: "Başlangıç Değeri Giriniz",
    type: "text",
    for: "KmStart"
  },

  KmEnd: {
    title: "KM Bitiş Değeri",
    placeholder: "Bitiş Değeri Giriniz",
    type: "text",
    for: "KmEnd"
  },

  CarId: {
    title: "Araba",
    placeholder: "Araba Seçiniz",
    for: "CarId"
  },

  PaymentType: {
    title: "Ödeme Tipi",
    type: "radio",
    for: "PaymentType"
  },

  FuelCount: {
    title: "Benzin Durumu",
    type: "text",
    placeholder: "Değer Giriniz",
    for: "FuelCount"
  },

  Deposit: {
    title: "Depozit",
    type: "number",
    placeholder: "Değer Giriniz",
    for: "Deposit"
  },
  AmountPaid: {
    title: "Ödenen",
    type: "text",
    placeholder: "Ödenen Tutarı Giriniz",
    for: "AmountPaid"
  }
};

export const departmentForm = {
  Code: {
    title: "Şirket Kodu",
    type: "text",
    for: "Code",
    readOnly: true
  },
  DisplayName: {
    title: "Marka İsmi",
    type: "text",
    placeholder: "Örnek: Carax Araç Kiralama",
    for: "DisplayName"
  },

  Name: {
    title: "Şirket Ünvanı",
    placeholder: "Örnek: Carax Yazılım Teknolojileri A.Ş.",
    type: "text",
    for: "Name"
  },

  Address: {
    title: "Şirket Adresi",
    type: "text",
    placeholder: "Şirket Adresini Giriniz",
    for: "Address"
  },

  VisualId: {
    title: "Şirket Logosu",
    type: "image",
    for: "VisualId"
  },

  Email: {
    title: "Email",
    placeholder: "Email Adresi Giriniz",
    for: "Email"
  },

  TaxNumber: {
    title: "Vergi Numarası",
    placeholder: "Vergi Numarasını Giriniz",
    type: "text",
    for: "TaxNumber"
  },

  TaxAdministration: {
    title: "Vergi Dairesi",
    placeholder: "Örnek: Ankara Vergi Dairesi",
    type: "text",
    for: "TaxAdministration"
  },

  Phone: {
    title: "Telefon",
    placeholder: "Telefon Giriniz",
    for: "Phone",
    type: "tel",
    mask: true,
    masked: [
      "(",
      /[1-9]/,
      /\d/,
      /\d/,
      ")",
      " ",
      /\d/,
      /\d/,
      /\d/,
      "-",
      /\d/,
      /\d/,
      /\d/,
      /\d/
    ]
  },

  FaxNo: {
    title: "Faks",
    placeholder: "Faks Numarası Giriniz",
    for: "FaxNo",
    type: "tel",
    mask: true,
    masked: [
      "(",
      /[1-9]/,
      /\d/,
      /\d/,
      ")",
      " ",
      /\d/,
      /\d/,
      /\d/,
      "-",
      /\d/,
      /\d/,
      /\d/,
      /\d/
    ]
  },

  InstagramUrl: {
    title: "Instagram Adresi",
    type: "text",
    placeholder: "instagram/carax",
    for: "InstagramUrl"
  },

  FacebookUrl: {
    title: "Facebook Adresi",
    type: "text",
    placeholder: "facebook/carax",
    for: "FacebookUrl"
  },
  OfficalEMail: {
    title: "Kurumsal Email",
    type: "text",
    placeholder: "Email Adresi Giriniz",
    for: "OfficialEMail"
  },
  PublicSiteUrl: {
    title: "Web Sitesi",
    placeholder: "Örnek: www.carax.com.tr",
    type: "text",
    for: "PublicSiteUrl"
  }
};
export const generalForm = {
  carSearch: {
    title: "Ara",
    type: "text",
    placeholder: "Arama: Marka/Model/Plaka/...",
    for: "carSearch"
  },
  customerSearch: {
    title: "Ara",
    type: "text",
    placeholder: "Arama: İsim/Soyisim/T.C./...",
    for: "customerSearch"
  },
  reservationSearch: {
    title: "Ara",
    type: "text",
    placeholder: "Arama: Müşteri/Rezervasyon Durumu/...",
    for: "reservationSearch"
  }
};

export const signForm = {
  DepartmentCode: {
    title: "Şirket Kodu",
    placeholder: "Şirket kodunu giriniz",
    type: "text",
    for: "DepartmentCode",
    required: true
  },
  Username: {
    title: "Kullanıcı Adı",
    placeholder: "Kullanıcı adı giriniz",
    type: "text",
    for: "Username",
    required: true
  },
  Password: {
    title: "Şifre",
    placeholder: "Şifre giriniz",
    type: "password",
    for: "Password",
    required: true
  },
  ConfirmPassword: {
    title: "Şifre",
    placeholder: "Şifre giriniz",
    type: "password",
    for: "ConfirmPassword"
  }
};
