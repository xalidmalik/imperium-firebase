import React, { useState, useEffect } from "react";
import { GetAllCar } from '../../firebase/database/Car';
import { GetAllBooking } from "src/firebase/database/Booking";
import { useSelector, useDispatch } from "react-redux"


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
      console.log("adw", f)
      items.push({
        id: f.Id,
        group: f.Car.Id,
        start_time: f.BeginDateTime,
        end_time: f.EndDateTime,
        title: f.Customer.Name + " " + f.Customer.Surname
      });
    });
  });
  console.log("rezlesrrrr", reservation)


  calendar["Groups"] = groups;
  calendar["Items"] = items;
  return calendar;
};

export default GetCalendar;
