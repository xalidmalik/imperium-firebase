import { isEmpty, filter, includes } from "lodash";

export const SearchCustomer = (customerArray, value) => {
  if (isEmpty(customerArray)) {
    return customerArray;
  }
  return filter(customerArray, o => {
    return (
      includes(ToLowerCase(o.Name), value.toLowerCase()) ||
      includes(ToLowerCase(o.Surname), value.toLowerCase()) ||
      includes(ToLowerCase(o.Tc), value.toLowerCase()) ||
      includes(ToLowerCase(o.FirstPhone), value.toLowerCase()) ||
      includes(ToLowerCase(o.EMail), value.toLowerCase())
    );
  });
};

export const ToLowerCase = value => {
  if (!isEmpty(value)) {
    return value.toLowerCase();
  }
};

export const SearchReservation = (reservationArray, value) => {
  if (isEmpty(reservationArray)) {
    return reservationArray;
  }

  return filter(reservationArray, function(o) {
    return (
      includes(ToLowerCase(o.CarBrandName), value.toLowerCase()) ||
      includes(ToLowerCase(o.CarModelName), value.toLowerCase()) ||
      includes(ToLowerCase(o.CarPlate), value.toLowerCase()) ||
      includes(ToLowerCase(o.ReservationId), value.toLowerCase()) ||
      includes(ToLowerCase(o.CustomerName), value.toLowerCase()) ||
      includes(ToLowerCase(o.CustomerSurname), value.toLowerCase()) ||
      includes(
        o.CustomerFirstPhone.replace(/[()]/g, "").trim(),
        value.toLowerCase()
      )
    );
  });
};

export const SearchCar = (carArray, value) => {
  if (isEmpty(carArray)) {
    return carArray;
  }
  return filter(carArray, function(o) {
    return (
      includes(ToLowerCase(o.BrandName), value.toLowerCase()) ||
      includes(ToLowerCase(o.ModelName), value.toLowerCase()) ||
      includes(ToLowerCase(o.Plate), value.toLowerCase())
    );
  });
};
