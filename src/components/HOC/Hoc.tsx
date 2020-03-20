import * as React from "react";

const newData = {
  data: "Data from HOC..."
};

var MyHOC = ComposedComponent =>
  class extends React.Component {
    componentDidMount() {
      this.setState({
        data: newData.data
      });
    }
    render() {
      return <ComposedComponent {...this.props} {...this.state} />;
    }
  };
export class HOC extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>{this.props.children}</h1>
      </div>
    );
  }
}

export default MyHOC(HOC);
