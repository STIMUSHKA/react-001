import React, { useState } from "react";
import restaurants from "../sample-restaurants";
import propTypes from "prop-types";


const Landing = (props) => {

    const [ display, toggleDisplay ] = useState(false);
    const [ title, setTitle ] = useState('');
    const [ url, setUrl ] = useState('');

    const displayList = () => {
        toggleDisplay(!display)
    };
    
    const getTitle = (restaurant) => {
        const { title, url } = restaurant;
        toggleDisplay(false);
        setTitle(title);
        setUrl(url);

    };
    
    const goToResataurant = () => {
        props.history.push(`/restaurant/${url}`);
    };

    return (
        <div className="restaurant_select">
          <div className="restaurant_select_top">
            <div
              onClick={displayList}
              className="restaurant_select_top-header font-effect-outline"
            >
              {title ? title : "Выбери ресторан"}
            </div>
            <div className="arrow_picker">
              <div className="arrow_picker-up"></div>
              <div className="arrow_picker-down"></div>
            </div>
          </div>
          {display ? (
            <div className="restaurant_select_bottom">
              <ul>
                {restaurants.map((restaurant) => {
                  return (
                    <li
                      onClick={() => getTitle(restaurant)}
                      key={restaurant.id}
                    >
                      {restaurant.title}
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : null}
          {title && !display ? (
            <button onClick={goToResataurant}>Перейти в ресторан</button>
          ) : null}
        </div>
    );
};

Landing.propTypes = {
    history: propTypes.object
};

export default Landing;
