/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { Navigate, Route, Routes, Outlet } from "react-router-dom";
import Loading from "../components/Loading";
import Server from "../service/server";

export default function PrivateRoute({
  component: Component,
  ...rest
}: any): JSX.Element {
  const [valid, setValid] = React.useState(true);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const token = localStorage.getItem("authToken");
    Server.verifyUser({ token: token || "" })
      .then((response) => {
        if (response.data.success) {
          setValid(true);
          setLoading(false);
        } else {
          setValid(false);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
        setValid(false);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return valid ? <Component /> : <Navigate to="/login" />
}
