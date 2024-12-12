"use client";
import { Flowbite } from "flowbite-react";
import React, { useEffect } from "react";
import MainNavbar from "../Shared/MainNavbar";
import MainFooter from "../Shared/MainFooter";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import { setUser } from "@/redux/slices/userSlice";
import { useDispatch } from "react-redux";

const RootComponent = ({ children }: any) => {
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/");
      dispatch(setUser({ name: "", email: "" }));
    } else {
      try {
        // Decode the token to get user details
        const decodedToken: any = jwtDecode(token);
        dispatch(
          setUser({ email: decodedToken.email, name: decodedToken.name })
        ); // Extract the email from the token
      } catch (error) {
        console.error("Invalid token", error);
        router.push("/"); // Redirect if the token is invalid
      }
    }
  }, [dispatch, router]);
  return (
    <Flowbite>
      <div className="container mx-auto px-2">
        <MainNavbar />
        {children}
        <MainFooter />
      </div>
    </Flowbite>
  );
};

export default RootComponent;
