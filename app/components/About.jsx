var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About </h1>
      <p>This is a simple React Weather App</p>
      <p>
        The Tools I Used for this projects are
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a>
        - This was the Javascript Framework used.
        </li>
        <a href="http://openweathermap.org">Open Weather Map</a>
      - I used Open Weather Map API to display the weather from city search.
      </ul>
    </div>
  )
};

module.exports = About;
