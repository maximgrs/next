import { Car } from "@/app/lib/types/types";
import React from "react";
import Card from "./card";

type Props = { cars: Car[] };

export default function CardList({ cars }: Props) {
  return (
    <div className="p-10">
      <h1 className="font-bold text-4xl mb-5">Cars</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {cars.map((car: Car) => (
          <Card car={car} />
        ))}
      </div>
    </div>
  );
}
