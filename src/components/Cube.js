import React, { Component } from 'react';
import './Cube.css';

const cube_faces = ['react', 'js', 'html', 'java', 'css', 'python'];

export default class Cube extends Component {
  render() {
    return (
      <div className="cube_wrapper">
        <div
          className="cube"
          style={{ animationPlayState: this.props.playing }}
        >
          {cube_faces.map((face) => (
            <Cubeface logo={face} key={face} />
          ))}
        </div>
      </div>
    );
  }
}

class Cubeface extends Component {
  render() {
    return (
      <div className="cube_face">
        <img
          src={require(`static/cube/${this.props.logo}.png`).default}
          alt={`${this.props.logo}`}
        />
      </div>
    );
  }
}
