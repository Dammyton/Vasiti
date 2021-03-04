import React, {useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import line from '../assets/Vector 3.svg'
import image from '../assets/woman-shoppingbag-card 1.png'
import  TestimonyModal from './testimonyModal'

export default function Sharestory2() {
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
        <div className="pt-5" style={{ backgroundColor: '#FFF8F5' }}>
            <Container>
                    <TestimonyModal handleShowCompleted={handleShowCompleted} handleClose={handleClose} modalState={modalState}/>
                <Row>
                    <Col sm="12" lg="5" md="5" className="d-flex align-items-center text-dark pb-5 box1">
                        <div>
                            <h3 className="mb-3 heading">Josiah’s Experience</h3>
                            <span style={{border: '1px solid #FF5C00',borderRadius: '5px'}} className="p-2 text-orange" >VENDOR</span>
                            <p className="mt-4 text">I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!</p>
                            <button className="btn text-orange pb-0" type="button" onClick={handleShowTestimony}>SHARE YOUR OWN STORY!</button> <br/>
                            <img src={line} alt="pinklady" className="img-fluid" />
                      </div>
                    </Col>
                    <Col sm="12" lg="7" md="7" className="pink-img box2" >
                    <img src={image} alt="pinklady" className="img-fluid" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
