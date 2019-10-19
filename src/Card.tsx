import React from "react";
import styled from "styled-components";

const Wrapper = styled("div")`
  width: 500px;
  height: 500px;
  border: green solid 2px;
  display: flex;
  flex-direction: column;
`;

const Inside = styled("div")`
  width: 100px;
  height: 100px;
  border: red solid 2px;
  flex-grow: 1;
`;

const Inside1 = styled("div")`
  width: 100px;
  height: 100px;
  border: blue solid 2px;
  flex-grow: 2;
  transition: 0.2s;
  &:hover {
    background: lightblue;
  }
`;

interface CardParams {
  text: string;
}

export default class Card extends React.Component<
  CardParams,
  { text1: string }
> {
  constructor(props) {
    super(props);

    this.changestate = this.changestate.bind(this);
  }
  componentWillMount() {
    this.setState({
      text1: "applesauce"
    });
  }

  changestate() {
    this.setState({
      text1: "apple"
    });
  }

  render() {
    return (
      <>
        <Wrapper>
          <Inside></Inside>
          <Inside1></Inside1>
          <p>{this.state.text1}</p>
        </Wrapper>
      </>
    );
  }
}
