const Input = props => {
  return React.createElement("input", {
    onChange: props.onChangeFunction,
    type: "text",
    value: props.internalWord
  });
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { word: "Hello World" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ word: e.target.value });
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(Input, {
        internalWord: this.state.word,
        onChangeFunction: this.handleChange
      }),
      React.createElement(Input, {
        internalWord: this.state.word,
        onChangeFunction: this.handleChange
      })
    );
  }
}

const domContainer = document.querySelector("#ReactApp");

//ReactDOM.render(<App />, domContainer);
ReactDOM.render(React.createElement(App, null), domContainer);
