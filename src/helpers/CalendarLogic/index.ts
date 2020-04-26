import { GetAllCar } from './../../database/Car';
import { GetAllBooking } from "src/database/Booking";

const GetCalendar = async () => {
  let groups: any[] = [];
  let items: any[] = [];
  let calendar: any = {
    Groups: null,
    Items: null
  };

  const cars = await GetAllCar("ayazarac");

  cars.map((car: any) => {
    groups.push({
      id: car.Id,
      title: `${car.BrandName}/${car.ModelName}`,
      brandName: `${car.BrandName}`,
      modelName: `${car.ModelName}`,
      visualId: car.Image
    });
  });

  const reservation = await GetAllBooking("ayazarac").then((data) => {
    console.log("calres", data)
    data.map((f: any) => {
      console.log(f)
      items.push({
        id: f.Id,
        group: f.CarId,
        start_time: f.BeginDateTime,
        end_time: f.EndDateTime,
        title: f.CustomerId
      });
    });
  });
  console.log("rezlesrrrr", reservation)


  calendar["Groups"] = groups;
  calendar["Items"] = items;
  return calendar;
};

export default GetCalendar;
