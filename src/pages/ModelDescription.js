import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase.config";
import { getDoc, doc } from "firebase/firestore";
import { motion } from "framer-motion";
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
      setDetails(data);
      window.scrollTo(0, 0);
    }
    fetchData();
  }, [model]);

  return (
    <motion.div
      className="details"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="cover"
        style={{ backgroundImage: `url(${details.Image})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1, delay: 0.5 } }}
        >
          {details.Model}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
        >
          {details.Quote}
        </motion.p>
      </motion.div>
      <motion.div
        className="description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1, delay: 1.5 } }}
      >
        <motion.h2>{details.Title}</motion.h2>
        <motion.p className="description-text">{details.Description}</motion.p>
        <motion.img
          src={details.Design}
          alt={details.Model}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1, delay: 2 } }}
        />
        <motion.div className="sizes">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1, delay: 2.5 } }}
          >
            Width : {details.Width}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1, delay: 2.7 } }}
          >
            Height : {details.Height}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1, delay: 2.9 } }}
          >
            Length : {details.Length}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1, delay: 3.1 } }}
          >
            Wheelbase : {details.Wheelbase}
          </motion.p>
        </motion.div>
        <motion.div className="specs">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1, delay: 3.3 } }}
          >
            <p>{details.Max_power}</p> <span>Max Power</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1, delay: 3.5 } }}
          >
            <p>{details.Max_speed}</p> <span>Max Speed</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1, delay: 3.7 } }}
          >
            <p>{details["0-100"]}</p> <span>0 - 100 Time</span>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        className="full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1, delay: 4 } }}
      >
        <motion.h2>Full Experience</motion.h2>
        <motion.img
          src={details.full}
          alt="full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1, delay: 4.2 } }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ModelDescription;
