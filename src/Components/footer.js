import React from 'react'
import { Container, Row, Col, FormControl, InputGroup} from 'react-bootstrap';
import phone from '../assets/subscribe-banner 1.svg'
import facebook from '../assets/fb.svg'
import twitter from '../assets/tw.svg'
import linkedin from '../assets/in.svg'
import instagram from '../assets/ig.svg'

export default function footer() {
    return (
        <footer className="pt-3">
            <Container>
                <Row>
                    <Col sm="12" lg="7" md="7"  className="d-flex justify-content-center box1 ">
                        <img src={phone} alt="phone" className="img-fluid image-top" />
                    </Col>

                    <Col sm="12" lg="5" md="5" className="d-flex align-items-center text-white pb-5 box2">
                        <div>
                        <h2 className="heading">Be a  member <br/> of our community 🎉</h2>
                        <p className="text mt-3 mb-5">We’d make sure you’re always first to know what’s happening on Vasiti—thus, the world.</p>
                       
                        <InputGroup size="md" className="mb-3">
                            <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="enter your email address" />
                            <InputGroup.Append>
                            <InputGroup.Text id="inputGroup-sizing-sm">Subscribe</InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                        </div>
                    </Col>
                </Row>
                <Row className="pb-5 mt-5 text-white">
                    <Col sm="12" lg="4" md="4" > 
                        <Row>
                            <Col>
                                <ul style={{ listStyleType: "none" }}>
                                    <li><h6 className="font-weight-bold mb-4">Company</h6> </li>
                                    <li><a href="/">About us</a> </li>
                                    <li><a href="/">Terms of Use</a> </li>
                                    <li><a href="/">Privacy Policy</a> </li>
                                    <li><a href="/">Press & Media</a> </li>
                                </ul>
                            </Col>
                            <Col>
                                <ul style={{ listStyleType: "none" }}>
                                    <li><h6 className="font-weight-bold mb-4">Products</h6> </li>
                                    <li><a href="/">Marketplace</a> </li>
                                    <li><a href="/">Magazine</a> </li>
                                    <li><a href="/">Seller</a> </li>
                                    <li><a href="/">Wholesale</a> </li>
                                    <li><a href="/">Services</a> </li>    
                                </ul>
                            </Col>
                        </Row>
                    </Col>

                    <Col sm="12" lg="8" md="8">   
                        <Row>
                            <Col >
                                <ul style={{ listStyleType: "none" }}>
                                    <li><h6 className="font-weight-bold mb-4">Careers</h6> </li>
                                    <li><a href="/">Become a Campus Rep</a> </li>
                                    <li><a href="/">Become a Vasiti Influencer</a> </li>
                                    <li><a href="/">Become a Campus writer</a> </li>
                                    <li><a href="/">Become an Affiliate</a> </li> 
                                </ul>
                            </Col>
                            <Col >
                                <ul style={{ listStyleType: "none" }}>
                                    <li><h6 className="font-weight-bold mb-4">Get in touch</h6> </li>
                                    <li><a href="/">Contact us</a> </li>
                                    <li><a href="/">Partner with us</a> </li>
                                    <li><a href="/">Advertise with us</a> </li>
                                    <li><a href="/">Help/FAQs</a> </li>   
                                </ul>
                            </Col>
                            <Col sm="12" lg="4" md="4">

                            <ul style={{ listStyleType: "none" }}>
                                    <li><h6 className="font-weight-bold mb-4">Join our community</h6> </li>
                                    <li><a href="/">
                                    <img src={facebook} alt="facebook" className="img-fluid mr-2" />
                                <img src={instagram} alt="instagram" className="img-fluid mr-2" />
                                <img src={twitter} alt="twitter" className="img-fluid mr-2" />
                                <img src={linkedin} alt="linkedin" className="img-fluid" />
                                        </a> </li>
                                    <li><a href="/"><h6 className=" pt-4">Email Newsletter</h6></a> </li>
                                </ul>


                               
                                

                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
