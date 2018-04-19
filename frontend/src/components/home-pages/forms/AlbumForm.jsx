import React, { Component } from 'react'; 
import { Col, Button, Form, FormGroup, Label, Input, Collapse, FormFeedback} from 'reactstrap'; 
// eslint-disable-next-line
import styles from '../../../style/Form.css';
import yearItems from './selections/Years.jsx'

export class AlbumForm extends Component {

  constructor(props) {
    super(props)
    this.state = {start_year: 1954, end_year: 2018, track: "", collapse: false, validNum: true}; 
    this.filter = this.filter.bind(this);
    this.toggle = this.toggle.bind(this);
    this.checkValidNum = this.checkValidNum.bind(this);
    this.getFeedback = this.getFeedback.bind(this); 
    this.getNumTracks = this.getNumTracks.bind(this); 
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
        <Collapse isOpen={this.state.collapse}>
          <Form inline className="filtering-form" onSubmit={(e) => {e.preventDefault(); this.filter()}}>
            <FormGroup row>
              <Col sm={6}>
                <Label style={{paddingRight: "50px"}}for="start">Release Year</Label>
                <Input type="select" name="start" id="start" onChange={(e) => (this.setState({start: e.target.value}))}>
                  <option value="">Any</option>
                  {years}
                </Input>{' '}
                <Input type="select" name="end" id="end" onChange={(e) => (this.setState({end: e.target.value}))}>
                  <option value="">Any</option>
                  {years}
                </Input>
              </Col>
              <Col sm={6}>
                <Label for="track">Number of Tracks</Label>
                <Input invalid={!this.state.validNum} type="number" name="track" id="track" placeholder="value" onChange={(e) => (this.setState({track: e.target.value}))}/>
                {this.getFeedback()}
              </Col>
            </FormGroup>
            <Col style={{paddingLeft: "2px", marginTop: "10px"}} sm={3}>
              <Button type="submit" onClick={this.filter}>Submit</Button>
            </Col>
          </Form>
        </Collapse>
      </div>
    );
  }
} 