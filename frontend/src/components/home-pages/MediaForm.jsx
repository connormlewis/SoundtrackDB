import React, { Component } from 'react'; 
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
// eslint-disable-next-line
import styles from '../../style/Form.css'; 

export class MediaForm extends Component {

  constructor(props) {
    super(props)
    this.state = {start_year: 0, end_year: 2018}; 
    this.filter = this.filter.bind(this);
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

  render () {
    return (
      <Form className="filtering-form">
        <legend>Type</legend>
        <FormGroup check>
          <Col sm={{ size: 20}}>
            <Label check>
              <Input type="checkbox" defaultChecked={this.state.movie} onChange={(e) => (this.setState({movie: !e.target.value}))}/>{' '}
              Movie
            </Label>
          </Col>
          <Col sm={{ size: 20}}>
            <Label check>
              <Input type="checkbox" onChange={(e) => (this.setState({tv_show: !e.target.value}))}/>{' '}
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
              <Input type="checkbox" onChange={(e) => (this.setState({running: !e.target.value}))}/>{' '}
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