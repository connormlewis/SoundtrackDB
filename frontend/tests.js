import React from 'react';
import { shallow } from 'enzyme'; 
import { expect } from 'chai'; 

import App from './src/components/App'; 
import Navigation from './src/components/Navigation'; 


// App
describe('<App/>', function () {
  it('should render without crashing', function() {
    shallow(<App/>); 
  }); 
});

// Navigation
describe('<Navigation/>', function () {
  it('should render without crashing', function() {
    shallow(<Navigation/>); 
  });

  it('should have a brand named SoundtrackDB', function() {
    const wrapper = shallow(<Navigation/>); 
    expect(wrapper.find('NavbarBrand').render().text()).to.equal('SoundtrackDB'); 
  });  

  it('should have 4 items: Albums, Artists, TV/Movies, and About', function() {
    const wrapper = shallow(<Navigation/>); 
    const navItems = wrapper.find('Nav').children();  
    expect(navItems).to.have.length(4);
    expect(navItems.at(0).render().text()).to.equal('Albums');  
    expect(navItems.at(1).render().text()).to.equal('Artists');
    expect(navItems.at(2).render().text()).to.equal('TV/Movies');
    expect(navItems.at(3).render().text()).to.equal('About');      
  });

  it('should have links to correct pages', function() {
    const wrapper = shallow(<Navigation/>); 
    const navItems = wrapper.find('Nav').children();  
    expect(navItems.at(0).find('NavLink').prop('href')).to.equal('/album');  
    expect(navItems.at(1).find('NavLink').prop('href')).to.equal('/artist');  
    expect(navItems.at(2).find('NavLink').prop('href')).to.equal('/tv-movie');
    expect(navItems.at(3).find('NavLink').prop('href')).to.equal('/about');       
  }) 
}); 