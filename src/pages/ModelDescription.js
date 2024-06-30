import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase.config";
import { getDoc, doc } from "firebase/firestore";
import "../styles/ModelDescription.scss";

async function fetchDocumentFromFirestore(docId) {
  const docRef = doc(db, "details", docId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such document!");
    return null;
  }
}
const ModelDescription = () => {
  const [details, setDetails] = useState({});
  const { model } = useParams();

  useEffect(() => {
    async function fetchData() {
      const data = await fetchDocumentFromFirestore(model);
      console.log(model);
      console.log(data);
      setDetails(data);
    }
    fetchData();
  }, []);

  return (
    <div className="details">
      <div
        className="cover"
        style={{ backgroundImage: `url(${details.Image})` }}
      >
        <h2>{details.Model}</h2>
        <p>{details.Quote}</p>
      </div>
      <div className="description">
        <h2>{details.Title}</h2>
        <p className="description-text">{details.Description}</p>
        <img src={details.Design} alt={details.Model} />
        <div className="sizes">
          <p>Width : {details.Width}</p>
          <p>Height : {details.Height}</p>
          <p>Length : {details.Length}</p>
          <p>Wheelbase : {details.Wheelbase}</p>
        </div>
        <div className="specs">
          <div>
            <p>{details.Max_power}</p> <span>Max Power</span>
          </div>
          <div>
            <p>{details.Max_speed}</p> <span>Max Speed</span>
          </div>
          <div>
            <p>{details["0-100"]}</p> <span>0 - 100 Time</span>
          </div>
        </div>
      </div>
      <div className="full">
        <h2>Full Experience</h2>
        <img src={details.full} alt="full" />
      </div>
    </div>
  );
};

export default ModelDescription;
