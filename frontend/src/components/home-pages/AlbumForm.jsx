import React, { Component } from 'react'; 
import { Col, Button, Form, FormGroup, Label, Input, Collapse } from 'reactstrap'; 
// eslint-disable-next-line
import styles from '../../style/Form.css'; 

export class AlbumForm extends Component {

  constructor(props) {
    super(props)
    this.state = {start_year: 1900, end_year: 2018, collapse: false}; 
    this.filter = this.filter.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  filter(params) {
    let start_year = this.state.start; 
    let end_year = this.state.end; 
    const { stateService } = this.props.transition.router;
    stateService.go('^.home', {limit: 12, offset: 0, filters: {start_year: start_year, end_year: end_year}});
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render () {
    return (
      <div>
        <Button color="info" onClick={this.toggle} style={{ marginBottom: '1rem', marginLeft: '1rem' }}>Filter</Button>
        <Collapse isOpen={this.state.collapse}>
          <Form className="filtering-form">
            <h5>Release Date</h5>
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