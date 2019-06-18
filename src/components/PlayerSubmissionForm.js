import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      adj1: null, 
      noun1: null, 
      adverb: null, 
      verb: null, 
      adj2: null, 
      noun2: null,
    }
  }

  onValueChange = (event) => {
    const { target: { name, value } } = event;
    this.setState({ [name]: value })
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    const { adj1, noun1, adverb, verb, adj2, noun2 } = this.state;

    const newLine = {
      adj1: adj1, 
      noun1: noun1,
      adverb: adverb,
      verb: verb, 
      adj2: adj2,
      noun2: noun2
    }  

    this.props.onAddLine(newLine);
  }

  render() {
    const { adj1, noun1, adverb, verb, adj2, noun2 } = this.state;
    
    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{  }</h3>
        <form 
          className="PlayerSubmissionForm__form"
          onSubmit={ this.onFormSubmit } 
        >
          <div className="PlayerSubmissionForm__poem-inputs">
            The
            <input
              name="adj1"
              value={adj1}
              placeholder="adjective"
              type="text"
              onChange={this.onValueChange}
            />
            <input
              name="noun1"
              value={noun1}
              placeholder="noun"
              type="text"
              onChange={this.onValueChange}
            />
            <input
              name="adverb"
              value={adverb}
              placeholder="adverb"
              type="text"
              onChange={this.onValueChange}
            />
            <input
              name="verb"
              value={verb}
              placeholder="verb"
              type="text"
              onChange={this.onValueChange}
            />
            the
            <input
              name="adj2"
              value={adj2}
              placeholder="adjective"
              type="text"
              onChange={this.onValueChange}
            />
            <input
              name="noun2"
              value={noun2}
              placeholder="noun"
              type="text"
              onChange={this.onValueChange}
            />.
          </div>

          <div className="PlayerSubmissionForm__submit">
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
          </div>
        </form>
      </div>
    );
  }
}

export default PlayerSubmissionForm;
