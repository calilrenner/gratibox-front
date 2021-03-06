import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContext } from "./contexts/UserContext";
import DeliveryHating from "./pages/DeliveryHating";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NewPlan from "./pages/NewPlan";
import Register from "./pages/Register";
import User from "./pages/User";
import { getUserData } from "./services/loginPersistence";
import { GlobalStyles } from "./styles/GlobalStyles";

export default function App() {
  const [userData, setUserData] = useState(getUserData());
  const [choosedPlan, setChoosedPlan] = useState({
    plan: "Mensal",
    deliveryDate: "",
    products: [],
    adress: {
      street: "",
      zipCode: "",
      city: "",
      state: "",
    },
  });

  return (
    <BrowserRouter>
      <GlobalStyles />
      <UserContext.Provider
        value={{ userData, setUserData, choosedPlan, setChoosedPlan }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<User />} />
          <Route path="/newplan" element={<NewPlan />} />
          <Route path="/userplan/hating" element={<DeliveryHating />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
