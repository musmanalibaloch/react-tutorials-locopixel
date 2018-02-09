import React, { Component } from 'react';



class Projectitem extends Component {
    constructor()
    {
        super();
        console.log('itemProject init');
    }
    onDelete(id)
    {
      console.log('clicked delete with id:'+id);
      this.props.onDelete(id);
    }
  render() {
    var styles={color:'red'}
    return (
      <li className="Item">
        <strong> {this.props.projectTitle+'-'} <span onClick={this.onDelete.bind(this,this.props.id)} style={styles}>x</span> </strong> {this.props.projectDescription}
      </li>
    );
  }
}

export default Projectitem;
