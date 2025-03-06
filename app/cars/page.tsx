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
    <div>
      <h1>Cars</h1>
      <Card />
    </div>
  );
}
