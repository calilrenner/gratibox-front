/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { useContext, useEffect } from "react";
import { getPlans } from "../services/gratibox";
import ChooseNewPlan from "../components/ChooseNewPlan";
import UserPlan from "../components/UserPlan";
import { storeUserData } from "../services/loginPersistence";

export default function User() {
  const { userData, setUserData } = useContext(UserContext);
  const navigate = useNavigate();
  const token = userData?.token;
  const hasSubscription = userData?.subscription;

  useEffect(() => {
    if (!token) {
      alert("Você precisa estar logado para visualizar esta página");
      navigate("/login", { replace: true });
      return;
    }

    getPlans(token)
      .then((res) => {
        if (res.status === 205) {
          alert("Erro de autenticação");
          navigate("/login", { replace: true });
          return;
        }
        if (res.status === 200) {
          setUserData({ ...userData, subscription: res.data });
          storeUserData(userData);
        }
      })
      .catch((err) => {
        alert(err.response.data.message);
        navigate("/login", { replace: true });
      });
  }, []);

  return <>{hasSubscription ? <UserPlan /> : <ChooseNewPlan />}</>;
}
