import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/homePage/Home";
import AllArtifacts from "../pages/allArtifacts/AllArtifacts";
import SignUp from "../pages/authentication/SignUp";
import SignIn from "../pages/authentication/SignIn";
import PrivateRoute from "./PrivateRoute";
import ArtifactsDetails from "../pages/artifactsDetails/ArtifactsDetails";
import AddArtifact from "../pages/addArtifact/AddArtifact";
import MyArtifacts from "../pages/myArtifacts/MyArtifacts";
import UpdateArtifact from "../pages/updateArtifact/UpdateArtifact";
import LikedArtifacts from "../pages/likedArtifacts/LikedArtifacts";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import ContactUs from "../pages/ContactUs/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allArtifacts",
        element: <AllArtifacts></AllArtifacts>,
      },
      {
        path: "/artifact/:id",
        element: (
          <PrivateRoute>
            <ArtifactsDetails></ArtifactsDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/addArtifact",
        element: (
          <PrivateRoute>
            <AddArtifact></AddArtifact>
          </PrivateRoute>
        ),
      },
      {
        path: "/myArtifacts",
        element: (
          <PrivateRoute>
            <MyArtifacts></MyArtifacts>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateArtifact/:id",
        element: (
          <PrivateRoute>
            <UpdateArtifact></UpdateArtifact>
          </PrivateRoute>
        ),
      },
      {
        path: "/likedArtifacts",
        element: (
          <PrivateRoute>
            <LikedArtifacts></LikedArtifacts>
          </PrivateRoute>
        ),
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/contactUs",
        element: <ContactUs></ContactUs>,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>,
  },
]);

export default router;
