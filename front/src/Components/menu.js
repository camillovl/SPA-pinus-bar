import React, { useState, useEffect } from 'react';
import '../Styling/menu.css';

const Menu = () => {
  const [cardapio, setCardapio] = useState([]);

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

  return (
    <div className='menu-container'>
      {cardapio.map((item) => (
        <div key={item.id} className='item_cardapio'>
          <img className='item_cardapio_image' src={item.img} alt={item.nome}></img>
          <div className='item_cardapio__text-container'>
            <div className='item_cardapio__price-and-title'>
              <h3>{item.nome}</h3>
              <span>{item.preco}</span>
            </div>
            <p className='item_cardapio_descricao'>{item.descricao}</p>
            <button className="item_cardapio_button"onClick={() => adicionarAoCarrinho(item)}>Adicionar ao Carrinho</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
