import React from "react";
import Card from "../components/ui/cars/card";
import { Car } from "../lib/types/types";

type Props = {};

const cars: Car[] = [
  {
    name: "Speedster X",
    type: "Audi",
    color: "red",
    motor: {
      serialNumber: 5678,
      hp: 250,
    },
  },
  {
    name: "Thunderbolt",
    type: "Mercedes",
    color: "black",
    motor: {
      serialNumber: 9101,
      hp: 300,
    },
  },
  {
    name: "Road King",
    type: "Ford",
    color: "blue",
    motor: {
      serialNumber: 1121,
      hp: 220,
    },
  },
  {
    name: "Shadow Racer",
    type: "Tesla",
    color: "silver",
    motor: {
      serialNumber: 3141,
      hp: 400,
    },
  },
  {
    name: "Eco Drive",
    type: "Toyota",
    color: "white",
    motor: {
      serialNumber: 5161,
      hp: 180,
    },
  },
  {
    name: "Beast Mode",
    type: "Dodge",
    color: "orange",
    motor: {
      serialNumber: 7181,
      hp: 500,
    },
  },
  {
    name: "Skyline GTR",
    type: "Nissan",
    color: "gray",
    motor: {
      serialNumber: 9202,
      hp: 350,
    },
  },
  {
    name: "Turbo Charge",
    type: "Porsche",
    color: "yellow",
    motor: {
      serialNumber: 1022,
      hp: 450,
    },
  },
  {
    name: "Night Fury",
    type: "Lamborghini",
    color: "purple",
    motor: {
      serialNumber: 1224,
      hp: 600,
    },
  },
  {
    name: "Hyper Sonic",
    type: "Ferrari",
    color: "gold",
    motor: {
      serialNumber: 1426,
      hp: 700,
    },
  },
];

export default function Cars({}: Props) {
  return (
    <div className="p-10">
      <h1 className="font-bold text-4xl mb-5">Cars</h1>
      {cars.map((car: Car) => (
        <Card car={car} />
      ))}
    </div>
  );
}
