import { default as React, Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './store/index';
import GoogleMapContainer from './containers/google-map-container';

interface IProps {
}
class App extends Component<IProps, any> {

  render() {
    return (
      <Provider store={store}>
        <div className="u-centered" style={{ height: '500px' }}>
          <h1 className="c-heading">Map Example</h1>

          <GoogleMapContainer />

          <br />
        </div>
      </Provider>
    );
  }
}

const container = document.getElementById('app-container') || document.body;
container.innerHTML = '';
render(<App />, container);
