import React ,{ useState, useEffect } from 'react';
import '../Styling/menu.css';
import { Container, Row, Col } from 'react-grid-system'


/*
Definimos também as propriedades md={4}, sm={6} e xs={12}
para especificar como as colunas devem se comportar em diferentes
tamanhos de tela. No exemplo acima, em telas médias (md),
serão exibidas 4 colunas por linha, em telas pequenas (sm),
serão exibidas 6 colunas por linha, e em telas extra pequenas (xs),
será exibida uma coluna por linha.

*/

function Menu() {
    const [cardapio, setCardapio] = useState([]);

	useEffect(function () {
		async function getData() {
			const response = await fetch("http://localhost:5555/cardapio");
			const cardapioServidor = await response.json();
			setCardapio(cardapioServidor);
		}
		getData();
	}, []);
    return (
            <Container className='container'>
                <Row>
                    {cardapio.map((item) => (
                        <Col key={item.id} md={3} sm={6} xs={9}>
                            <div className="item_cardapio">
                                <img className='item_cardapio_image' src={item.img} alt={item.nome}></img>                               
                                <div className="item_cardapio__text-container">
                                    <div className="item_cardapio__price-and-title">
                                        <h3>{item.nome}</h3>
                                        <span>{item.preco}</span>
                                    </div>
                                    <p className='item_cardapio_descricao'>{item.descricao}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
    );
}

export default Menu;
