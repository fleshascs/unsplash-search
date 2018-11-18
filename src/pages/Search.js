import React, { Component } from "react";
import styled from "styled-components";
import SearchInput from "../components/SearchInput";
import ImagesGrid from "../components/ImagesGrid";
import SavedSearches from "../components/SavedSearches";

const Container = styled.div`
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
const Row = styled.div`
  display: flex;
  @media (max-width: 700px) {
    display: block;
  }
`;

class Search extends Component {
  render() {
    return (
      <Container>
        <SearchInput />
        <Row>
          <LeftColumn>
            <ImagesGrid />
          </LeftColumn>
          <RightColumn>
            <SavedSearches />
          </RightColumn>
        </Row>
      </Container>
    );
  }
}

export default Search;
