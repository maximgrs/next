"use client";
import { Car } from "@/app/lib/types/types";
import React, { useState } from "react";

type Props = {
  car: Car;
};

export default function Card({ car }: Props) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      className={`shadow p-4 ${isActive ? "bg-red-200" : "bg-gray-200"}`}
      onClick={() => setIsActive(!isActive)}
    >
      <div className="font-bold text-2xl">{car.name}</div>
      <div>{car.color}</div>
      {isActive ? "active" : "inactive"}
    </div>
  );
}
