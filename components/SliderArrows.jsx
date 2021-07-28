import styles from "./../styles/p4.module.scss";

const SliderArrow = (props) => {
  let className = props.type === "next" ? "nextArrow" : "prevArrow";
  const charSrc =
    props.type === "next"
      ? "/images/chevron-right_white.png"
      : "/images/chevron-left_white.png";
  return (
    <div className={styles[className]} onClick={props.onClick}>
      {/* <img className={styles.arrows} src={charSrc} alt="arrow" /> */}
    </div>
  );
};

export default SliderArrow;
