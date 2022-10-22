import React, { useEffect } from "react";
// import axios from "axios";
import { useState } from "react";
import Email from "../../assets/email.svg";
import Location from "../../assets/location.svg";
import Phone from "../../assets/phone.svg";
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
  const { name, dob, email, picture, phone, location } = random;

  useEffect(() => {
    getRandom();
  }, []);

  //   const getRandom = async () => {
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
    <div className="container bg-info  text-center">
      <div className="mycard">
        <div className="card-top d-flex text-center justify-content-between">
          <img src={picture?.large} alt="" />
          <h3>
            {name?.title} {name?.first} {name?.last}
          </h3>
        </div>
        <div className="card-bottom d-flex text-center justify-content-between">
          <img src={Email} alt="" />
          <h5>{email}</h5>
        </div>
        <div className="card-bottom d-flex text-center justify-content-between">
          <img src={Phone} alt="" />
          <h5>{phone}</h5>
        </div>
        <div className="card-bottom d-flex text-center justify-content-between">
          <img src={Location} alt="" />
          <h5>
            {location?.city} {location?.country}
          </h5>
        </div>
        <div>
          <p>{dob?.age}</p>
          <p>{dob?.date}</p>
        </div>
      </div>
      <div className="button">
        <button
          className="bg-info text-black p-2 rounded-2"
          onClick={getRandom}
        >
          RANDOM APP
        </button>
      </div>
    </div>
  );
};

export default Card;
