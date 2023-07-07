import React, { useState, useEffect } from 'react';
import '../Styling/menu.css';
import '../Styling/modal.css';
import Modal from 'react-modal';

const Menu = () => {
  const [cardapio, setCardapio] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    async function getData() {
      const response = await fetch('http://localhost:5555/cardapio');
      const cardapioServidor = await response.json();
      setCardapio(cardapioServidor);
    }
    getData();
  }, []);

  const adicionarAoCarrinho = (item) => {
    const carrinhoAtual = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinhoAtual.push(item);
    localStorage.setItem('carrinho', JSON.stringify(carrinhoAtual));
  };

  const openModal = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setModalOpen(false);
  };

  return (
    <div className='menu-container'>
      {cardapio.map((item) => (
        <div key={item.id} className='item_cardapio' onClick={() => openModal(item)}>
          <img className='item_cardapio_image' src={item.img} alt={item.nome} />
        <div className='item_cardapio_text_container'>
          <div className='item_cardapio_title'>
            <h3>{item.nome}</h3>
          </div>
        </div>
        </div>
      ))}
      <Modal className='custom-modal' isOpen={modalOpen} onRequestClose={closeModal}>
        {selectedItem && (
          <div className='modal-content'>
            <img className='modal-image' src={selectedItem.img} alt={selectedItem.nome} />
            <h3 className='modal-nome'>{selectedItem.nome}</h3>            
            <p className='modal-description'>{selectedItem.descricao}</p>
            <div className='modal-price-and-button-container'>              
              <button className='modal-button' onClick={() => adicionarAoCarrinho(selectedItem)}>Adicionar ao Carrinho</button>
              <span className='modal-price'>{selectedItem.preco}</span>
            </div>
            
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Menu;
