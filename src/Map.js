import React from "react";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";

class Map extends React.Component {
  state = {
    infectedByRegion: []
  };

  componentDidMount() {
    fetch(
      "https://api.apify.com/v2/key-value-stores/OHrZyNo9BzT6xKMRD/records/LATEST?disableRedirect=true",
      { method: "GET" }
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          infectedByRegion: data.infectedByRegion[0]
        });
        console.log(data.infectedByRegion.region);
      });
  }
  render() {
    return (
      <div>
        Map Component
        {this.state.infectedByRegion[0]}
      </div>
    );
  }
}

export default Map;
