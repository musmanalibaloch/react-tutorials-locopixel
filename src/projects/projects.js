import React, { Component } from 'react';
import Projectitem from './projectItem'


class Projects extends Component {
  constructor()
  {
    super();
    console.log('project init');
  }

  onDelete(id)
  {
      console.log('project delete called with id:'+id);
      this.props.onDelete(id);
  }
 
  render() {
    let projectItems;
    
    projectItems=this.props.projects.map( (data,index) => {
       
      return(
          <Projectitem id={index} onDelete={this.onDelete.bind(this,index)} key={data.title} projectTitle={data.title} projectDescription={data.Description} />
        );
    });
    return (
     
      <div className="Project">
       {projectItems}
      </div>
    );
  }
}

export default Projects;
