import { useState } from "react";
// import "./ItemCounter.css";
import styles from "./ItemCounter.module.css";

interface Props {
  name: string;
  quantity?: number;
}

export const ItemCounter = ({ name, quantity = 1 }: Props) => {
  const [count, setCount] = useState(quantity);

  //   const handleClick = () => {
  //     console.log(`Click ${name}`);
  //   };

  const handleAdd = () => {
    setCount(count + 1);
  };
  const handleSubtract = () => {
    if (count === 1) return; // esto es para que no me deje bajar de 1
    setCount(count - 1);
  };

  return (
    <section
      className={styles.itemRow}
      //   style={{
      //     display: "flex",
      //     alignItems: "center",
      //     gap: 10,
      //     marginTop: 10,
      //   }}
    >
      <span
        className={styles["item-text"]}
        style={{
          //   width: 150,
          color: count === 1 ? "red" : "black",
        }}
      >
        {name}
      </span>
      <button onClick={handleAdd}>+1</button>
      <span>{count}</span>
      <button data-testid={"button-subtract"} onClick={handleSubtract}>
        -1
      </button>
    </section>
  );
};
