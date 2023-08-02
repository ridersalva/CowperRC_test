import React from 'react';
import { Button, Image, Container } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Pages.css';
import mons from './Pictures/mons web.png';
import buzo from './Pictures/buzo.png';
import hook from './Pictures/Hook web.png';
import extreme from './Pictures/wheel.png';
import mainImage from './Pictures/_DSC0114.jpg'
import Imagenes_home from '../components/Carousel/Imagenes_home';



function HomePage() {
  return (
    <>
      <Image src={mainImage} className='headImg' />
      <Container className='home'>
        
        <h1>Bienvenido al mundo de Reaperseries co.</h1>
        <hr />
        <h4>
          Nuestros productos estan hechos a mano por nuestro equipo así que cada sudadera es casi irrepetible
        </h4>
        <hr/>

        <h1>COLECCIONES</h1>
        <div className='buttonGroup'>
          <Button className='homebutt' ><Link to='/mons'><Image src={mons} /></Link></Button>
          <Button className='homebutt'><Link to='/hook'><Image src={hook} /></Link></Button>
          <Button className='homebutt'><Link to='/extreme'><Image src={extreme} /></Link></Button>
          <Button className='homebutt'><Link to='/scuba'><Image src={buzo} /></Link></Button>
        </div>
       
      </Container>
    </>
  )
}

export default HomePage