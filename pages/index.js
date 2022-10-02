import Layout from "../Components/Layout";
import { database } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Slider from "../Components/Slider";
export default function Home() {
  const databaseRef = collection(database, "crud data");

  const getData = async () => {
    await getDocs(databaseRef).then((response) => {
      setCurrentImage(
        response.docs.map((data) => {
          return { ...data.data(), id: data.id };
        })
      );
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const [currentImage, setCurrentImage] = useState([]);

  const [index, setIndex] = useState(1);

  useEffect(() => {
    const lastIndex = currentImage.length - 1;

    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, currentImage]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index - 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  const nextImage = () => {
    setIndex(index - 1);
    console.log(index, "nextclick");
  };

  const previousImage = () => {
    setIndex(index + 1);
    console.log(index, "previousclick");
  };

  return (
    <Layout>
      <Slider
        currentImage={currentImage}
        nextImage={nextImage}
        previousImage={previousImage}
      />
    </Layout>
  );
}
