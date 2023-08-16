import React from 'react';
import { Button, Image, Container } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Pages.css';
import buzo from './Pictures/buzo.png';
import mainImage from './Pictures/_DSC0114.jpg'
import Imagenes_home from '../components/Carousel/Imagenes_home';



function HomePage() {
  return (
    <>
      <Image src={mainImage} className='headImg' />
      <Container className='home'>
        
        <h1>Bienvenido al Cowper RC</h1>
        <hr />
        <h4>
        El Cowper RC, es un equipo de rugby fundado en Oviedo en 1987.
        </h4>
        <hr/>
        <h1>Información</h1>
        <div className='buttonGroup'>
          <Button className='homebutt'><Link to='/scuba'><Image src={buzo} /></Link></Button>
        </div>
       
      </Container>
    </>
  )
}

export default HomePage