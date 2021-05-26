import {Component} from 'react'
import {Map, GoogleApiWrapper} from 'google-maps-react'

class MyLocation extends Component(){
    render() {
        return (
            <Map
            google={this.props.google}
            zoom={8}
            initialCenter={{ lat: 47.444, lng: -122.176}}
          />
        );
      }
}


  export default GoogleApiWrapper({
    apiKey: 'AIzaSyBXWOMoPe2wAZdn4S1g7oxplcFGsKBpFos'
  })(MyLocation);
