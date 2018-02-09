import React, { Component } from 'react';
import Projects from './projects/projects';
import Addproject from './projects/addProject';
import './App.css';

class App extends Component {
  constructor()
  {
    super();
    this.state={
      projects:[
        {
          title:'Project 1',
          Description:'Web design course consist of 2 parts,HTML & CSS'
        }
      ]
    }

  }

  clicked()
  {
    this.state.projects.push({
      title:'Project 2',
      Description:'Web Dev course consist of 2 parts,HTML & CSS'
    })
    this.setState(this.state.projects);
    console.log(this.state.projects);
  }
  onDelete(id)
  {
    console.log('parent App delete called with id:'+id);
    this.state.projects.splice(id,1);
    this.setState(this.state.projects);
  }
  render() {
    return (   //JSX 
      <div className="App">
      <button onClick={this.clicked.bind(this)}> THIS IS IT </button>
      <Addproject/>
      <Projects onDelete={this.onDelete.bind(this)} projects={this.state.projects}/>
      </div>                                               
    );
  }
}

export default App;
