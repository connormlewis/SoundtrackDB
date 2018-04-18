import React, { Component } from 'react'; 
import { Col, Button, Form, FormGroup, Label, Input, Collapse, FormFeedback } from 'reactstrap';
// eslint-disable-next-line
import styles from '../../style/Form.css'; 

export class ArtistForm extends Component {

  constructor(props) {
    super(props)
    this.state = {min: 0, max: 0, album: 0, media: 0, collapse: false, validMin: true, validMax: true, validAlbums: true, validMedia: true}; 
    this.filter = this.filter.bind(this);
    this.toggle = this.toggle.bind(this);
    this.checkValidNum = this.checkValidNum.bind(this);
    this.getMinFollowers = this.getMinFollowers.bind(this); 
    this.getMaxFollowers = this.getMaxFollowers.bind(this); 
    this.getAlbum = this.getAlbum.bind(this); 
    this.getMedia = this.getMedia.bind(this); 
    this.getFollowerFeedback = this.getFollowerFeedback.bind(this); 
    this.getAlbumsFeedback = this.getAlbumsFeedback.bind(this); 
    this.getMediaFeedback = this.getMediaFeedback.bind(this); 
  }

  checkValidNum(num) {
    if (num >= 0 && !isNaN(parseInt(num, 10))) {
      return true; 
    }
    return false; 
  }

  getMinFollowers() {
    if (this.state.min === "") {
      this.setState({validMin: true});
      return undefined;
    }
    else if (!this.checkValidNum(this.state.min)) {
      this.setState({validMin: false});
      return undefined;
    }
    else {
      this.setState({validMin: true})
      return this.state.min; 
    }
  }

  getMaxFollowers() {
    if (this.state.max === "") {
      this.setState({validMax: true});
      return undefined;
    }
    else if (!this.checkValidNum(this.state.max)) {
      this.setState({validMax: false});
      return undefined;
    }
    else {
      this.setState({validMax: true})
      return this.state.max; 
    }
  }

  getAlbum() {
    if (this.state.album === "") {
      this.setState({validAlbum: true});
      return undefined;
    }
    else if (!this.checkValidNum(this.state.album)) {
      this.setState({validAlbum: false});
      return undefined;
    }
    else {
      this.setState({validAlbum: true})
      return this.state.album; 
    }
  }

  getMedia() {
    if (this.state.media === "") {
      this.setState({validMedia: true});
      return undefined;
    }
    else if (!this.checkValidNum(this.state.media)) {
      this.setState({validMedia: false});
      return undefined;
    }
    else {
      this.setState({validMedia: true})
      return this.state.media; 
    }
  }

  getFollowerFeedback() {
    if (!this.state.validMin || !this.state.validMax) {
      return <FormFeedback>Please enter a positive number.</FormFeedback>
    }
    else {
      return null; 
    }
  }

  getAlbumsFeedback() {
    if (!this.state.validAlbums) {
      return <FormFeedback>Please enter a positive number.</FormFeedback>
    }
    else {
      return null; 
    }
  }

  getMediaFeedback() {
    if (!this.state.validMedia) {
      return <FormFeedback>Please enter a positive number.</FormFeedback>
    }
    else {
      return null; 
    }
  }

  filter(params) {
    let min_followers = this.getMinFollowers(); 
    let max_followers = this.getMaxFollowers();
    let num_albums = this.getAlbum(); 
    let num_media = this.getMedia();

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
          <Form inline className="filtering-form" onSubmit={(e) => {e.preventDefault(); this.filter()}}>
            <FormGroup row>
              <Col sm={6}>
                <Label for="min">Number of Spotify Followers</Label>
                <Input invalid={!this.state.validMin} type="number" name="min" id="min" min="0" placeholder="min" onChange={(e) => (this.setState({min: e.target.value}))}/>
                {' '}
                <Input invalid={!this.state.validMax} type="number" name="max" id="max" min="0" placeholder="max" onChange={(e) => (this.setState({max: e.target.value}))}/>
                {this.getFollowerFeedback()}
              </Col>
              <Col sm={3}>
                <Label for="album">Number of Albums</Label>
                <Input invalid={!this.state.validAlbums} type="number" name="album" id="album" min="0" placeholder="value" onChange={(e) => (this.setState({album: e.target.value}))}/>
                {this.getAlbumsFeedback()}
              </Col>
              <Col sm={3}>
                <Label for="media">Number of Media</Label>
                <Input invalid={!this.state.validMedia} type="number" name="media" id="media" min="0" placeholder="value" onChange={(e) => (this.setState({media: e.target.value}))}/>
                {this.getMediaFeedback()}              
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