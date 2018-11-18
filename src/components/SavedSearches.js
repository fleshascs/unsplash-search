import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { unsplashActions } from "../_actions";

const Item = styled.div`
  border: 1px solid #bfbfbf;
  padding: 3px 10px;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;

  ${Item} + ${Item} {
    margin-left: 10px;
  }
`;

class SavedSearches extends Component {
  render() {
    return (
      <Container>
        {this.props.history.map(item => (
          <Item onClick={() => this.handleClick(item)} key={item}>
            {item}
          </Item>
        ))}
      </Container>
    );
  }

  handleClick = item => {
    const { dispatch } = this.props;
    const input = document.querySelector(".searchInput");

    input.value = item;
    dispatch(unsplashActions.search(item));
  };
}

function mapStateToProps(state) {
  const { history } = state.searchHistory;
  return {
    history
  };
}

export default connect(mapStateToProps)(SavedSearches);
