import { default as React, Component } from 'react';
import { connect } from 'react-redux';
import { default as GoogleMap } from 'google-map-react';

import { IRootReducer } from '../store/index';
import * as googleMapActions from '../store/google-map-reducer';

const DEFAULT_CENTER = { lat: 59.3208006, lng: 18.0359329 };
const DEFAULT_ZOOM = 14;

interface IProps {
  selectedLocation: any;
  changeSelectedLocation: (selectedLocation: any) => FluxStandardAction<any>;
}
export class GoogleMapExample extends React.Component<IProps, any> {

  render() {

    return (
      <section>
        <div style={{ height: 400, overflow: 'hidden' }}>
          <GoogleMap
            defaultCenter={DEFAULT_CENTER}
            defaultZoom={DEFAULT_ZOOM}
            hoverDistance={40 / 2}
            >
          </GoogleMap>
        </div>
      </section>
    );
  }
};

const stateToProps = (state: IRootReducer) => ({
  selectedLocation: state.googleMap.selectedLocation
});
const actionsToProps = Object.assign(googleMapActions);

export default connect(stateToProps, actionsToProps)(GoogleMapExample);
