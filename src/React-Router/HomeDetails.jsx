import { useContext } from "react";
import { Appcontext } from "./Usecreatecontextss";

function HomeDetails() {
  const { data } = useContext(Appcontext);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Photo Gallery</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {data.map((item) => (
          <li key={item.id} style={{ margin: "10px 0", border: "1px solid #ccc", padding: "10px", borderRadius: "5px" }}>
            <img src={item.thumbnailUrl} alt={item.title} style={{ width: "50px", height: "50px", marginRight: "10px" }} />
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomeDetails;
