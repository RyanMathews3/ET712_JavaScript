import React, { useState } from 'react';
import Card from '../Card'; '../Card';
import ModalWindow from '../ModalWindow';


// Dishes data for Brie cheese
const dishes = [
  { title: 'Brie & Bacon Sandwich', image: '/images/brie-bacon.jpg', description: 'A savory sandwich with melted brie and crispy bacon.' },
  { title: 'Brie Stuffed Chicken', image: '/images/brie-chicken.jpg', description: 'Juicy chicken breasts stuffed with creamy brie cheese.' },
  { title: 'Brie & Pear Salad', image: '/images/brie-pear.jpg', description: 'A fresh salad with brie, pears, and walnuts.' },
];

function Brie() {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (dish) => setModalContent(dish);
  const closeModal = () => setModalContent(null);

  return (
    <div>
      <h1>Brie Dishes</h1>
      <p>Explore dishes made with brie cheese.</p>

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

export default Brie;
