import db from "../firebaseconfig";

export const Car = db.collection("Car");
export const Customer = db.collection("Customer");
export const Booking = db.collection("Booking");
export const Department = db.collection("Department");
export const Transaction = db.collection("Transaction");