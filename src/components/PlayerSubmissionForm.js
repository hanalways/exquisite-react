import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      player: 1,
    }


  }

  onValueChange = (event) => {
    const { target: { name, value } } = event;
    this.setState({ [name]: value })
  }

  dynamicallyRenderedForm = () => {
    const { renderFields} = this.props;

    const form = renderFields.map((field) => {
      if (typeof field !== 'string') {
        return (<input
          name={field.key}
          value={this.state[field.key]}
          placeholder={field.placeholder}
          type="text"
          onChange={this.onValueChange}
        />
      )} else {
        return (field);
      }
    })

    return form;
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    const newLine = this.props.renderFields.map((field) => {
    if (typeof field !== 'string') {
        return this.state[field.key]
      } else {
        return field;
      }
    });
    this.props.onAddLine(newLine.join(' '));

    this.resetFields();
  }

  resetFields = () => {
    let updatePlayer = this.state.player + 1;
    let resetStateFields = {
      player: updatePlayer,
    };
    
    for (let field of this.props.renderFields) {
      if (typeof field !== 'string') {
        resetStateFields[field.key] = '';
      }
    }
    
    this.setState(resetStateFields)
  }

  render() {
    console.log(this.state)
    const { adj1, noun1, adverb, verb, adj2, noun2, player } = this.state;
    
    return (
      <div className={ this.props.revealPoem ? "hidden" : "PlayerSubmissionForm" }>
        <h3>Player Submission Form for Player #{ player }</h3>
        <form 
          className="PlayerSubmissionForm__form"
          onSubmit={ this.onFormSubmit } 
        >
          <div className="PlayerSubmissionForm__poem-inputs">
            { this.dynamicallyRenderedForm() }
            {/* The
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
            />. */}
          </div>

          <div className="PlayerSubmissionForm__submit">
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
          </div>
        </form>
      </div>
    );
  }
}

PlayerSubmissionForm.propTypes = {
  onAddLine: PropTypes.func,
}

export default PlayerSubmissionForm;
