import React from 'react';
import { Link } from 'react-router-dom';

const HandleHome = () => {
  return (
    <div className="container mt-5">
      <div className="jumbotron">
        <h1 className="display-4">Access Denied</h1>
        <p className="lead">You can't access this page because you don't have an account.</p>
        <hr className="my-4" />
        <p>Sign up now and enjoy a 7-day free trial! If you already have an account, please log in.</p>
        <p className="lead">
          <Link className="btn btn-primary btn-lg me-3 mx-2" to="/signup" role="button">Sign Up</Link>
          <Link className="btn btn-secondary btn-lg" to="/login" role="button">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default HandleHome;
