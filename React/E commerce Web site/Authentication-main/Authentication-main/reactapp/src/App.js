import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./store/auth-context";

function App() {
  return (
    //new app
    <AuthContextProvider>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/auth" element={<AuthPage />}></Route>
          <Route path="/profile" element={<UserProfile />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
