import React, { Component } from 'react'; 
import { Col, Button, Form, FormGroup, Label, Input, Collapse } from 'reactstrap';
// eslint-disable-next-line
import styles from '../../style/Form.css';
import yearItems from './Years.jsx' 

export class MediaForm extends Component {

  constructor(props) {
    super(props)
    this.state = {movie: false, tv_show: false, start_year: 0, end_year: 2018, running: false, seasons: 0, run_time: 0, popularity: 0, average_rating: 0, last_aired: 0, collapse: false}; 
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
    filters['start_year'] = this.state.start; 
    filters['end_year'] = this.state.end;
    if (this.state.running) {
      filters['running'] = "true"; 
    }
    filters['seasons'] = this.state.season;
    filters['run_time'] = this.state.runtime;
    filters['popularity'] = this.state.popular;
    filters['average_rating'] = this.state.avg_rate;
    filters['last_aired'] = this.state.last_air;
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
            <legend>Type</legend>
            <FormGroup check>
              <Col sm={{ size: 20}}>
                <Label check>
                  <input name="movie" type="checkbox" checked={this.state.movie} onChange={this.handleInputChange}/>{' '}
                  Movie
                </Label>
              </Col>
              <Col sm={{ size: 20}}>
                <Label check>
                  <input name="tv_show" type="checkbox" checked={this.state.tv_show} onChange={this.handleInputChange}/>{' '}
                  TV Show
                </Label>
              </Col>
            </FormGroup>
            <legend>Genre</legend>
            <FormGroup row>
              <Col sm={12}>
                <Input type="select" name="start" id="start" onChange={(e) => (this.setState({genre: e.target.value}))}>
                  <option value="">Any</option>
                  {
                    this.props.genres.items.map(genre => {
                      return (
                        <option value={genre.name}>{genre.name}</option>
                      )
                    })
                  }
                </Input>
              </Col>
            </FormGroup>
            <legend>Release Year</legend>
            <FormGroup row>
              <Col sm={5}>
                <Label for="start" sm={10}>Start Year</Label>
                <Input type="select" name="start" id="start" onChange={(e) => (this.setState({start: e.target.value}))}>
                  {years}
                </Input>
              </Col>
              <Col sm={5}>
                <Label for="end" sm={10}>End Year</Label>
                <Input type="select" name="end" id="end" onChange={(e) => (this.setState({end: e.target.value}))} defaultValue={2018}>
                  {years}
                </Input>
              </Col>
            </FormGroup>
            <FormGroup check>
              <Col sm={{ size: 20}}>
                <Label check>
                  <input name="running" type="checkbox" checked={this.state.running} onChange={this.handleInputChange}/>{' '}
                  Currently Running Series
                </Label>
              </Col>
            </FormGroup>
            <legend>Number of Seasons</legend>
            <FormGroup row>
              <Col sm={5}>
                <Label for="season" sm={10}>Min Seasons</Label>
                <Input type="number" name="season" id="season" min="0" onChange={(e) => (this.setState({season: e.target.value}))}/>
              </Col>
            </FormGroup>
            <legend>Runtime</legend>
            <FormGroup row>
              <Col sm={5}>
                <Label for="runtime" sm={10}>Runtime (minutes)</Label>
                <Input type="number" name="runtime" id="runtime" min="0" onChange={(e) => (this.setState({runtime: e.target.value}))}/>
              </Col>
            </FormGroup>
            <legend>Popularity</legend>
            <FormGroup row>
              <Col sm={5}>
                <Label for="popular" sm={10}>Popularity Rating</Label>
                <Input type="number" name="popular" id="popular" min="0" onChange={(e) => (this.setState({popular: e.target.value}))}/>
              </Col>
            </FormGroup>
            <legend>Average Rating</legend>
            <FormGroup row>
              <Col sm={5}>
                <Label for="avg_rate" sm={10}>Average Rating</Label>
                <Input type="number" name="avg_rate" id="avg_rate" min="0" onChange={(e) => (this.setState({avg_rate: e.target.value}))}/>
              </Col>
            </FormGroup>
            <legend>Last Aired</legend>
            <FormGroup row>
              <Col sm={5}>
                <Label for="last_air" sm={10}>Last Aired (Year)</Label>
                <Input type="select" name="last_air" id="last_air" onChange={(e) => (this.setState({last_air: e.target.value}))}>
                  {years}
                </Input>
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