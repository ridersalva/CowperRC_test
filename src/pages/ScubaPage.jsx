import React from 'react';
import './Scuba.css';
import { Container, Image, Carousel, Row, Col } from 'react-bootstrap';
import ScubaH from './Pictures/cabcera buzo.png';
import Scuba_carousel from '../components/Carousel/Scuba_carousel';
import cOliva from './Pictures/Scuba_content/camiseta buzo oliva.png';
import cAzul from './Pictures/Scuba_content/camiseta buzo azul.png';
import cBlanco from './Pictures/Scuba_content/camiseta buzo blanco.png';
import sAzul from './Pictures/Scuba_content/sudadera capucha buzo azul.png';
import sBlanco from './Pictures/Scuba_content/sudadera capucha buzo blanco.png';

function ScubaPage() {
    return (
        <>
            <Image className='headerScuba' src={ScubaH} />
            <Container className='pageScuba'>
                <Scuba_carousel />
            </Container>
            <Container>
                <Row className='cScubaModels'>
                    <Col flex xs={4}>
                        <Image src={cAzul} />
                    </Col>
                    <Col flex xs={4}>
                        <Image src={cBlanco} />
                    </Col>
                    <Col xs={4}>
                        <Image src={cOliva} />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className='sScubaModels'>
                    <Col flex xs={6}>
                        <Image src={sAzul} />
                    </Col>
                    <Col flex xs={6}>
                        <Image src={sBlanco} />
                    </Col>

                </Row>
            </Container>
        </>
    )
}

export default ScubaPage