import React, { Component } from "react";
import Card from "../../components/Card/Card";
import { customer } from "../../helpers/Static/System";
import { contactForm } from "../../helpers/Static/FormFields";
import CardSide from "src/components/Card/CardSide";
import ContactOutput from "src/components/FormElements/Output/ContactOutput";
// import CheckboxOutput from "../../components/FormElements/Outputs/CheckboxOutput";

const ContractOverview: React.FC<any> = (props: any) => {
  const { data }: any = props;
  console.log("reservation overview", data);
  return (
    <>
      <CardSide base={customer.identity} classes={"h-276 w-card bg-white w-full rounded-lg shadow-base mb-4"}>
        <h3 className="flex w-full font-bold justify-center leading-none text-2xl pt-4">AYAZ ARAÇ KİRALAMA</h3>
        <h5 className="flex font-bold leading-none justify-center text-lg pt-1">0366 212 46 64  -  0541 467 46 96</h5>
        <h6 className="flex leading-none justify-center text-base pt-1">info@ayazarackiralama.com    www.ayazarackiralama.com</h6>
        <h6 className="flex font-bold leading-none justify-center text-base pt-1">İsmailbey Mah. Kışla Cad. Önder Apt. 25/1 - KASTAMONU</h6>
        <div className="flex">
          <div className="w-2/4 rounded-l-lg p-8 text-left">
            <span className="min-h-8 font-bold border-b-2 border-blue-500 w-full rounded-none items-center flex text-xs mb-6"
            >
              1. Sürücü Kimlik Bilgileri
            </span>
            <ContactOutput base={contactForm.NameSurname} data={data.Customer.Name + " " + data.Customer.Surname} />
            <ContactOutput
              base={contactForm.TCNumber}
              data={data.Customer.TCNumber}
            />
            <ContactOutput
              base={contactForm.BirthDate}
              data={data.Customer.BirthDate}
            />
            {/* <ContactOutput
              base={contactForm.BloodGroup}
              data={data.Customer.BloodGroup}
            /> */}
            <ContactOutput
              base={contactForm.FatherAndMotherName}
              data={data.Customer.MotherName + " " + data.Customer.FatherName}
            />
            <span className="min-h-8 font-bold border-b-2 border-blue-500 w-full rounded-none items-center flex text-xs mb-6"
            >
              1. Sürücü İletişim Bilgileri
            </span>
            <ContactOutput
              base={contactForm.FirstPhone}
              data={data.Customer.FirstPhone}
            />
            <ContactOutput
              base={contactForm.EmergencyPhone}
              data={data.Customer.EmergencyPhone}
            />
            <ContactOutput
              base={contactForm.EmergencyPhoneOwner}
              data={data.Customer.EmergencyPhoneOwner}
            />
            <ContactOutput base={contactForm.Email} data={data.Customer.Email} />
            <ContactOutput base={contactForm.Address} data={data.Customer.Address + " | " + data.Customer.County + "/" + data.Customer.City + "/" + data.Customer.Country} classes="min-h-16 px-4  w-full rounded-none border-b border-gray-500 bg-white items-center flex text-xs" />
            <span className="min-h-8 font-bold border-b-2 border-blue-500 w-full rounded-none items-center flex text-xs mb-6"
            >
              Araç Bilgileri
            </span>
            <ContactOutput
              base={contactForm.Plate}
              data={data.Car.Plate}
            />
            <ContactOutput
              base={contactForm.BrandAndModelName}
              data={data.Car.BrandName + " " + data.Car.ModelName}
            />
            <ContactOutput
              base={contactForm.Color}
              data={data.Car.Color && data.Car.Color}
            />
            <ContactOutput
              base={contactForm.GearType}
              data={data.Car.GearType}
            />
            <ContactOutput
              base={contactForm.Note}
              data={""}
            />
          </div>
          <div className="w-2/4 rounded-r-lg p-8 text-left">
            <span className="min-h-8 font-bold border-b-2 border-blue-500 w-full rounded-none items-center flex text-xs mb-6"
            >
              2. Sürücü Kimlik Bilgileri
            </span>
            <ContactOutput base={contactForm.NameSurname} data={""} />
            <ContactOutput
              base={contactForm.TCNumber}
              data={""}
            />
            <ContactOutput
              base={contactForm.BirthDate}
              data={""}
            />
            {/* <ContactOutput
              base={contactForm.BloodGroup}
              data={data.Customer.BloodGroup}
            /> */}
            <ContactOutput
              base={contactForm.FatherAndMotherName}
              data={""}
            />
            <span className="min-h-8 font-bold border-b-2 border-blue-500 w-full rounded-none items-center flex text-xs mb-6"
            >
              2. Sürücü İletişim Bilgileri
            </span>
            <ContactOutput
              base={contactForm.FirstPhone}
              data={""}
            />
            <ContactOutput
              base={contactForm.EmergencyPhone}
              data={""}
            />
            <ContactOutput
              base={contactForm.EmergencyPhoneOwner}
              data={""}
            />
            <ContactOutput base={contactForm.Email} data={""} />
            <ContactOutput base={contactForm.Address} data={""} classes="min-h-16 px-4  w-full rounded-none border-b border-gray-500 bg-white items-center flex text-xs" />
            <span className="min-h-8 font-bold border-b-2 border-blue-500 w-full rounded-none items-center flex text-xs mb-6"
            >
              Kiralam Bilgileri
            </span>
            <ContactOutput
              base={contactForm.StartEndDate}
              data={""}
            />
            <ContactOutput
              base={contactForm.RentTime}
              data={""}
            />
            <ContactOutput
              base={contactForm.AddRentDate}
              data={""}
            />
            <ContactOutput
              base={contactForm.AddRentTime}
              data={""}
            />

          </div>
        </div>
      </CardSide>
    </>
  );
};

export default ContractOverview;
