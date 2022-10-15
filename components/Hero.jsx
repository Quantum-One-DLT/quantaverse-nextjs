import React from 'react';

import SvgLogo from './Logo';

const Hero = () => (
  <div className="hero my-5 text-center" data-testid="hero">
    <SvgLogo testId="hero-logo" />
    <h1 className="mb-4" data-testid="hero-title">
      The optimal digital trust paradigm..
    </h1>

    <p className="lead" data-testid="hero-lead">
      ..is not Web2, Web3, Web5, nor 'Elon' X, it is the QuantaVerse{' '}
      <a href="https://app.fractal.id/authorize?client_id=rZ0cAmPpY2SPgF4bXqBrzndqoTzk1EYsq4RtQ1fNhe0&redirect_uri=https%3A%2F%2Fquantumone.network%2Fcallback&response_type=code&scope=contact%3Aread%20verification.basic%3Aread%20verification.basic.details%3Aread%20verification.liveness%3Aread%20verification.liveness.details%3Aread">Verify ID</a>
    </p>
  </div>
);

export default Hero;
