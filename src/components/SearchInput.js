import React, { Component } from "react";
import styled from "styled-components";
import { unsplashActions } from "../_actions";
import { connect } from "react-redux";

const Container = styled.div`
  display: flex;
  width: 100%;
`;
const LeftColumn = styled.div`
  flex: 1;
  padding: 3rem;
  @media (max-width: 700px) {
    padding: 5px;
  }
`;
const RightColumn = styled.div`
  min-width: 35rem;
  padding: 3rem;
  @media (max-width: 700px) {
    min-width: auto;
    padding: 5px;
  }
`;
const Input = styled.input`
  padding: 10px;
  width: 100%;
`;
const Button = styled.button`
  padding: 10px;
  width: 100%;

  & + & {
    margin-left: 10px;
  }
`;
const Row = styled.div`
  display: flex;
`;

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };

    this.searchInput = React.createRef();
  }

  render() {
    return (
      <Container>
        <LeftColumn>
          <Input
            onChange={this.handleChange}
            placeholder="Search text"
            className="searchInput"
          />
        </LeftColumn>
        <RightColumn>
          <Row>
            <Button onClick={this.handleSearch}>Search</Button>
            <Button onClick={this.handleSave}>Save</Button>
          </Row>
        </RightColumn>
      </Container>
    );
  }

  handleChange = e => {
    const query = e.target.value;
    this.setState({ query });
  };

  handleSearch = () => {
    if (!this.state.query) return;
    const { dispatch } = this.props;
    dispatch(unsplashActions.search(this.state.query));
  };

  handleSave = () => {
    if (!this.state.query) return;
    const { dispatch } = this.props;
    dispatch(unsplashActions.addToHistory(this.state.query));
  };
}

export default connect()(Search);
