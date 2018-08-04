import React from 'react';
import { connect } from 'react-redux';
import { startLogin, startLoginWithFacebook } from '../actions/auth';

export const LoginPage = ( {startLoginWithFacebook, startLogin} ) => (
    <div className="box-layout">
      <div className="box-layout__box">
        <h1 className="box-layout__title">Expensify</h1>
        <p>It's time to get your expenses under control.</p>
        <button className="button button--login-primary" onClick={startLogin}>Login with Google</button>
        <button className="button button--login-secondary" onClick={startLoginWithFacebook}>Sign in with Facebook</button>
      </div>  
    </div>
  );
  
  const mapDispatchToProps = (dispatch) => ({
      startLogin: () => dispatch(startLogin()),
      startLoginWithFacebook: () => dispatch(startLoginWithFacebook()),
  });

  export default connect(undefined, mapDispatchToProps)(LoginPage);