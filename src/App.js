import React from 'react';

const foodILike = [
  {
    id: 1,
    name: "Apple",
    images: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/800px-Apple_logo_black.svg.png",
  },
  {
    id: 2,
    name: "Banana",
    images: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/1020px-Banana-Single.jpg",
  },
  {
    id: 3,
    name: "Grape",
    images: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Wine_grapes03.jpg/800px-Wine_grapes03.jpg",
  },
  {
    id: 4,
    name: "Peach",
    images: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Peach_fruit_3.jpg/1280px-Peach_fruit_3.jpg",
  }
];

function Food({ name, picture }) {
  return (
    <div>
      <h1>I like {name}!</h1>
      <img src={picture} alt={name} />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Hello!</h1>
      {foodILike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.images} />)}
    </div>
  );
}

export default App;
