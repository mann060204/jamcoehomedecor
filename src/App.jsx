import React from "react";
import { createContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ProductListing from "./Pages/ProductListing";
import Footer from "./components/Footer";
import ProductDetails from "./Pages/ProductDetails";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import ProductZoom from "./components/ProductZoom";
import { MdClose } from "react-icons/md";
import { ProductDetailsComponents } from "./components/ProductDetails";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import CartPage from "./Pages/Cart";
import Verify from "./Pages/Verify";
import ForgotPassword from "./Pages/ForgotPassword";
import toast, { Toaster } from 'react-hot-toast';
import Checkout from "./Pages/Checkout";
import MyAccount from "./Pages/MyAccount";
import MyList from "./Pages/Mylist";
import Orders from "./Pages/Orders";


const MyContext = createContext();

function App() {
  const [openProductDetailsModel, setOpenProductDetailsModel] = useState(false);
  const [maxWidth, setMaxWidth] = React.useState("xl");
  const [fullWidth, setFullWidth] = React.useState(true);
  const[isLogin, setIsLogin]=useState(true);

  const [openCartPanel, setOpenCartPanel] = React.useState(false);

  const handleCloseProductDetailsModel = () => {
    setOpenProductDetailsModel(false);
  };

  const toggleCartPanel = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };


const openAlertBox = (status, msg) => {
  if (status === "success") {
    toast.success(msg);
  }
  if (status === "error") {
    toast.error(msg);
  }
};

  const values = {
    setOpenProductDetailsModel,
    setOpenCartPanel,
    openCartPanel,
    toggleCartPanel,
    openAlertBox,
    isLogin,
    setIsLogin
  };
  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Header />
          <Routes>
            <Route path={"/"} exact={true} element={<Home />} />
            <Route
              path={"/productlisting"}
              exact={true}
              element={<ProductListing />}
            />
            <Route
              path={"/product/:id"}
              exact={true}
              element={<ProductDetails />}
            />
            <Route path={"/login"} exact={true} element={<Login />} />
            <Route path={"/register"} exact={true} element={<Register />} />
            <Route path={"/cart"} exact={true} element={<CartPage />} />
            <Route path={"/verify"} exact={true} element={<Verify />} />
            <Route path={"/forgot-password"} exact={true} element={<ForgotPassword />} />
            <Route path={"/checkout"} exact={true} element={<Checkout />} />
            <Route path={"/my-account"} exact={true} element={<MyAccount />} />
            <Route path={"/my-list"} exact={true} element={<MyList />} />
            <Route path={"/my-order"} exact={true} element={<Orders />} />
          </Routes>
          <Footer />
        </MyContext.Provider>
      </BrowserRouter>


      <Toaster/>

      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={openProductDetailsModel}
        onClose={handleCloseProductDetailsModel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="productDetailsModel"
      >
        <DialogContent>
          <div className="flex items-centerw-full productDetailsModelContainer relative">
            <Button
              className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] !absolute top-[15px] right-[15px] !bg-[#f1f1f1]"
              onClick={handleCloseProductDetailsModel}
            >
              <MdClose className="text-[22px]" />
            </Button>
            <div className="col1 w-[40%] ">
              <ProductZoom />
            </div>
            <div className="col2 w-[60%] py-8 px-8 pr-16 productContent">
              <ProductDetailsComponents />
            </div>
          </div>
        </DialogContent>
      </Dialog>

      
    </>
  );
}

export default App;
export { MyContext };
