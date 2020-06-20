import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Container } from 'reactstrap';

class SocialMedia extends Component{
    constructor(){
        super();
    }


    render(){
        return(
        <Container id='social' className="my-5">
            <h1>Social Media</h1>
            <p>Find me on these platforms!</p>
            <Container>
                <ListGroup horizontal className='mx-auto'>
                    <ListGroupItem tag="a" target='_blank' href="https://www.linkedin.com/in/harpreet-gill-20758b161/">Linkedin</ListGroupItem>
                    <ListGroupItem tag="a" target='_blank' href="https://github.com/HarpreetGill15">GitHub</ListGroupItem>
                </ListGroup>
            </Container>
        </Container>
        )
        
    }
}
export default SocialMedia