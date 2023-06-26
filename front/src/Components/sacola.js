import React, { useState, useEffect } from 'react';
import '../Styling/sacola.css';

const Sacola = () => {
  const [itensCarrinho, setItensCarrinho] = useState([]);

  useEffect(() => {
    const carrinhoAtual = JSON.parse(localStorage.getItem('carrinho')) || [];
    setItensCarrinho(carrinhoAtual);
  }, []);

  const handleDeleteItem = (id) => {
    const novoCarrinho = itensCarrinho.filter((item) => item.id !== id);
    setItensCarrinho(novoCarrinho);
    localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
  };

  const handleEditItem = (id) => {
    // Implemente a lógica para editar o item com base nos itens do cardápio
    // Pode ser exibido um formulário modal para editar as propriedades do item
    console.log(`Editar item com ID: ${id}`);
  };

  return (
    <main className='container'>
      <h1 className="sacola__titulo">Sacola</h1>
      {itensCarrinho.length > 0 ? (
        <ul className="sacola__itens">
          {itensCarrinho.map((item) => (
            <li className="sacola__item" key={item.id}>
              <img className="sacola__item__imagem" src={item.img} alt={item.nome} />
              <div className="sacola__item__info">
                <h3 className="sacola__item__nome">{item.nome}</h3>
                <span className="sacola__item__preco">R$ {item.preco}</span>
              </div>
              <div className="sacola__item__acoes">
                <button className="sacola__item__acao-remover" onClick={() => handleDeleteItem(item.id)}>
                  Remover
                </button>
                <button className="sacola__item__acao-editar" onClick={() => handleEditItem(item.id)}>
                  Editar
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <h3 className="sacola__mensagem">Nenhum item adicionado ao carrinho</h3>
      )}
    </main>
  );
};

export default Sacola;
