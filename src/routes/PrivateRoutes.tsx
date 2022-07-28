/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { Navigate } from "react-router-dom";
import Server from "../service/server";

export default function PrivateRoute({ component: Component }: any):  JSX.Element {
  const [valid, setValid] = React.useState(true);
  React.useEffect(() => {
    const token = localStorage.getItem("authToken");
    Server.verifyUser({ token: token || "" })
      .then((response) => {
        if (response.data.success) {
          setValid(true);
        } else {
          setValid(false);
        }
      })
      .catch((error) => {
        console.log(error);
        setValid(false);
      });
  }, []);

  return valid ? <Component /> : <Navigate to='/login' />;
}
