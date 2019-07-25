import React from 'react';
import './App.css';
import Contacts from './components/Contacts';
import Create from './components/Create'

class App extends React.Component{
  constructor() {
    super()
    this.state = {
      people: [],
      search: '',
      isClicked: false
    };

    this.updateSearch = this.updateSearch.bind(this);
    this.addPerson = this.addPerson.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  componentDidMount() {
     fetch('https://randomuser.me/api?results=10&inc=name,phone,email')
      .then(response => response.json())
      .then(data => this.setState({people: data.results}))
      
  }
  
  updateSearch(event) {
    this.setState({
      search: event.target.value
    })
  }

  handleClick() {
    this.setState(state => ({
      isClicked: !state.isClicked
    }));
  } 

  addPerson(person) {
    let users = [...this.state.people];
    users.push(person);
    this.setState({
      people: users
    })
  }

  deletePerson(index) {
    let users = [...this.state.people];
    users.splice(index, 1)
    this.setState({
      people: users
    })
  }

  updateUser = (person, id) => {
    let users = [...this.state.people];
    users[id] = person;
    this.setState({
      people: users
    })
  }

  render() {
    let filteredPeople = this.state.people.filter(
      (person) => {
        let fullName = `${person.name.first.toLowerCase()} ${person.name.last.toLowerCase()}`;
        return fullName.indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );
      return (
        <div className="contacts">
          <h1 className="contacts-title">Contacts App</h1>
          <div style = {{display: this.state.isClicked === false ? 'block' : 'none'}}>
            <div className="contacts-search">
              <input 
              type="text" 
              name="name" 
              placeholder="Enter name or lastname..."
              value={this.state.search}
              onChange={this.updateSearch}
              autoFocus
              />
            </div>
            <div className="contacts-list">
              {filteredPeople.map((contact, i) => (
                <Contacts 
                  key = {i}
                  firstName = {contact.name.first}
                  lastName = {contact.name.last}
                  phone = {contact.phone}
                  image = {contact.img}
                  delete = {this.deletePerson.bind(this, i)}
                  id = {i}
                  update = {this.updateUser}
                />
              ))}
            </div>
            <button type="submit" className="contacts-add"  onClick={this.handleClick}>+</button>
          </div>
          <div>
          {
            this.state.isClicked ? <Create addPerson={this.addPerson} click={this.handleClick}/> : null 
          }
          </div>
        </div>
      )
  }

  
}

export default App;
