import React from "react";
import Card from "../components/ui/cars/card";
import { Car } from "../lib/types/types";

type Props = {};

const car: Car = {
  name: "Super Car",
  type: "BMW",
  color: "green",
  motor: {
    serialNumber: 1234,
    hp: 200,
  },
};

export default function Cars({}: Props) {
  return (
    <div className="p-10">
      <h1 className="font-bold text-4xl mb-5">Cars</h1>
      <Card car={car} />
    </div>
  );
}
