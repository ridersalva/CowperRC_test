import React from 'react'
import { Container,Image } from 'react-bootstrap'
import Contact_Form from '../components/Contact_Form/Contact_Form'
import './Contact.css'
import contactPic from './Pictures/IMG_3118.jpg'

function Contact() {
  return (
    <>
      <Container className='contactF'>
        <Contact_Form />
        <Image src={contactPic} className='contactPic'/>
      </Container>
    </>
  )
}

export default Contact