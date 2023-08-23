import { useEffect, useState } from "react";
import axios from "axios";

export default function TerritoryTree() {
  const [territoryData, setTerritoryData] = useState([]);
  const [expandedNodes, setExpandedNodes] = useState([]);

  useEffect(() => {
    async function fetchTerritoryData() {
      try {
        const response = await axios.get("https://authexamserver.onrender.com/territory");
        const territoryDataObject = response.data; // Assuming the response data is an object
        const territoryDataArray = Object.values(territoryDataObject);
        setTerritoryData(territoryDataArray);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchTerritoryData();
  }, []);

  // console.log("Territories", territoryData);

  // Handle clicking of list node
  const handleNodeClick = (nodeId) => {
    if (expandedNodes.includes(nodeId)) {
      setExpandedNodes(expandedNodes.filter((id) => id !== nodeId));
    } else {
      setExpandedNodes([...expandedNodes, nodeId]);
    }
  };

  // Check if list node is currently expanded
  const isNodeExpanded = (nodeId) => expandedNodes.includes(nodeId);

  // Render a territory node along with its nested children if expanded
  const renderTerritory = (territory) => (
    <li key={territory.id}>
      <span
        className={isNodeExpanded(territory.id) ? "caret caret-open" : "caret"}
        onClick={() => handleNodeClick(territory.id)}
      >
        {territory.name}
      </span>
      {isNodeExpanded(territory.id) && (
        <ul className="sub-tree">
          {territoryData
            .flat()
            .filter((t) => t.parent === territory.id)
            .map(renderTerritory)}
        </ul>
      )}
    </li>
  );

  return (
    <main>
      <ul className="tree">
        {territoryData
          .flat()
          .filter((t) => !t.parent)
          .map(renderTerritory)}
      </ul>
    </main>
  );
}
