import React from 'react';
import './menu.css';
import {Container, Row, Col} from 'react-grid-system'
import cardapio from './data';

/*
Definimos também as propriedades md={4}, sm={6} e xs={12}
para especificar como as colunas devem se comportar em diferentes
tamanhos de tela. No exemplo acima, em telas médias (md),
serão exibidas 4 colunas por linha, em telas pequenas (sm),
serão exibidas 6 colunas por linha, e em telas extra pequenas (xs),
será exibida uma coluna por linha.

*/
function Menu() {
  return (
    <div className='container'>        
        <Container className='container_div'>
        <Row className='row_div'>
            {cardapio.map((item) => (
            <Col key={item.id} md={3} sm={6} xs={9}>
                <div className='item_cardapio'>
                    <img className='plate_img' src={item.img} alt={item.nome} />
                    <h3 className='plate_name'>{item.nome}</h3>                
                    
                <div className='price_and_title'>
                    <button className='button' type='button'>
                        Adicione ao carrinho
                    </button>
                    <span className='price_text_'>Preço: R$ {item.preco}</span>
                <p className='plate_description'>{item.descricao}</p>
                </div>
                </div>
            </Col>
            ))}
        </Row>
        </Container>
    </div>
  );
}

export default Menu;
