import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardHeader,
  CardGroup,
  CardSubtitle,
  Button,
  UncontrolledCollapse,
  CardDeck,
  Container,
  Row,
  Col
} from "reactstrap";
import covid from "../assets/covid_site.jpg";
import music from "../assets/music_player_site.jpg";
import blog from "../assets/blog_site.jpg";
import javascript from '../assets/javascript_site.jpg';
class Projects extends Component {
  constructor() {
    super();
  }

  render() {
    return (
        <Container id='projects' className='my-5'>
            <h1>Projects</h1>
            <Row>
              <Col md='6' sm='6' lg='6'>
              <Card className='m-3'>
                <CardHeader>
                  <CardTitle>Api Project</CardTitle>
                  <CardSubtitle>Covid-19 Tracker</CardSubtitle>
                </CardHeader>
                <CardBody>
                  <CardImg width="100%" src={covid} alt="Covid-19 Project homepage screenshot from the website" />

                  <CardText>
                    Using an api to pull live data and displaying it for each
                    country.
                  </CardText>
                  <Button id='Covid_toggler'>
                  Details
                  </Button>
                  <UncontrolledCollapse toggler="#Covid_toggler" style={{ marginBottom: '1rem' }}>
                  <Card>
                    <CardBody>
                      <p>This project was created using Smartable.Ai COVID-19 API, in conjunction with google maps API and google charts API.</p>
                      <p>The API has some countries that have detailed information for each state or province but not for all. I took that data that was there for each state or province and added it to a marker since the API gave me cords for each location.</p>
                      <p>Next, for the graph, I used the APIs history data that records stats for each day and added that to the graph.</p>
                      <p>I also have changed this project to be a react app rather then a basic vanilla javascript application.</p>
                      <p>Lastly, I used bootstrap to style all the pages and make it look like a website and not just an assignment.</p>
                      <a href="../api-pro-v2.1" className='btn btn-primary'>View Project</a>
                    </CardBody>
                  </Card>
                </UncontrolledCollapse>
                </CardBody>
              </Card>
              </Col>
              <Col md='6' sm='6' lg='6'>
              <Card className='m-3'>
                <CardHeader>
                  <CardTitle>Music App</CardTitle>
                  <CardSubtitle>Music Player Application</CardSubtitle>
                </CardHeader>
                <CardImg top width="100%" src={music} alt="Music Player homepage screenshot" />
                <CardBody>
                  <CardText>
                    App that plays music and can show you the lyrics for the
                    songs.
                  </CardText>
                  <Button id='Music_toggler' style={{ marginBottom: '1rem' }}>
                  Details
                  </Button>
                  <UncontrolledCollapse toggler="#Music_toggler" >
                  <Card>
                    <CardBody>
                      <p>This project is a PHP project created by me and 3 other members in my group.</p>
                      <p>We created this project to showcase our skills in creating a php application.</p>
                      <p>I've created the section to give feedback to us. As well as a lyrics page that shows lyrics for a song and allows the admin to update lyrics and add for any songs.</p>
                      <p>This propject was created in a 12 week time including planning and all other documentation.</p>
                      <a href="../PhpGroupProject" className='btn btn-primary'>View Project</a>
                    </CardBody>
                  </Card>
                </UncontrolledCollapse>
                </CardBody>
              </Card>
              </Col>
              <Col md='6' sm='6' lg='6'>
              <Card className='m-3'>
                <CardHeader>
                  <CardTitle>Restaurants</CardTitle>
                  <CardSubtitle>Javascript project</CardSubtitle>
                </CardHeader>
                <CardImg top width="100%" src={javascript} alt="Javascript restaurant homepage screenshot" />
                <CardBody>
                  <CardText>
                    Resturant page for Jungle Food a made up restaurant
                  </CardText>
                  <Button id='Restaurant_toggler' style={{ marginBottom: '1rem' }}>
                  Details
                  </Button>
                  <UncontrolledCollapse toggler="#Restaurant_toggler" >
                  <Card>
                    <CardBody>
                      <p>This project is a HTML/CSS and JavaScript project.</p>
                      <p>My part in this project was to create a contest that the user can play and win something, but the trick was to make them lose!</p>
                      <p>I also completed a menu section that shows the meal of the day based on the day of the week, so Monday will be monday special.</p>
                      <a href="../JSGroupPro" className='btn btn-primary'>View Project</a>
                    </CardBody>
                  </Card>
                </UncontrolledCollapse>
                </CardBody>
              </Card>
              </Col>
              <Col md='6' sm='6' lg='6'>
              <Card className='m-3'>
                <CardHeader>
                  <CardTitle>Wordpress Site</CardTitle>
                  <CardSubtitle>Blog post for wordpress</CardSubtitle>
                </CardHeader>
                <CardImg top width="100%" src={blog} alt="Article on covid-19 and data" />
                <CardBody>
                  <CardText className="text-muted ">View my blog post that are just me typing what I am thinking</CardText>
                  <a href="../blog" className='btn btn-secondary'>View Blog</a>
                 
                </CardBody>
              </Card>
              </Col>
              
            </Row>
        </Container>
    );
  }
}
export default Projects;
