import { Route, Routes } from "react-router-dom";
import Cart from "../../Pages/Cart";
import HomePage from "../../Pages/HomePage";
import Login from "../../Pages/Login";
import Products from "../../Pages/Products";
import Signup from "../../Pages/Signup";
import PrivateRoutes from "./PrivateRoutes";
import Logout from "../../Pages/Logout";
export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/products" element={<Products />} />
      <Route path="/logout" element={<Logout />} />
      <Route
        path="/cart"
        element={
          <PrivateRoutes>
            <Cart />
          </PrivateRoutes>
        }
      />
    </Routes>
  );
}
