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
  TCNumber: {
    title: "T.C. Numarası",
    placeholder: "T.C. Numarası Giriniz",
    type: "text",
    for: "TCNumber",
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
  PassportNumber: {
    title: "Pasaport Numarası",
    placeholder: "Pasaport Numarası Giriniz",
    type: "text",
    for: "PassportNumber"
  },
  Gender: {
    title: "Cinsiyet",
    type: "radio",
    for: "Gender",
    required: true
  },
  BirthDate: {
    title: "Doğum Tarihi",
    type: "date",
    for: "BirthDate",
    // placeholder: "Gün / Ay / Yıl",
    required: true
    // mask: true,
    // masked: [/[1-9]/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]
  },
  BirthPlace: {
    title: "Doğum Yeri",
    placeholder: "Şehir Seçiniz",
    for: "BirthPlace"
  },
  BloodGroup: {
    title: "Kan Grubu",
    placeholder: "Kan Grubu Giriniz",
    for: "BloodGroup"
  },
  MotherName: {
    title: "Anne Adı",
    placeholder: "İsim Giriniz",
    type: "text",
    for: "MotherName"
  },
  FatherName: {
    title: "Baba Adı",
    placeholder: "İsim Giriniz",
    type: "text",
    for: "FatherName"
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
  EmergencyPhone: {
    title: "Acil Durum Telefonu",
    placeholder: "Telefon Numarası Giriniz",
    type: "tel",
    for: "EmergencyPhone",
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
  EmergencyPhoneOwner: {
    title: "Acil Durum Telefonu Sahibi",
    type: "text",
    placeholder: "İsim Giriniz",
    for: "EmergencyPhoneOwner"
  },
  Email: {
    title: "Email Adresi",
    placeholder: "Email adresi giriniz",
    type: "text",
    for: "Email",
    required: false
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
  Profession: {
    title: "Meslek",
    placeholder: "Meslek Giriniz",
    type: "text",
    for: "Profession"
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
  },
  Address: {
    title: "Açık Adres",
    placeholder: "Açık Adres Giriniz",
    type: "text",
    for: "Address"
  },
  DrivingClasses: {
    title: "Ehliyet Sınıfı",
    for: "DrivingClasses",
    required: true,
    placeholder: "Sınıf Seçiniz"
  },

  DrivingLicenseYear: {
    title: "Ehliyet Alma Tarihi",
    type: "date",
    required: true,
    for: "DrivingLicenseYear",
    placeholder: "Tarih Giriniz"
  },
  DrivingLicenseNumber: {
    title: "Ehliyet Seri Numarası",
    type: "text",
    required: true,
    for: "DrivingLicenseNumber",
    placeholder: "Seri Numarası Giriniz"
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
  }
};
export const carForm = {
  BrandName: {
    title: "Marka",
    placeholder: "Seçiniz",
    for: "BrandName",
    required: true
  },
  ModelName: {
    title: "Model",
    placeholder: "Seçiniz",
    for: "ModelName",
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

  FuelType: {
    title: "Yakıt Tipi",
    type: "radio",
    for: "FuelType",
    required: true
  },

  GearType: {
    title: "Vites Tipi",
    type: "radio",
    for: "GearType",
    required: true
  },

  KM: {
    title: "KM Değeri",
    placeholder: "Şu Anki Değeri Giriniz",
    type: "text",
    for: "KM"
  },

  EngineCapacity: {
    title: "Motor Hacmi",
    placeholder: "Seçiniz",
    for: "EngineCapacity"
  },

  DoorsNumber: {
    title: "Kapı Sayısı",
    for: "DoorsNumber",
    type: "radio"
  },

  Price: {
    title: "Fiyat",
    type: "text",
    placeholder: "Günlük Fiyat Giriniz",
    for: "Price",
    required: true
  },
  MinDriverLicenseYear: {
    title: "Minimum Sürücü Yaşı",
    placeholder: "Minimum Sürücü Yaşı Giriniz",
    type: "text",
    for: "MinDriverLicenseYear"
  },

  MinDrivingLicenseYear: {
    title: "Minimum Ehliyet Yaşı",
    placeholder: "Minimum Ehliyet Yaşı Giriniz",
    type: "text",
    for: "MinDrivingLicenseYear"
  },

  Color: {
    title: "Renk",
    type: "radio",
    for: "Color"
  },
  Deposit: {
    title: "Depozit",
    type: "text",
    for: "Deposit"
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

  isMaintenance: {
    title: "Bakım",
    type: "checkbox",
    for: "isMaintenance"
  },
  isCrash: {
    title: "Kaza Durumu",
    type: "checkbox",
    for: "isCrash"
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

  ReservationTypes: {
    title: "Rezervasyon Durumu",
    for: "ReservationTypes",
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
  Paid: {
    title: "Ödenen",
    type: "text",
    placeholder: "Ödenen Tutarı Giriniz",
    for: "Paid"
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

  BrandLogo: {
    title: "Şirket Logosu",
    type: "file",
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
  OfficialEmail: {
    title: "Kurumsal Email",
    type: "text",
    placeholder: "Email Adresi Giriniz",
    for: "OfficialEmail"
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
