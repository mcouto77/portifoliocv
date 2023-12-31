import styles from "./Card.module.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Card({ nome, description, html_url }) {
  return (
    <section className={styles.card}>
      <h3>{nome}</h3>
      <p>{description}</p>
      <div className={styles.card_footer}>
        <div className={styles.card_icones}>
          <FaHtml5 />
          <FaCss3Alt />
          <FaJs />
          <FaReact />
        </div>
        <a href={html_url} target="_blank" rel="nopenner noreferrer" className={styles.botao}>
          <BsArrowRight />
        </a>
      </div>
    </section>
  );
}

export default Card;
