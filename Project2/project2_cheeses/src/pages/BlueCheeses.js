import React, { useState } from "react";

import Card from "../components/Card";

import ModalWindow from "../components/ModalWindow";



const BlueCheeses = () => {

  const [selectedCheese, setSelectedCheese] = useState(null);

  const cheeses = [

    { title: "Roquefort", image: "Roquefort.jpg", description: "strong flavor and creamy texture" },

    { title: "Stilton", image: "Stilton.jpg", description: "milder and creamier, often enjoyed as a dessert cheese " },

    { title: "Gorgonzola", image: "gorgonzola.jpg", description: "can range from mild to sharp in flavor, depending on its age, and is characterized by its creamy texture and blue-green marbling" },

  ];



  return (

    <div>

      <h1>Blue Cheeses</h1>

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



export default BlueCheeses;



