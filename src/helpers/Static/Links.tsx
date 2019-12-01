import { Carax } from "./Icons";

export const mainLink = {
  dashboard: {
    title: "Kontrol Paneli",
    link: "/",
    icon: Carax.Dashboard,
    index: "0"
  },
  customer: {
    title: "Müşteriler",
    link: "/customer",
    icon: Carax.Customer,
    index: "1"
  },
  car: {
    title: "Arabalar",
    link: "/car",
    icon: Carax.Cars,
    index: "2"
  },
  reservation: {
    title: "Rezervasyonlar",
    link: "/reservation",
    icon: Carax.Reservation
  },
  settings: {
    title: "Ayarlar",
    link: "/settings/corporate",
    icon: Carax.Setting
  },
  accounting: {
    title: "Muhasebe",
    link: "/accounting",
    icon: Carax.Debt
  }
};

export const dashboardList = {
  overview: {
    title: "Kontrol Paneli",
    link: "/",
    icon: Carax.Dashboard
  }
};
export const customerList = {
  overview: {
    title: "Müşteri Listesi",
    link: "/customer",
    icon: Carax.PageList
  }
};
export const customerDetail = {
  overview: {
    title: "Genel Bakış",
    link: "/customer/detail",
    icon: Carax.Overview
  },
  edit: {
    title: "Düzenle",
    link: "/customer/detail/edit",
    icon: Carax.Edit
  }
};
export const carList = {
  overview: {
    title: "Araba Listesi",
    link: "/car",
    icon: Carax.PageList
  }
};
export const carDetail = {
  overview: {
    title: "Genel Bakış",
    link: "/car/detail",
    icon: Carax.Overview
  },
  edit: {
    title: "Düzenle",
    link: "/car/detail/edit",
    icon: Carax.Edit
  }
};
export const reservationList = {
  overview: {
    title: "Rezervasyon Listesi",
    link: "/reservation",
    icon: Carax.PageList
  }
};
export const reservationDetail = {
  overview: {
    title: "Genel Bakış",
    link: "/reservation/detail",
    icon: Carax.Overview
  },
  edit: {
    title: "Düzenle",
    link: "/reservation/detail/edit",
    icon: Carax.Edit
  }
};
