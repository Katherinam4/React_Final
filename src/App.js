import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [photos, setPhotos] = useState([]);
  const ACCESS_KEY = "SFyfJJdcrh-AjbHgy5mC00FifkgIfAmo7-dLBs57LEk";
  useEffect(() => {
    const fetchPorschePhotos = async () => {
      try {
        const response = await axios.get(
          "https://api.unsplash.com/search/photos",
          {
            params: {
              query: "porsche",
              client_id: ACCESS_KEY,
            },
          }
        );
        setPhotos(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.error("Error fetching photos from Unsplash:", error);
      }
    };

    fetchPorschePhotos();
  }, []);

  return (
    <div>
      <h1>Porsche Photos</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {photos.map((photo) => (
          <div key={photo.id} style={{ margin: "10px" }}>
            <img
              src={photo.urls.small}
              alt={photo.alt_description}
              style={{ width: "300px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
