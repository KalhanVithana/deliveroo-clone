import React, { Suspense, useState } from "react";
import "./assets/sass/index.scss";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import Header from "./components/header/headerComponent";
import FooterComponent from "./components/footer/footerComponent";
import { CircularProgress } from "@mui/material";

const MainPage = React.lazy(() => import("./containers/MainContainer/MainPage"));
const LoginContainer = React.lazy(() => import("./containers/login/loginContainer"));
const PrivateRoutes = React.lazy(() => import("./routes/protectedRoute"));

function App() {
  const [mainContentReady, setMainContentReady] = useState(false);

  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Suspense fallback={<CircularProgress />}>
          <Routes>
            <Route
              path="/main"
              element={
                <Suspense fallback={<CircularProgress />}>
                  <PrivateRoutes />
                  <MainPage onLoad={() => setMainContentReady(true)} />
                </Suspense>
              }
            />
            <Route
              path="/"
              element={
                <Suspense fallback={<CircularProgress />}>
                  <LoginContainer onLoad={() => setMainContentReady(true)} />
                </Suspense>
              }
            />
          </Routes>
        </Suspense>
        {mainContentReady && <FooterComponent />}
      </Router>
    </Provider>
  );
}

export default App;
