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
    let start_year = this.state.start;
    let end_year = this.state.end;
    let num_tracks = this.state.track;
    const { stateService } = this.props.transition.router;
    stateService.go('^.home', {limit: 12, offset: 0, filters: {start_year: start_year, end_year: end_year, num_tracks: num_tracks}});
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render () {
    const years = yearItems.map((item) => {
      return (
        <option>{item}</option>
      );
    });

    return (
      <div>
        <Button color="info" onClick={this.toggle} style={{ marginBottom: '1rem', marginLeft: '1rem' }}>Filter</Button>
        <Collapse isOpen={this.state.collapse}>
          <Form className="filtering-form">
            <legend style={{marginBottom: "0px"}}>Release Date</legend>
            <FormGroup row>
              <Col sm={6}>
                <Label for="start" sm={10}>Start Year</Label>
                <Input type="select" name="start" id="start" onChange={(e) => (this.setState({start: e.target.value}))}>
                  {years}
                </Input>
              </Col>
              <Col sm={6}>
                <Label for="end" sm={10}>End Year</Label>
                <Input type="select" name="end" id="end" onChange={(e) => (this.setState({end: e.target.value}))} defaultValue={2018}>
                  {years}
                </Input>
              </Col>
            </FormGroup>
            <legend>Number of Tracks</legend>
            <FormGroup row>
                <Label className="form-label" for="track" sm={2}>Min</Label>
                <Col sm={4}>
                  <Input type="number" name="track" id="track" onChange={(e) => (this.setState({track: e.target.value}))}/>
                </Col>
            </FormGroup>
            <FormGroup check row>
              <Col sm={{ size: 10 }}>
                <Button onClick={this.filter}>Submit</Button>
              </Col>
            </FormGroup>
          </Form>
        </Collapse>
      </div>
    );
  }
} 