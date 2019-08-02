import React, { Component } from 'react';
import Axios from 'axios';
import ListUsers from './components/ListUsers';
import Search from './components/Search';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Posts from './components/Posts'
import NavBar from './components/navbar'

class App extends Component {
  state = {
    users: [],
    username: ''
  }

  componentDidMount(){
    this.listUsers();
    this.getPosts();
  }

  async getPosts() {
    const posts = "https://jsonplaceholder.typicode.com/posts";
    const data = await fetch(posts);
    const res = await data.json();
    this.setState({
      post: res
    })
  }

  listUsers = async() => {
    const url = `https://randomuser.me/api/?results=20`;
    const response = await Axios.get(url);
    this.setState({
      users: response.data.results
    })
  }

  handleCategory = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  render() {
    let filterUser = this.state.users.filter(e => {
      return e.name.first.toLowerCase().includes(this.state.username.toLowerCase())
    })
    return (
      <Router>
        <div>
          <NavBar/>
          <Route exact path="/" render={() => {
            return (
              <div className="container white center containers">
                <Search handleCategory={this.handleCategory}/>
                <ListUsers filterUser={filterUser}/>
              </div>
            )
          }}>
          </Route>
          <Route path="/posts" component={Posts} />
        </div>
      </Router>
    )
  }
}

export default App;
