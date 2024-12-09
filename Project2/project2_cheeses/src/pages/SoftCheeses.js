import React, { useState } from "react";
import Card from "../components/Card";
import ModalWindow from "../components/ModalWindow";
import { Link } from "react-router-dom";

const SoftCheeses = () => {
  const [selectedCheese, setSelectedCheese] = useState(null);
  const cheeses = [
    { title: "Brie", image: "brie.jpg", description: "creamy texture and rich, buttery flavor" },
    { title: "Ricotta", image: "ricotta.jpg", description: "Ricotta is known for its mild, slightly sweet flavor, making it versatile for both savory and sweet dishes." },
    { title: "Camembert", image: "camembert.jpg", description: "rich, buttery taste that can develop stronger, more complex notes as it ages." }
  ];

  return (
    <div>
      <h1>Soft Cheeses</h1>
      <p>Enjoy the creaminess of soft cheeses.</p>
      <div className="card-container">
        {cheeses.map((cheese, index) => (
          <Card
            key={index}
            title={cheese.title}
            image={`/${cheese.image}`} 
            description={cheese.description}
            onOpenModal={() => setSelectedCheese(cheese)}
          />
        ))}
      </div>
      {selectedCheese && (
        <ModalWindow
          title={selectedCheese.title}
          image={`/${selectedCheese.image}`}
          description={selectedCheese.description}
          onClose={() => setSelectedCheese(null)}
        />
      )}
    </div>
  );
};

<nav>
      <Link to="/soft-cheeses">Soft Cheeses</Link>
      <Link to="/hard-cheeses">Hard Cheeses</Link>
      <Link to="/blue-cheeses">Blue Cheeses</Link>
    </nav>


export default SoftCheeses;




