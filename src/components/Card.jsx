import React from "react";
// import axios from "axios";
import { useState } from "react";
import Email from "../assets/email.svg";
import Location from "../assets/location.svg";
import Phone from "../assets/phone.svg";
import "./card.css";

const Card = () => {
  const [random, setRandom] = useState([]);

  const url = "https://randomuser.me/api/";

  const getRandom = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setRandom(data.results[0]));
  };
  console.log(random);
  const { name, dob, email, picture } = random;

  //   const getRandoms = async () => {
  //     try {
  //       const { results } = await axios(url);
  //       console.log(results[0]);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   const handleRandom = () => {
  //     return setRandom();
  //   };

  return (
    <div className="container text-center">
      <div className="mycard">
        <div className="card-top d-flex text-center justify-content-between">
          <img
            src="https://cdn.pixabay.com/photo/2022/08/26/04/19/beach-7411683_960_720.jpg"
            alt=""
          />
          <h3>NAME</h3>
        </div>
        <div className="card-bottom d-flex text-center justify-content-between">
          <img src={Email} alt="" />
          <h3>...........</h3>
        </div>
        <div className="card-bottom d-flex text-center justify-content-between">
          <img src={Phone} alt="" />
          <h3>...........</h3>
        </div>
        <div className="card-bottom d-flex text-center justify-content-between">
          <img src={Location} alt="" />
          <h3>..........</h3>
        </div>
      </div>
      <div className="button">
        <button
          className="bg-danger text-white p-2 rounded-2"
          onClick={getRandom}
        >
          RANDOM APP
        </button>
      </div>
    </div>
  );
};

export default Card;
