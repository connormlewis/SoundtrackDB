import React, { Component } from 'react'; 
import { Col, Button, Form, FormGroup, Label, Input, Collapse } from 'reactstrap';
// eslint-disable-next-line
import styles from '../../style/Form.css';
import yearItems from './Years.jsx';
import ratingItems from './Rating.jsx';
import seasonItems from './Seasons.jsx';

export class MediaForm extends Component {

  constructor(props) {
    super(props)
    this.state = {movie: false, tv_show: false, start: "", end: "", running: false, season: "", avg_rate: "", last_air: "", collapse: false}; 
    this.filter = this.filter.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  filter(params) {
    let filters = {}; 
    if(this.state.movie && !this.state.tv_show) {
      filters['type'] = 'movie';
    }
    else if(this.state.tv_show && !this.state.movie) {
      filters['type'] = 'tv_show'; 
    }
    if (this.state.start !== "") {
      filters['start_year'] = this.state.start; 
    }
    if (this.state.end !== "") {
      filters['end_year'] = this.state.end;
    }
    if (this.state.running) {
      filters['running'] = "true"; 
    }
    if (this.state.season !== "") {
      filters['seasons'] = this.state.season;
    }
    if (this.state.avg_rate !== "") {
      filters['average_rating'] = this.state.avg_rate;
    }
    if (this.state.last_air !== "") {
      filters['last_aired'] = this.state.last_air;
    }
    if (this.state.genre !== "") {
      filters['genre'] = this.state.genre;
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

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render () {
    const genres = this.props.genres.items.map(genre => {
      return (
        <option value={genre.name}>{genre.name}</option>
      );
    });

    const years = yearItems.map((item) => {
      return (
        <option value={item}>{item}</option>
      );
    });

    const seasons = seasonItems.map((item) => {
      return (
        <option value={item}>{item}</option>
      );
    });

    const ratings = ratingItems.map((item) => {
      return (
        <option value={item}>{item}</option>
      );
    });

    return (
      <div>
        <Collapse isOpen={this.state.collapse}>
          <Form className="filtering-form" onSubmit={(e) => {e.preventDefault(); this.filter()}}>
            <FormGroup row>
              <Col sm={3}>
                <Label for="type" size="lg">Type</Label>
                <br />
                <Label check>
                  <input name="media" type="radio" onChange={(e) => (this.setState({movie: e.target.value, tv_show: !e.target.value}))}/>{' '}
                  Movie
                </Label>
                <br />
                <Label check>
                  <input name="media" type="radio" onChange={(e) => (this.setState({movie: !e.target.value, tv_show: e.target.value}))}/>{' '}
                  TV Show
                </Label>
                <br />
                <Label check>
                  <input name="media" type="radio" onChange={(e) => (this.setState({movie: !e.target.value, tv_show: !e.target.value}))}/>{' '}
                  Both
                </Label>
              </Col>
              <Col sm={3}>
                <Label for="genre" size="lg">Genre</Label>
                <Input type="select" name="start" id="start" onChange={(e) => (this.setState({genre: e.target.value}))}>
                  <option value="">Any</option>
                  {genres}
                </Input>
              </Col>
              <Col sm={3}>
                <Label for="release" size="lg">Release Year</Label>
                <Input type="select" name="start" id="start" onChange={(e) => (this.setState({start: e.target.value}))}>
                  <option value="">Any</option>
                  {years}
                </Input>{' '}
                <Input type="select" name="end" id="end" onChange={(e) => (this.setState({end: e.target.value}))}>
                  <option value="">Any</option>
                  {years}
                </Input>
              </Col>         
              <Col sm={3}>
                <Label for="avg_rate" size="lg" sm={20}>Average Rating</Label>
                <Input type="select" name="avg_rate" id="avg_rate" min="0" onChange={(e) => (this.setState({avg_rate: e.target.value}))}>
                  <option value="">Any</option>
                  {ratings}
                </Input>
              </Col>
            </FormGroup>
            <legend>TV Show Filters</legend>
            <FormGroup row>
              <Col sm={5}>
                <Label size="lg" check>
                  <input name="running" type="checkbox" checked={this.state.running} onChange={this.handleInputChange}/>{' '}
                  Currently Running Series
                </Label>
              </Col>
              <Col sm={3}>
                <Label for="season" size="lg">Seasons</Label>
                <Input type="select" name="season" id="season" min="0" onChange={(e) => (this.setState({season: e.target.value}))}>
                  <option value="">Any</option>
                  {seasons}
                </Input>
              </Col>
              <Col sm={4}>
                <Label for="last_air" size="lg">Last Aired (Year)</Label>
                <Input type="select" name="last_air" id="last_air" onChange={(e) => (this.setState({last_air: e.target.value}))}>
                  <option value="">Any</option>
                  {years}
                </Input>
              </Col>
            </FormGroup>
            <Col style={{paddingLeft: "2px", marginTop: "10px"}} sm={{ size: 10 }}>
              <Button type="submit" onClick={this.filter}>Submit</Button>
            </Col>
          </Form>
        </Collapse>
      </div>
    );
  }
} 