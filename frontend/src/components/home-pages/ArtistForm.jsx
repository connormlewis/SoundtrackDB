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
    let min_followers = undefined; 
    if (this.state.min !== "") {
      min_followers = this.state.min;
    } 
    let max_followers = undefined;
    if (this.state.max !== "") {
      max_followers = this.state.max; 
    }; 
    let num_albums = undefined; 
    if (this.state.album !== "") {
      num_albums = this.state.album;
    }; 
    let num_media = undefined;
    if (this.state.media !== "") {
      num_media = this.state.media; 
    }
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
          <Form inline className="filtering-form">
            <FormGroup row>
              <Col sm={6}>
                <Label for="min">Number of Spotify Followers</Label>
                <Input type="number" name="min" id="min" min="0" placeholder="min" onChange={(e) => (this.setState({min: e.target.value}))}/>
                {' '}
                <Input type="number" name="max" id="max" min="0" placeholder="max" onChange={(e) => (this.setState({max: e.target.value}))}/>
              </Col>
              <Col sm={3}>
                <Label for="album">Number of Albums</Label>
                <Input type="number" name="album" id="album" min="0" placeholder="value" onChange={(e) => (this.setState({album: e.target.value}))}/>
              </Col>
              <Col sm={3}>
                <Label for="media">Number of Media</Label>
                <Input type="number" name="media" id="media" min="0" placeholder="value" onChange={(e) => (this.setState({media: e.target.value}))}/>
              </Col>
            </FormGroup>
              <Col style={{paddingLeft: "2px", marginTop: "10px"}} sm={3}>
                <Button onClick={this.filter}>Submit</Button>
              </Col>
          </Form>
        </Collapse>
      </div>
    );
  }
} 