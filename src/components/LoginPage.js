import React from 'react';
import { connect } from 'react-redux';
import { startLogin, startLoginWithFacebook, startLoginWithGithub } from '../actions/auth';

export const LoginPage = ( {startLoginWithFacebook, loginWithGithub, startLogin} ) => (
    <div className="box-layout">
      <div className="box-layout__box">
        <h1 className="box-layout__title">Expensify</h1>
        <p>Get your expenses under control.</p>
        <h3 className="login-text">Login to continue</h3>
        <div className="button-container">
        <button className="button--login google" onClick={startLogin} />
        <button className="button--login github" onClick={loginWithGithub} />
        <button className="button--login facebook" onClick={startLoginWithFacebook} />
        </div>    
      </div>  
    </div>
  );
  
  const mapDispatchToProps = (dispatch) => ({
      startLogin: () => dispatch(startLogin()),
      loginWithGithub: () => dispatch(startLoginWithGithub()),
      startLoginWithFacebook: () => dispatch(startLoginWithFacebook())
  });

  export default connect(undefined, mapDispatchToProps)(LoginPage);