import React, { Component } from 'react'; 
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
// eslint-disable-next-line
import styles from '../../style/Form.css'; 

export class ArtistForm extends Component {

  constructor(props) {
    super(props)
    this.state = {min_followers: 0, max_followers: 2018}; 
    this.filter = this.filter.bind(this);
  }

  filter(params) {
    let min_followers = this.state.min; 
    let max_followers = this.state.max; 
    const { stateService } = this.props.transition.router;
    stateService.go('^.home', {limit: 12, offset: 0, filters: {min_followers: min_followers, max_followers: max_followers}});
  }

  render () {
    return (
      <Form className="filtering-form">
        <h5>Number of Spotify Followers</h5>
        <FormGroup row>
          <Col sm={5}>
            <Label for="min" sm={10}>Min</Label>
            <Input type="number" name="min" id="min" onChange={(e) => (this.setState({min: e.target.value}))}/>
          </Col>
          <Col sm={5}>
            <Label for="max" sm={10}>Max</Label>
            <Input type="number" name="max" id="max" onChange={(e) => (this.setState({max: e.target.value}))}/>
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10 }}>
            <Button onClick={this.filter}>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
} 