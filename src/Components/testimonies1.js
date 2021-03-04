import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import {firstSection} from './common/testimonies'

export default function Testimonies1() {
    return (
        <Container className="pt-5 pb-5 mt-3 mb-3">
            <Row>
            {firstSection.map( person => { 
                return( 
                <Col sm="12" lg="4" md="4" className="mb-2" key={person.name}>
                    <img src={person.image} alt="person" className="img-fluid" />
                    <h4 className="name mt-3">{person.name}</h4>
                    <span className="location mr-3">{person.location} </span>    
                    <span className={person.label === "VENDOR" ? 'olabel' : 'label'}>{person.label}</span>
                    <p className="testimony mt-3">{person.testimony}</p>
                </Col>
                )}
              )
            }
            </Row>   
        </Container>
    )
}
