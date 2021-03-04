import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap';
import image from '../assets/Group 77.svg'

export default function CompleteModal({ handleClose, modalState }) {
    return (
        <Modal show={modalState === "modal-two"}>
            <Modal.Body>
                <div className="text-center p-5">
                    <img src={image} alt="complete" className="img-fluid" />

                    <h2 className="font-weight-bold mt-3">Thank you for  <br />
                    sharing your story!</h2>
                    <p style={{ color: '#4A4A4A', fontSize: '17px', marginBottom: '3rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Button onClick={handleClose} variant="orange">Close</Button>
                </div>
            </Modal.Body>
        </Modal>
    )
}
