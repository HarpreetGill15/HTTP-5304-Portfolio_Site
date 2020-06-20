import React, { Component } from 'react';
import SmallLogo from '../assets/small-logo.png';
class Footer extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <footer className='bg-light'>
                <div className='text-center'>
                <img src={SmallLogo} className='img-fluid mx-auto' alt="Small logo for Harpreet Gill's Website" width='95px' height="95px"/>
                </div>
                
                <div className='text-center py-3'>
                    2020 Harpreet Gill 
                </div>
            </footer>
        )
    }
}

export default Footer;