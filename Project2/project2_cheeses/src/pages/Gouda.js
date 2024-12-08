import React, { useState } from 'react';
import Card from '../Card';
import ModalWindow from '../ModalWindow';


// Dishes data for Gouda cheese
const dishes = [
  { title: 'Gouda Mac & Cheese', image: '/images/gouda-mac.jpg', description: 'A creamy mac and cheese made with mild gouda cheese.' },
  { title: 'Gouda Grilled Cheese', image: '/images/gouda-grilled.jpg', description: 'A crispy grilled sandwich filled with melted gouda.' },
  { title: 'Gouda Pizza', image: '/images/gouda-pizza.jpg', description: 'A pizza topped with gooey melted gouda cheese.' },
];

function Gouda() {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (dish) => setModalContent(dish);
  const closeModal = () => setModalContent(null);

  return (
    <div>
      <h1>Gouda Dishes</h1>
      <p>Explore dishes made with gouda cheese.</p>

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

export default Gouda;
