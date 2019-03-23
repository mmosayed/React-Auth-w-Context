import React from 'react';

export default (props) => {
  const { location } = props;
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Error 404</h1>
        <p className="lead">Page {location.pathname} not found</p>
      </div>
    </div>
  );
}