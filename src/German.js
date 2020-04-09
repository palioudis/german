import React from "react";

class German extends React.Component {
  state = {
    infected: [],
    deceased: [],
    infectedByRegion: [
      {
        region: [],
        infectedCount: []
      }
    ]
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
          infected: data.infected,
          deceased: data.deceased,
          infectedByRegion: data.infectedByRegion
        });
        console.log("german", data.infectedByRegion[1].region);
      });
  }
  render() {
    return (
      <div>
        German Component
        <p>total cases:{this.state.infected}</p>
        <p>deceased:{this.state.deceased}</p>
        <div>
          {this.state.infectedByRegion.map((city, i) => (
            <p key={i}>
              region: {city.region} - infected:{city.infectedCount} - deceased:
              {city.deceasedCount}
            </p>
          ))}
        </div>
        city:{this.state.infectedByRegion[0].region}
      </div>
    );
  }
}

export default German;
