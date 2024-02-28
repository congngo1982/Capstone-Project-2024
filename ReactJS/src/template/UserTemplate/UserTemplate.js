import { Route } from "react-router-dom";
import Loader from "./Loader/Loader";
import DarkMode from "./DarkMode/DarkMode";
import TopBar from "./TopBar/TopBar";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Header1 from "./Header/Header1";

export const UserTemplate = (props) => {
  const { Component, ...restProps } = props;
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <div className="body__wrapper">
            <Loader />
            <DarkMode />
            <main class="main_wrapper overflow-hidden">
              <TopBar />
              {/* <Header1/> */}
              <Header />
              <Component {...propsRoute} />
              <Footer />
            </main>
          </div>
        );
      }}
    />
  );
};
