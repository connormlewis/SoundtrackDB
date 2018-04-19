import React, { Component } from 'react'; 
import { Col, Button, Form, FormGroup, Label, Input, Collapse, FormFeedback} from 'reactstrap'; 
// eslint-disable-next-line
import styles from '../../../style/Form.css';
import yearItems from './selections/Years.jsx';

const resetState = {
  start_year: 1954, end_year: 2018, track: "", label: "", collapse: true, validNum: true
};

export class AlbumForm extends Component {

  constructor(props) {
    super(props)
    this.state = {start_year: 1954, end_year: 2018, track: "", label: "", collapse: false, validNum: true}; 
    this.filter = this.filter.bind(this);
    this.toggle = this.toggle.bind(this);
    this.checkValidNum = this.checkValidNum.bind(this);
    this.getFeedback = this.getFeedback.bind(this); 
    this.getNumTracks = this.getNumTracks.bind(this); 
    this.resetFields = this.resetFields.bind(this);
  }

  resetFields() {
    this.setState(resetState); 
    document.getElementById("album-form").reset();
  }

  getNumTracks() {
    if (this.state.track === "") {
      this.setState({validNum: true});
      return undefined;
    }
    else if (!this.checkValidNum(this.state.track)) {
      this.setState({validNum: false});
      return undefined;
    }
    else {
      this.setState({validNum: true})
      return this.state.track; 
    }
  }

  checkValidNum(num) {
    if (num >= 0 && !isNaN(parseInt(num, 10))) {
      return true; 
    }
    return false; 
  }

  getFeedback() {
    if (!this.state.validNum) {
      return <FormFeedback>Please enter a positive number.</FormFeedback>
    }
    else {
      return null; 
    }
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
    let num_tracks = this.getNumTracks();

    let label = undefined;
    if (this.state.label !== "") {
      label = this.state.label
    }
    const { stateService } = this.props.transition.router;
    stateService.go('^.home', {limit: 12, offset: 0, filters: {start_year: start_year, end_year: end_year, num_tracks: num_tracks, label: label}});
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

    const labels = this.props.labels.items.map((item) => {
      return (
        <option value={item}>{item}</option>
      );
    });

    return (
      <div>
        <Collapse isOpen={this.state.collapse}>
          <Form inline className="filtering-form" id="album-form" onSubmit={(e) => {e.preventDefault(); this.filter()}}>
            <FormGroup className="text-center" row>
              <Col style={{paddingRight: "0px"}} sm={4}>
                <Label style={{marginRight: "5px"}} for="start">Release Year</Label>
                <Input type="select" name="start" id="start" onChange={(e) => (this.setState({start: e.target.value}))}>
                  <option value="">Any</option>
                  {years}
                </Input>
                <Input type="select" name="end" id="end" onChange={(e) => (this.setState({end: e.target.value}))}>
                  <option value="">Any</option>
                  {years}
                </Input>
              </Col>
              <Col style={{padding: "10px"}} sm={4}>
                <Label for="track">Number of Tracks</Label>
                <Input style={{width: "75%"}} invalid={!this.state.validNum} type="number" name="track" id="track" placeholder="value" onChange={(e) => (this.setState({track: e.target.value}))}/>
                {this.getFeedback()}
              </Col>
              <Col sm={4}>
                <Label for="label">Label</Label>
                  <Input style={{width: "100%"}} type="select" name="label" id="label" onChange={(e) => (this.setState({label: e.target.value}))}>
                  <option value="">Any</option>
                  {labels}
                </Input>
              </Col>
            </FormGroup>
            <Col style={{paddingLeft: "57px", marginTop: "10px"}} sm={3}>
              <Button type="submit" onClick={this.filter}>Submit</Button>
              {' '}
              <Button type="submit" color="danger" onClick={(e) => (this.resetFields())}>Reset</Button>
            </Col>
          </Form>
        </Collapse>
      </div>
    );
  }
} 