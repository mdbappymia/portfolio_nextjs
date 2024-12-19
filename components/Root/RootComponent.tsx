/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { Flowbite, Spinner } from "flowbite-react";
import React, { useCallback, useEffect } from "react";
import MainNavbar from "../Shared/MainNavbar";
import MainFooter from "../Shared/MainFooter";
import { useRouter } from "next/navigation";
import { clearUser, setUser } from "@/redux/slices/userSlice";
import { useDispatch } from "react-redux";
import { setUserIsloading } from "@/redux/slices/loadingSlice";
import { useAppSelector } from "@/redux/store";

const RootComponent = ({ children }: any) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const userIsLoading = useAppSelector((state) => state.loading.userIsloading);

  useEffect(() => {
    dispatch(setUserIsloading(true));

    fetch("/api/user/assign", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const getUser: any = data;
        // console.log(getUser);
        if (!getUser.email) {
          fetch("/api/auth/refresh", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.user) {
                const getUserRefreshToken = data.user;
                dispatch(
                  setUser({
                    id: getUserRefreshToken._id,
                    email: getUserRefreshToken.email,
                    name: getUserRefreshToken.name,
                    role: getUserRefreshToken.role,
                  })
                );
              }
            })
            .catch((e) => {
              console.log(e);
            })
            .finally(() => {
              dispatch(setUserIsloading(false));
            });
          return;
        }
        // Check if the access token is available
        if (getUser.email) {
          dispatch(
            setUser({
              id: getUser._id,
              email: getUser.email,
              name: getUser.name,
              role: getUser.role,
            })
          );
        } else {
          dispatch(clearUser());
        }
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        dispatch(setUserIsloading(false));
      });
  }, [dispatch, router]);
  // const location = window.location;
  // console.log(location);
  return (
    <Flowbite>
      {userIsLoading ? (
        <div className="text-center h-screen flex items-center w-full justify-center">
          <Spinner
            aria-label="Center-aligned spinner example"
            size="xl"
            className="font-bold"
          />
        </div>
      ) : (
        <div className="container mx-auto px-2">
          <MainNavbar />
          {children}
          <MainFooter />
        </div>
      )}
    </Flowbite>
  );
};

export default RootComponent;
