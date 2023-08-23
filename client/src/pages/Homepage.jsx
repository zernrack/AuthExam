import "../assets/styles/homepage.css";
import TeritoryTree from "../components/TeritoryTree";
export default function Homepage() {
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
