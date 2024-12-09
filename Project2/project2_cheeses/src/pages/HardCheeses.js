import React, { useState } from "react";

import Card from "../components/Card";

import ModalWindow from "../components/ModalWindow";
import { Link } from "react-router-dom";



const HardCheeses = () => {

  const [selectedCheese, setSelectedCheese] = useState(null);

  const cheeses = [

    { title: "Cheddar", image: "cheddar.jpg", description: "rich, creamy flavor and firm texture, which can range from mild to sharp" },

    { title: "Gouda", image: "gouda.jpg", description: "a rich, creamy flavor that can range from mildly sweet and buttery" },

    { title: "Parmesan", image: "parm.jpg", description: " celebrated for its rich, savory flavor and versatility in cooking." },

  ];

<nav>
      <Link to="/soft-cheeses">Soft Cheeses</Link>
      <Link to="/hard-cheeses">Hard Cheeses</Link>
      <Link to="/blue-cheeses">Blue Cheeses</Link>
    </nav>

  return (

    <div>

      <h1>Hard Cheeses</h1>

      <p>Explore the world of soft cheeses, known for their creamy texture.</p>

      <div className="card-container">

        {cheeses.map((cheese, index) => (

          <Card

            key={index}

            title={cheese.title}

            image={cheese.image}

            description={cheese.description}

            onOpenModal={() => setSelectedCheese(cheese)}

          />

        ))}

      </div>

      {selectedCheese && (

        <ModalWindow

          title={selectedCheese.title}

          image={selectedCheese.image}

          description={selectedCheese.description}

          onClose={() => setSelectedCheese(null)}

        />

      )}

    </div>

  );

};



export default HardCheeses;



