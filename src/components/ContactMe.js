import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  FormText,
  Row,
  Col,
  Alert,
} from "reactstrap";

class ContactMe extends Component {
  constructor() {
    super();
    this.state = {
      output: "",
      contactMe: false,
      firstName: null,
      lastName: null,
      email: null,
      phone: null,
      message: null,
      errors:{
          firstname: {
              text: "",
              bool: null,
              no: null
          },
          lastname:{
            text:"",
            bool: null,
            no: null,
          },
          email:{
            text:"",
            bool: null,
            no: null,
          },
          message:{
            text:"",
            bool:null,
            no: null,
          }
      }
     
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    
    switch(name){
        case 'from_Fname':
            errors.firstname.text = value.length < 2 ? "Please enter a valid first name" : '';
            errors.firstname.bool = value.length < 2 ?  false : true ;
            errors.firstname.no = value.length < 2 ?  true : false ;
        break;
        case 'from_Lname':
            errors.lastname.text = value.length < 2 ? "Please enter a valid last name" : '';
            errors.lastname.bool = value.length < 2 ?  false : true ;
            errors.lastname.no = value.length < 2 ?  true : false ;
        break;
        case 'from_email':
            
            errors.email.text = value.email < 1 ? "Please enter a valid email" : "";
            errors.email.bool = value.length < 1 ?  false : true ;
            errors.email.no = value.length < 1 ?  true : false ;
        break;
        case "from_message":
            errors.message.text = value.length < 5 ? "Please enter a message"  : "";
            errors.message.bool = value.length < 5 ?  false : true ;
            errors.message.no = value.length < 5 ?  true : false ;
        break;
        }
    this.setState({
      errors, [name]: value
    })
  }
  validate = () => {
      let errors = this.state.errors;

      console.log(errors.firstname.bool);
      if(errors.firstname.bool === true &&
        errors.lastname.bool === true &&
        errors.email.bool === true &&
        errors.message.bool === true){
          return(true)
      }
      else{
        return(false)
      }

  }
  handleSubmit(event){
    event.preventDefault();
    const template = 'contactme';

    var test = this.validate();
    
    if(test){
      window.emailjs.sendForm('default_service', template, event.target, 'user_cbxvGGF3GhPcWav3KSQTa')
      .then((result) => {
        this.setState({contactMe: true})
      }, (error) => {
          console.log(error.text);
      });
    }
    
  }


  render() {
    const {contactMe} = this.state;
    var mess = "";
    if(contactMe){
      mess = <Alert color='success'>Got your message! I will get back to you ASAP!</Alert>
    }
    return (
      
      <Container id="contact" className="my-5">
        <h2>Contact me here!</h2>
        <p className="text-muted">I'll be sure to respond back to you ASAP!</p>
        <Form onSubmit={this.handleSubmit} method="POST">
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="from_Fname">First Name</Label>
                <Input
                  type="text"
                  name="from_Fname"
                  id="from_Fname"
                  value={this.state.firstName}
                  placeholder="First Name"
                  onChange={this.handleChange}
                  valid={this.state.errors.firstname.bool}
                  invalid={this.state.errors.firstname.no}
                />
                {this.state.errors.firstname.text}
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="from_Lname">Last Name</Label>
                <Input
                  type="text"
                  name="from_Lname"
                  id="from_Lname"
                  value={this.state.lastName}
                  placeholder="Last Name"
                  onChange={this.handleChange}
                  valid={this.state.errors.lastname.bool}
                  invalid={this.state.errors.lastname.no}
                />
                {this.state.errors.lastname.text}
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="from_phone">Phone Number</Label>
                <Input
                  type="text"
                  name="from_phone"
                  id="from_phone"
                  value={this.state.phone}
                  placeholder="Phone Number"
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="from_email">Email</Label>
                <Input
                  type="email"
                  name="from_email"
                  id="from_email"
                  value={this.state.email}
                  placeholder="Email"
                  onChange={this.handleChange}
                  valid={this.state.errors.email.bool}
                  invalid={this.state.errors.email.no}
                />
                {this.state.errors.email.text}
              </FormGroup>
            </Col>
          </Row>

          <FormGroup>
            <Label for="from_message">Text Area</Label>
            <Input
              type="textarea"
              name="from_message"
              id="from_message"
              value={this.state.message}
              placeholder="Message"
              onChange={this.handleChange}
              valid={this.state.errors.message.bool}
              invalid={this.state.errors.message.no}
            />
            {this.state.errors.message.text}
          </FormGroup>

          <Button className='btn btn-success'>Submit</Button>
        </Form>
        {mess}
      </Container>
    );
  }
}
export default ContactMe;
