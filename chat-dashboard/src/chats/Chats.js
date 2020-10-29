import React from 'react'
import './Chats.css'
import * as BiIcons from 'react-icons/bi'
import {Link} from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import CThreads from './CThreads'
import Card from 'react-bootstrap/Card'
import Girl from'./girl.jpg'
import Girl2 from'./man.jpg'

function Chats() {
    return (
        <>
            <div className="para2">
                <div className="row1">
                    <h1 className="row2">Chats</h1>
                    <Button className="row2 btn" style={{marginLeft: "25%"}}>Create New Chat</Button>
                </div>
                <Link className="para3">Recent Chats <BiIcons.BiChevronDown className="down2"/></Link>
            </div>
            <br/>
            <div className="row m-0">
                <input className="search" type="text" placeholder="    Search"/><div className="append"> <p className="ml-4 mt-2">Message  <BiIcons.BiChevronDown className="mb-1"/></p></div>
            </div>
            <br/><br/>
            <div>
                { 
                    CThreads.map((item,index) =>{
                        return(
                            <Card style={{ width: '535px' }} className="card" key={item.index} >
                                <Card.Body className="body"><div className="row">
                                    <img src={Girl} className="img2"/>
                                    <Card.Title className="name">{item.name}</Card.Title>
                                    <Card.Subtitle className="time">{item.time}</Card.Subtitle></div>
                                    <Card.Text className="message">
                                    {item.message}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Chats
