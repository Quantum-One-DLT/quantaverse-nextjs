import React from 'react';
import { Row, Col } from 'reactstrap';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';

export default withPageAuthRequired(function TermsPage() {
  return (
    <>
      <div className="mb-5" data-testid="terms">
        <h1 data-testid="terms-title">Quanataverse ID terms of use</h1>
        <div data-testid="terms-text">
          <p>
            This page is in development and will be available ASAP. 
          </p>
          <p>
            In the meantime, please reach out to support@quantaverseid.io with any inquiries you may have. 
          </p>
          <p>
            Quantaverse ID was developed and implemented by Quantum One DAO LLC. 
          </p>
        </div>
      </div>
    </>
  );
});
