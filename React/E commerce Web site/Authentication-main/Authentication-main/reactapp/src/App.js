import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./store/auth-context";
import { useContext } from "react";
import AuthContext from "./store/auth-context";
import Protected from "./components/Profile/Protected";
function App() {
  const authCtx = useContext(AuthContext);
  return (
    //new app
 
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            {!authCtx.isLoggedIn && (
              <Route path="/auth" element={<AuthPage />}></Route>
            )}
            <Route
              path="/profile"
              element={
                <Protected isLoggedIn={authCtx.isLoggedIn}>
                  <UserProfile />
                </Protected>
              }
            />
            <Route path="*" element={<div>404 Bad Request</div>} />
          </Routes>
        </Layout>
      </BrowserRouter>
  );
}

export default App;
