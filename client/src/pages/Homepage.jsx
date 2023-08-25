import { useEffect } from "react";
import "../assets/styles/homepage.css";
import TeritoryTree from "../components/TeritoryTree";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "./auth";
export default function Homepage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/account/login");
    }
  });

  return (
    <>
      <main>
        <div>
          <h1>Territories</h1>
          <p>Here are the list of teritories</p>
          <TeritoryTree />
        </div>
      </main>
    </>
  );
}
