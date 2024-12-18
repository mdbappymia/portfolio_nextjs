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
import { useGetBlogsQuery } from "@/redux/slices/blogApi";
import {
  setBlogCategories,
  setBlogs,
  setIsLoadingBlog,
} from "@/redux/slices/blogSlice";

const RootComponent = ({ children }: any) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const userIsLoading = useAppSelector((state) => state.loading.userIsloading);

  useEffect(() => {
    dispatch(setUserIsloading(true));
    assignUser()
      .then((data) => {
        // console.log(data);
        const getUser: any = data;
        // console.log(getUser);
        if (!getUser.email) {
          // console.log("Get useremail ");
          refreshAccessToken();
          dispatch(setUserIsloading(false));
          return;
        }
        // Check if the access token is available
        if (getUser.email) {
          try {
            dispatch(
              setUser({
                id: getUser._id,
                email: getUser.email,
                name: getUser.name,
                role: getUser.role,
              })
            );
            dispatch(setUserIsloading(false));
            return;
          } catch (error) {
            // dispatch(clearUser());
            console.log(error);
          }
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

  // Function to refresh the access token using the refresh token
  const refreshAccessToken = async () => {
    try {
      const response = await fetch("/api/auth/refresh", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      // console.log(data);

      if (response.ok) {
        const getUserRefreshToken = data.user;
        // Decode the new access token and set user data in Redux store
        dispatch(
          setUser({
            id: getUserRefreshToken._id,
            email: getUserRefreshToken.email,
            name: getUserRefreshToken.name,
            role: getUserRefreshToken.role,
          })
        );
      } else {
        console.error("Failed to refresh access token");
        // router.push("/signin");
        dispatch(clearUser());
      }
    } catch (error) {
      console.error("Error refreshing access token:", error);
      // router.push("/signin");
      dispatch(clearUser());
    }
  };

  const assignUser = async () => {
    try {
      const response = await fetch("/api/user/assign", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        // Handle HTTP errors gracefully
        throw new Error("Failed to assign user");
      }

      const data = await response.json();
      return data.user; // Return the user data directly
    } catch (error) {
      console.error("Error assigning user:", error);
      return {}; // Return an empty object in case of error
    }
  };

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
