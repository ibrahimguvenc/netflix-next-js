"use client";

import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function PrivateLayout({ children }) {
  const { currentUser } = useAuthContext();
  let router = useRouter();
  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (!user) {
      router.push("/login");
    }
  }, [currentUser]);

  return <section>{children}</section>;
}
