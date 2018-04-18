import React, { Component } from 'react'; 
import { Col, Button, Form, FormGroup, Label, Input, Collapse } from 'reactstrap'; 
// eslint-disable-next-line
import styles from '../../style/Form.css';
import yearItems from './Years.jsx'

export class AlbumForm extends Component {

  constructor(props) {
    super(props)
    this.state = {start_year: 1954, end_year: 2018, tracks: 0, collapse: false}; 
    this.filter = this.filter.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  filter(params) {
    let start_year = undefined; 
    if (this.state.start !== "") {
      start_year = this.state.start; 
    }
    let end_year = undefined; 
    if (this.state.end !== "") {
      end_year = this.state.end;
    }
    let num_tracks = undefined;
    if (this.state.track !== "") {
      num_tracks = this.state.track; 
    }
    const { stateService } = this.props.transition.router;
    stateService.go('^.home', {limit: 12, offset: 0, filters: {start_year: start_year, end_year: end_year, num_tracks: num_tracks}});
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render () {
    const years = yearItems.map((item) => {
      return (
        <option value={item}>{item}</option>
      );
    });

    return (
      <div>
        <Button color="info" onClick={this.toggle} style={{ marginBottom: '1rem', marginLeft: '1rem' }}>Filter</Button>
        <Collapse isOpen={this.state.collapse}>
          <Form inline className="filtering-form">
            <FormGroup row>
              <Col sm={6}>
                <Label for="start">Release Year</Label>
                <Input type="select" name="start" id="start" onChange={(e) => (this.setState({start: e.target.value}))}>
                  <option value="">Any</option>
                  {years}
                </Input>
                {' '}
                <Input type="select" name="end" id="end" onChange={(e) => (this.setState({end: e.target.value}))}>
                  <option value="">Any</option>
                  {years}
                </Input>
              </Col>
              <Col sm={6}>
                <Label className="form-label" for="track">Number of Tracks</Label>
                <Input type="number" name="track" id="track" placeholder="value" onChange={(e) => (this.setState({track: e.target.value}))}/>
              </Col>
            </FormGroup>
            <FormGroup check>
              <Col sm={3}>
                <Button onClick={this.filter}>Submit</Button>
              </Col>
            </FormGroup>
          </Form>
        </Collapse>
      </div>
    );
  }
} 