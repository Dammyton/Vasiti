import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import line from '../assets/Vector 3.svg'
import  TestimonyModal from './testimonyModal'
import image from '../assets/Group 89.png'

export default function Sharestory1() {
    const [modalState, setModalState] = useState( "modal-one" | "modal-two" | "close" )
        
        const handleShowTestimony = () => {
         setModalState("modal-one")
        }
        
        const handleShowCompleted = () => {
            setModalState("modal-two")
        }
        
        const handleClose = () => {
            setModalState("close")
        }

    return (
        <div className="pt-5" style={{ backgroundColor: '#222' }}>
            <Container>
                    <TestimonyModal handleShowCompleted={handleShowCompleted} handleClose={handleClose} modalState={modalState}/>
                <Row>
                    <Col sm="12" lg="7" md="7" className="box1" >
                        {/* background imag hane */}
                        <img src={image} alt="shoppingbag" className="img-fluid" />
                    </Col>
                    <Col sm="12" lg="5" md="5" className="d-flex align-items-center box2 text-white pb-5">
                        <div>
                            <h2 className="mb-3 font-weight-bolder">Tolu & Joy’s Experience</h2>
                            <span style={{border: '1px solid #fff',borderRadius: '5px'}} className="p-2" >CUSTOMER</span>
                            <p className="mt-4 text">I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!</p>
                            <button className="btn text-white pb-0" type="button" onClick={handleShowTestimony}>SHARE YOUR OWN STORY!</button> <br/>
                            <img src={line} alt="darklady" className="img-fluid" />
                      </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
