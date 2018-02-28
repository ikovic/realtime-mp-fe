import React from 'react';
import Authentication from 'routes/LandingPage/containers/Authentication';

const LandingPage = props => (
  <div className="vh-100 dt w-100">
    <Authentication location={props.location} />
  </div>
);

export default LandingPage;
