import React from 'react'
import Girl from './girl.jpg'
import Dp from './dp.jpg'
import Card from 'react-bootstrap/Card'
import './LiveChat.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
function LiveChat() {
    return (
        <div>
            <Card border="light" style={{ width: '29rem' }}>
                <Card.Header><img src={Girl} className="img2 mr-2"/> Nika Jerrardo</Card.Header>
                <Card.Body>
                <Card.Text>
                <img src={Girl} className="img3 mr-2"/>Hey!<br/>
                <div className="mt-3"><img src={Girl} className="img3 mr-2 "/>Can You Please send me yesterday's Homework?</div><br/><br/>
                <div className="mydiv mt-3 ml-4">Ok! is there anything else you want? Feel free <img src={Dp} className="img3 ml-3"/></div>
                <br/><br/><br/><br/>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <div className="row m-0"><Form.Control as="textarea" className="text" rows={3} />  <input type="submit" value="Send" className="button2" /></div>
                </Form.Group>
                </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default LiveChat
