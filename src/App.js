import React, { Component } from "react";
import "./App.css";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "black",
      italic: false,
      underline: false,
      bold: false
    };
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor(color) {
    this.setState({ color: color });
  }
  italic() {
    if (this.state.italic === false) {
      this.setState({ italic: "italic" });
    } else {
      this.setState({ italic: false });
    }
  }
  bold() {
    if (this.state.bold) {
      this.setState({ bold: false });
    } else {
      this.setState({ bold: "bold" });
    }
  }
  underline() {
    if (this.state.underline) {
      this.setState({ underline: false });
    } else {
      this.setState({ underline: "underline" });
    }
  }
  shaded(style) {
    if (this.state[style]) {
      return "blue";
    }
    return "";
  }
  render() {
    let stylings = ["bold", "italic", "underline"];
    let colors = ["yellow", "blue", "red", "black", "purple"];

    let stylingBoxes = stylings.map(style => {
      return (
        <button
          onClick={() => this[style]()}
          style={{ backgroundColor: this.shaded(style) }}
          key={style}
        >
          {style}
        </button>
      );
    });

    let colorBoxes = colors.map(color => {
      return (
        <button
          onClick={() => this.changeColor(color)}
          style={{ backgroundColor: color, height: 30, width: 30 }}
          key={color}
        />
      );
    });

    return (
      <div className="App">
        <br />
        {stylingBoxes}
        <br />
        <br />
        <textarea
          style={{
            color: this.state.color,
            ...styles[this.state.bold],
            ...styles[this.state.italic],
            ...styles[this.state.underline]
          }}
        />
        <br />
        {colorBoxes}
      </div>
    );
  }
}

export default App;
