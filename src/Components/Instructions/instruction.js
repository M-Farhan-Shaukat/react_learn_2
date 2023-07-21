import React, { Component } from "react";
import Emoji from './laughing-emoji-svgrepo-com.svg'
import './Instruction.css'
export default class Instructions extends Component {
  render() {
    return (
      <div className="instructions">
        <img alt="laughing crying emoji" src={Emoji} />
        <p>Click on an Emoji to View their Name </p>
      </div>
    );
  }
}
