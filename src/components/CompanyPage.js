// src/components/CompanyPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

function CompanyPage() {
  const { companyName } = useParams();

  return (
    <div>
      <h1>{companyName}</h1>
      <p>Welcome to the {companyName} page. Here you’ll find various products offered by this company.</p>
      {/* Add more detailed company-specific data here later */}
    </div>
  );
}

export default CompanyPage;
