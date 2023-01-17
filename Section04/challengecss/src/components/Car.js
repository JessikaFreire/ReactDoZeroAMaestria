import styles from "./Car.module.css";

import React from "react";

const Car = ({ car }) => {
  return (
    <div className={styles.card}>
      <h2>{car.name}</h2>
      <p>{car.km}</p>
      <p>{car.color}</p>
    </div>
  );
};

export default Car;
