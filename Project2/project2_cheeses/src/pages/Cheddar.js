import React, { useState } from 'react';
import Card from '../Card'; // Ensure this path is correct
import ModalWindow from '../ModalWindow';

const dishes = [
  { title: 'Cheddar Mac & Cheese', image: 'mac.jpg', description: 'A creamy mac and cheese made with sharp cheddar.' },
  { title: 'Cheddar Grilled Cheese', image: 'grilled.jpg', description: 'A crispy grilled cheese sandwich with melted cheddar.' },
  { title: 'Cheddar Nachos', image: 'nachos.jpg', description: 'Nachos loaded with melted cheddar and toppings.' },
];

function Cheddar() {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (dish) => setModalContent(dish);
  const closeModal = () => setModalContent(null);

  return (
    <div>
      <h1>Cheddar Dishes</h1>
      <p>Explore dishes made with cheddar cheese.</p>
      <div className="card-container">
        {dishes.map((dish, index) => (
          <Card
            key={index}
            image={dish.image}
            title={dish.title}
            onLearnMore={() => openModal(dish)}
          />
        ))}
      </div>
      {modalContent && (
        <ModalWindow
          title={modalContent.title}
          image={modalContent.image}
          description={modalContent.description}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default Cheddar;