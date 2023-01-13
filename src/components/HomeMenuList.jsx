import React from "react";
import salad from "../assets/salad.jpg";
import pasta from "../assets/pasta.jpg";
import fish from "../assets/fish.jpg";

function HomeMenuList() {
  return (
    <section className="menulist">
      <div className="menulist__container">
        <div className="menulist__dish">
          <div className="menulist__dish__text">
            <h3>Greek Salad</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur laudantium ea odio porro at eaque quo. Nostrum atque
              hic delectus.
            </p>
            <p>$12.99</p>
          </div>
          <div className="menulist__dish__image">
            <img src={salad} alt="salad" />
          </div>
        </div>
        <div className="menulist__dish">
          <div className="menulist__dish__text">
            <h3>Brushetta</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur laudantium ea odio porro at eaque quo. Nostrum atque
              hic delectus.
            </p>
            <p>$7.99</p>
          </div>
          <div className="menulist__dish__image">
            <img src={pasta} alt="pasta" />
          </div>
        </div>
        <div className="menulist__dish">
          <div className="menulist__dish__text">
            <h3>Grilled Fish</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur laudantium ea odio porro at eaque quo. Nostrum atque
              hic delectus.
            </p>
            <p>$15.99</p>
          </div>
          <div className="menulist__dish__image">
            <img src={salad} alt="fish" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeMenuList;
