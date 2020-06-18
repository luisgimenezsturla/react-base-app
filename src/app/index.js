import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div className={`app-container`}>
        </div>
    );
  }
}

const mapStateToProps = () => {
  return {}
};

export default withRouter(connect(mapStateToProps, {})(App));