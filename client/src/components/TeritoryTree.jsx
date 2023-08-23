import { useEffect, useState } from "react";
import axios from "axios";

export default function TerritoryTree({inputId}) {
  const [territoryData, setTerritoryData] = useState([]);

  useEffect(() => {
    async function fetchTerritoryData() {
      try {
        const response = await axios.get("http://localhost:8080/territory");
        const territoryDataObject = response.data; // Assuming the response data is an object
        const territoryDataArray = Object.values(territoryDataObject);
        setTerritoryData(territoryDataArray);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchTerritoryData();
  }, []);

  console.log("test", territoryData);

  return (
    <main>
      {territoryData.map((territoriesArray, index) => (
        <ul key={index}>
          {territoriesArray.map((territory) => (
            <li key={territory.id === inputId}>{territory.name}</li>
          ))}
        </ul>
      ))}
    </main>
  );
}
