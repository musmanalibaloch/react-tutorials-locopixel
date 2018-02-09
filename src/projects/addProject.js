import React, { Component } from 'react';



class Addproject extends Component {
    constructor()
    {
        super();
        console.log('addProject init');
    }

    submitForm(e)
    {
        e.preventDefault();
        console.log(this.refs.description.value);
    }
  render() {
    
    return (
      <div className="Add">
        <form className='form' onSubmit={this.submitForm.bind(this)}>
            <div>
                
                <select ref='category'> 
                <option>Select any value</option>
                </select>
            </div>
            <div>    
                <input type='text' ref='description' placeholder='Enter Description'/>
            </div>    
            <input type="submit"/>
        </form>
      </div >
    );
  }
}

export default Addproject;
