import React from 'react';
import PropTypes from 'prop-types';
import './RecentSubmission.css';

const RecentSubmission = (props) => {
  console.log(props);
  const { newestLine, revealPoem } = props;

  return (
    <div className={ !newestLine || revealPoem ? "hidden" : "RecentSubmission" }>
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">{ newestLine }</p>
    </div>
  );
}

RecentSubmission.propTypes = {
  newestLine: PropTypes.func,
}

export default RecentSubmission;
