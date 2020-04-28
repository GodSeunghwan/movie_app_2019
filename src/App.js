import React from 'react';
import PropTypes from 'prop-types';

const foodILike = [
  {
    id: 1,
    name: "Apple",
    images: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/800px-Apple_logo_black.svg.png",
    rating: 5
  },
  {
    id: 2,
    name: "Banana",
    images: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/1020px-Banana-Single.jpg",
    rating: 4.9
  },
  {
    id: 3,
    name: "Grape",
    images: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Wine_grapes03.jpg/800px-Wine_grapes03.jpg",
    rating: 4.8
  },
  {
    id: 4,
    name: "Peach",
    images: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Peach_fruit_3.jpg/1280px-Peach_fruit_3.jpg",
    rating: 5.5
  }
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}!</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function App() {
  return (
    <div className="App">
      <h1>Hello!</h1>
      {foodILike.map(dish => 
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.images}
          rating={dish.rating}
        />
      )}
    </div>
  );
}

export default App;
