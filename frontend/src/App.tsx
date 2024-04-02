// App.js
import React from 'react';
import './assets/sass/index.scss';
import { BrowserRouter as Router, Routes, Route, Navigate,Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import Header from './components/header/headerComponent';
import MainPage from './containers/MainContainer/MainPage';
import FooterComponent from './components/footer/footerComponent';
import LoginContainer from './containers/login/loginContainer';
import PrivateRoutes from './routes/protectedRoute';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
         
          <Route element={<PrivateRoutes />}>
          <Route path="/" element={<MainPage />} />
             
            </Route>
          <Route path="/login" element={<LoginContainer />} />
          {/* <PrivateRoute path="/protected" element={<ProtectedPage />} />  */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        {/* <FooterComponent /> */}
      </Router>
    </Provider>
  );
}

const ProtectedPage = () => {
  return <h1>Protected Page</h1>;
};

export default App;
