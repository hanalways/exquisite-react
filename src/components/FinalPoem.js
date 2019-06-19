import React from 'react';
import PropTypes from 'prop-types';
import './FinalPoem.css';

const FinalPoem = (props) => {

  const fullPoem = props.allLines.map((line) => {
    return (
      <p>
        { line }
      </p>
    )
  });
  
  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
          { props.revealPoem && fullPoem }
      </section>

      <div className={ props.revealPoem ? "hidden" : "FinalPoem__reveal-btn-container" }>
        <input 
          type="button" 
          value="We are finished: Reveal the Poem" 
          className="FinalPoem__reveal-btn"
          onClick={ props.finalPoemCallback }
        />
      </div>
    </div>
  );
}

FinalPoem.propTypes = {
  allLines: PropTypes.func,
  finalPoemCallback: PropTypes.func,
  revealPoem: PropTypes.bool
}

export default FinalPoem;
