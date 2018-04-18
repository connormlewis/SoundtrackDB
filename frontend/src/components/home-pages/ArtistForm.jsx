import React, { Component } from 'react'; 
import { Col, Button, Form, FormGroup, Label, Input, Collapse } from 'reactstrap';
// eslint-disable-next-line
import styles from '../../style/Form.css'; 

export class ArtistForm extends Component {

  constructor(props) {
    super(props)
    this.state = {min_followers: 0, max_followers: 10000000, num_albums: 0, num_media: 0, collapse: false}; 
    this.filter = this.filter.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  filter(params) {
    let min_followers = this.state.min; 
    let max_followers = this.state.max; 
    let num_albums = this.state.album;
    let num_media = this.state.media;
    const { stateService } = this.props.transition.router;
    stateService.go('^.home', {limit: 12, offset: 0, filters: {min_followers: min_followers, max_followers: max_followers, num_albums: num_albums, num_media: num_media}});
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
            <legend>Number of Spotify Followers</legend>
            <FormGroup row>
              <Col sm={6}>
                <Label for="min" sm={10}>Min</Label>
                <Input type="number" name="min" id="min" min="0" onChange={(e) => (this.setState({min: e.target.value}))}/>
              </Col>
              <Col sm={6}>
                <Label for="max" sm={10}>Max</Label>
                <Input type="number" name="max" id="max" min="0" onChange={(e) => (this.setState({max: e.target.value}))}/>
              </Col>
            </FormGroup>
                <FormGroup row>
                    <Col sm={6}>
                        <legend>Number of Albums</legend>
                        <Label for="album" sm={2}>Min</Label>
                        <Input type="number" name="album" id="album" min="0" onChange={(e) => (this.setState({album: e.target.value}))}/>
                    </Col>
                    <Col sm={6}>
                        <legend>Number of Media</legend>
                        <Label for="media" sm={2}>Min</Label>
                        <Input type="number" name="media" id="media" min="0" onChange={(e) => (this.setState({album: e.target.value}))}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
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