import React from 'react';
import './Foot.css';
import { Row, Col, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SquareF from './SquareF';
import Insta_logo from './instalogo_white.png';
import Face_logo from './face_logo.png';

function Foot() {

    return (
        <>
            <Container className='foot' fixed="botton">
                <Row className='footElements'>
                    <Col xs={3}>
                        <Row className='social_Logo'>
                            <Col xs={3}>
                                <Image  src={Insta_logo} />
                            </Col>
                            <Col xs={3}>
                                <Image src={Face_logo} />
                            </Col>
                        </Row>
                    </Col>
                    <Col flex xs={6} className='footEleMed'>
                        <h3>Buscanos en Nuestras redes sociales o</h3>
                        <h4>mandanos tus dudas ne la seccion de contacto</h4>
                    </Col>
                    <Col xs={3}>
                        <p></p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Foot