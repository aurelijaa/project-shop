import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import auth from "../../auth";

function PrivateRoute({ isLogged, path, ...props }) {
  if (!isLogged) {
    return (
      <Redirect
        to={{
          pathname: "/login",
          state: { intendedLocation: path },
        }}
      />
    );
  }
  return <Route path={path} {...props} />;
}

PrivateRoute.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
};

const enhance = connect(state => ({
  isLogged: auth.selectors.isLogged(state),
}));

export default enhance(PrivateRoute);
