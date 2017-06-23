import React from 'react';
import ReactDOM from 'react-dom';


class Root extends React.Component {
  constructor(props) {
    super(props);
    this.geoFindMe = this.geoFindMe.bind(this)
  }

  geoFindMe() {
    var output = document.getElementById("out");

    if (!navigator.geolocation){
      output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
      return;
    }

    function success(position) {
      var latitude  = position.coords.latitude;
      var longitude = position.coords.longitude;

      output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';
    }

    function error() {
      output.innerHTML = "Unable to retrieve your location";
    }

    output.innerHTML = "<p>Locating</p>";

    navigator.geolocation.getCurrentPosition(success, error);
  }

  render() {
    return(
      <div>
        <p><button onClick= {this.geoFindMe} >Show my location</button></p>
        <div id="out"></div>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});
