import React from 'react';
import { jwtDecode } from 'jwt-decode';

const UserPage = ({ token }) => {

  if (typeof token !== 'string') {
    return <p className="text-danger">Invalid token specified.</p>;
  }

  // Decode the token to extract user information
  const decodedToken = jwtDecode(token);
  const firstName = decodedToken.name[0];

  return (
    <div>
      <h2 className="mb-4">User Profile</h2>
      <div className="card">
        <div className="card-body">
          <p className="card-text"><strong>Name:</strong> {firstName}</p>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
