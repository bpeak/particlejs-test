import React from "react";
import Particles from "react-particles-js";

class App extends React.Component {
  render() {
    return (
      <>
        <Particles
          className="test"
          params={{
            particles: {
              number: {
                value: 50
              },
              size: {
                value: 3
              }
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse"
                }
              }
            }
          }}
        />
        <div>ok</div>
        <input />
        <h1>hello particle</h1>
        <div>ok</div>
        <div>ok</div>
        <input />
        <h1>hello particle</h1>
        <div>ok</div>
        <div>ok</div>
        <input />
        <h1>hello particle</h1>
        <div>ok</div>
        <div>ok</div>
        <input />
        <h1>hello particle</h1>
        <div>ok</div>
        <div>ok</div>
        <input />
        <h1>hello particle</h1>
        <div>ok</div>
        <div>ok</div>
        <input />
        <h1>hello particle</h1>
        <div>ok</div>
        <div>ok</div>
        <input />
        <h1>hello particle</h1>
        <div>ok</div>
        <div>ok</div>
        <input />
        <h1>hello particle</h1>
        <div>ok</div>
        <div>ok</div>
        <input />
        <h1>hello particle</h1>
        <div>ok</div>
        <div>ok</div>
        <input />
        <h1>hello particle</h1>
        <div>ok</div>
      </>
    );
  }
}

export default App;
