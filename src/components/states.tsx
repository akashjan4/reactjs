import * as React from "react";
interface IProps {}

interface IState {
  answer?: string;
}
export class StateComponent extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      answer: "yes"
    };
  }

  changeState = () => {
    this.setState(prevState => {
      let answer = "yes";
      if (prevState.answer === "yes") {
        answer = "no";
      }

      return {
        answer
      };
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.changeState}>change</button>
        <h1>Do you have an answer? {this.state.answer}</h1>
      </div>
    );
  }
}
