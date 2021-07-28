import styles from "./../styles/p4.module.scss";

const SliderArrow = (props) => {
  let className = props.type === "next" ? "nextArrow" : "prevArrow";

  return <div className={styles[className]} onClick={props.onClick}></div>;
};

export default SliderArrow;
