import styles from "./charactersCard.module.css";
import $ from "jquery";
function CharactersCard() {
  // const cardColor = () => {
  //   let house = $("#house").text();
  //   // if (house == "red") {
  //   //   $("#card").css("background-color", "red");
  //   // }

  // };
  $("#red").css("background-color", "red");
  $("#pink").css("background-color", "pink");

  return (
    <div className={styles.grid}>
      <div className={styles.card} id="red">
        <img className={styles.picture} />
        <h2>Name</h2>
        <h3 id="house">red</h3>
        <p>12/05/1980</p>
      </div>
      <div className={styles.card} id="pink">
        <img className={styles.picture} />
        <h2>Name</h2>
        <h3 id="house">pink</h3>
        <p>12/05/1980</p>
      </div>
      <div className={styles.card} id="card">
        <img className={styles.picture} />
        <h2>Name</h2>
        <h3 id="house">blue</h3>
        <p>12/05/1980</p>
      </div>
      <div className={styles.card} id="card">
        <img className={styles.picture} />
        <h2>Name</h2>
        <h3 id="house">blue</h3>
        <p>12/05/1980</p>
      </div>
    </div>
  );
}
export default CharactersCard;
