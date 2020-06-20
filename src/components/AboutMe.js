import React, { Component } from 'react';
import {Jumbotron, Row, Col, Badge} from 'reactstrap';
import mypic from '../assets/website-pic.jpg';
import { Wave } from 'react-animated-text';
class AboutMe extends Component{
    constructor(){
        super()
    }


    render(){
        return(
        <div id='about'>
            <Jumbotron>
                        <div className='about-text-con'>
                            <div className='about-text '>
                                <h2 className='text-focus-in name'>Harpreet Gill</h2>
                                <p className='lead'>Jr Web Developer</p>
                            </div>
                            
                        </div>
                    
            
                
            </Jumbotron>
            
        </div>
        )
        
    }
}

export default AboutMe;