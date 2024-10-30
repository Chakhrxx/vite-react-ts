// src/pages/Home/state.tsx
import React from "react";
import { HomeProps } from "@/interface/home.props";

const HomeStatePage: React.FC<HomeProps> = ({ state }) => {
  return (
    <main className="w-full h-full flex flex-col justify-center text-center">
      <h1 className="text-3xl font-bold underline">Home</h1>
      <p className="mt-4">{state}</p>
    </main>
  );
};

export default HomeStatePage;
