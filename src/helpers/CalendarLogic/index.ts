import { GetRecords } from "src/database";

const GetCalendar = async () => {
  let groups: any[] = [];
  let items: any[] = [];
  let calendar: any = {
    Groups: null,
    Items: null
  };

  const cars = await GetRecords("Car", "ayazarac");

  cars.map((car: any) => {
    groups.push({
      id: car.Id,
      title: `${car.BrandName}/${car.ModelName}`,
      brandName: `${car.BrandName}`,
      modelName: `${car.ModelName}`,
      visualId: car.Image
    });
  });

  var reservation = await GetRecords("Reservation", "ayazarac");

  reservation.map((item: any) => {
    items.push({
      id: item.Id,
      group: item.CarId,
      start_time: item.BeginDateTime,
      end_time: item.EndDateTime,
      title: `Agha Huseynov`
    });
  });

  calendar["Groups"] = groups;
  calendar["Items"] = items;
  return calendar;
};

export default GetCalendar;
