import React, { useContext } from "react";
import { privateRoutes, publicRoutes } from "../routes";
import { Route, Routes, Navigate } from "react-router-dom";
import { CHAT_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import { Context } from "../index";
import { useAuthState } from "react-firebase-hooks/auth";

const AppRouter = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  // console.log(user);

  // let user = true;
  // user = false;

  return user ? (
    <Routes>
      {/* <Route path="/" component={<Navigate to={Chat} />}> */}
      {privateRoutes.map(({ path, component: Component }) => (
        <Route key={path} path={path} element={<Component />} exact={true} />
      ))}
      <Route path="*" element={<Navigate to={CHAT_ROUTE} />} />
      {/* </Route> */}
    </Routes>
  ) : (
    <Routes>
      {/* <Route index component={Login} /> */}
      {publicRoutes.map(({ path, component: Component }) => (
        <Route key={path} path={path} element={<Component />} exact={true} />
      ))}
      <Route path="*" element={<Navigate to={LOGIN_ROUTE} />} />
    </Routes>
  );
};

export default AppRouter;
