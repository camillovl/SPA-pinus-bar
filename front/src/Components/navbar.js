import React, { useState, useEffect } from "react";
import "../Styling/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [contadorItens, setContadorItens] = useState(0);

  useEffect(() => {
    const carrinhoAtual = JSON.parse(localStorage.getItem("carrinho")) || [];
    setContadorItens(carrinhoAtual.length);
  }, []);

  return (
    <nav className="nav">
      <ul>
        <li>
          <a href="/" className="mainpage_title">
            Pinus Bar
          </a>
        </li>
      </ul>
      <ul>
        <li className="active">
          <a href="/login">Log in</a>
        </li>
        <li className="active">
          <a href="/sacola" id="sacola">
            <FontAwesomeIcon icon={faShoppingBag} />
            <span className="contador-itens">{contadorItens}</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
