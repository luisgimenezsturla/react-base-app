import React from 'react';
import IntlMessages from 'util/IntlMessages';

class SamplePage extends React.Component {

  render() {
    return (
      <div className="app-wrapper">
        <div className="d-flex justify-content-center">
          <h1><IntlMessages id="pages.samplePage.description"/></h1>
        </div>

      </div>
    );
  }
}

export default SamplePage;