"use client";
import React from "react";
import UserCard from "./UserCard";
import { useAuthContext } from "@/context/AuthContext";

const images = [
  "/images/default-blue.png",
  "/images/default-red.png",
  "/images/default-slate.png",
  "/images/default-green.png",
];
const CardContainer = () => {
  const { currentUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center gap-4 mt-3">
      <UserCard
        image={images[0]}
        name={currentUser?.displayName || "Guest-1"}
      />
      <UserCard image={images[1]} name={"Guest-2"} />
      <UserCard image={images[2]} name={"Guest-3"} />
      <UserCard image={images[3]} name={"Guest-4"} />
    </div>
  );
};

export default CardContainer;
