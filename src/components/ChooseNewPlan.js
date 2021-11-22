import styled from "styled-components";
import week from "../assets/images/weekplan.jpg";
import month from "../assets/images/monthplan.jpg";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

export default function ChooseNewPlan() {
  const { userData, setChoosedPlan, choosedPlan } = useContext(UserContext);
  const name = userData?.name?.split(" ")[0];
  const navigate = useNavigate();

  const handlePlan = (e) => {
    e.preventDefault();
    const thisPlan = e.target.id;
    setChoosedPlan({ ...choosedPlan, plan: thisPlan });
    navigate("/newplan", { replace: true });
  };

  return (
    <Body>
      <Header>
        <h1>Bom te ver por aqui, {name}.</h1>
        <h2>Você ainda não assinou um plano, que tal começar agora?</h2>
      </Header>
      <Plan>
        <img src={week} alt="weekly plan" />
        <div>
          <h3>
            Você recebe um box por semana. Ideal para quem quer exercer a
            gratidão todos os dias.
          </h3>
          <Submit id="Mensal" onClick={(e) => handlePlan(e)}>
            Assinar
          </Submit>
        </div>
      </Plan>
      <Plan>
        <img src={month} alt="weekly plan" />
        <div>
          <h3>
            Você recebe um box por semana. Ideal para quem quer exercer a
            gratidão todos os dias.
          </h3>
          <Submit id="Semanal" onClick={(e) => handlePlan(e)}>
            Assinar
          </Submit>
        </div>
      </Plan>
    </Body>
  );
}

const Body = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem 1rem 1rem;
  h1 {
    font-size: 26px;
    font-weight: bold;
    color: #fff;
  }
  h2 {
    font-size: 18px;
    font-weight: 300;
    color: #fff;
    margin-top: 1.5rem;
  }
`;

const Plan = styled.div`
  margin: 2rem 0 0;
  height: 25rem;
  width: calc(100vw - 1rem);
  background-color: #e5cdb3;
  border-radius: 25px;

  &:last-child {
    margin-bottom: 3rem;
  }

  img {
    object-fit: cover;
    height: 55%;
    width: 100%;
    border-radius: 25px;
  }

  div {
    height: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h3 {
    color: #4d65a8;
    font-size: 18px;
    font-weight: bold;
    width: calc(100% - 2rem);
    margin-left: 1.5rem;
    text-align: left;
  }
`;

const Submit = styled.button`
  height: 2.5rem;
  width: 10rem;
  color: #fff;
  background-color: #8c97ea;
  border-radius: 10px;
  border: none;
  font-weight: bold;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;