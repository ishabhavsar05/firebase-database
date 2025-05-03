import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error("Error:", err));
  }, []);

  return (
    <div style={{ padding: 20, textAlign: "center" }}>
      <h2>Dashboard - Product List</h2>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        marginTop: "20px"
      }}>
        {products.map(p => (
          <div
            key={p.id}
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
              padding: "10px",
              width: "200px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              transition: "transform 0.2s"
            }}
          >
            <img
              src={p.image}
              alt={p.title}
              style={{ width: "100%", height: "150px", objectFit: "contain" }}
            />
            <h4>{p.title}</h4>
            <p>${p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
