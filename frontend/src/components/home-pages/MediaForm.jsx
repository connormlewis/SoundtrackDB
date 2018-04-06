import React, { Component } from 'react'; 
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
// eslint-disable-next-line
import styles from '../../style/Form.css'; 

export class MediaForm extends Component {

  constructor(props) {
    super(props)
    this.state = {movie: false, tv_show: false, start_year: 0, end_year: 2018, running: false}; 
    this.filter = this.filter.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  filter(params) {
    let filters = {}; 
    if(this.state.movie && !this.state.tv_show) {
      filters['type'] = 'movie';
    }
    else if(this.state.tv_show && !this.state.movie) {
      filters['type'] = 'tv show'; 
    }
    filters['start_year'] = this.state.start; 
    filters['end_year'] = this.state.end;
    if (this.state.running) {
      filters['running'] = "true"; 
    }
    const { stateService } = this.props.transition.router;
    stateService.go('^.home', {limit: 12, offset: 0, filters: filters});
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render () {
    return (
      <Form className="filtering-form">
        <legend>Type</legend>
        <FormGroup check>
          <Col sm={{ size: 20}}>
            <Label check>
              <input name="movie" type="checkbox" checked={this.state.movie} onChange={this.handleInputChange}/>{' '}
              Movie
            </Label>
          </Col>
          <Col sm={{ size: 20}}>
            <Label check>
              <input name="tv_show" type="checkbox" checked={this.state.tv_show} onChange={this.handleInputChange}/>{' '}
              TV Show
            </Label>
          </Col>
        </FormGroup>
        <legend>Release Year</legend>
        <FormGroup row>
          <Col sm={5}>
            <Label for="start" sm={10}>Start Year</Label>
            <Input type="number" name="start" id="start" onChange={(e) => (this.setState({start: e.target.value}))}/>
          </Col>
          <Col sm={5}>
            <Label for="end" sm={10}>End Year</Label>
            <Input type="number" name="end" id="end" onChange={(e) => (this.setState({end: e.target.value}))}/>
          </Col>
        </FormGroup>
        <FormGroup check>
          <Col sm={{ size: 20}}>
            <Label check>
              <input name="running" type="checkbox" checked={this.state.running} onChange={this.handleInputChange}/>{' '}
              Currently Running Series
            </Label>
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