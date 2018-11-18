import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto;

  @media (max-width: 700px) {
    display: block;
  }
`;
const Img = styled.img`
  width: 200px;
  height: 200px;
  margin: 10px;

  @media (max-width: 700px) {
    width: 100%;
    height: auto;
    margin: 0px;
  }
`;

const Image = props => <Img src={props.src} />;

class ImagesGrid extends Component {
  render() {
    const images = this.props.results || [];
    const { loading } = this.props;

    return (
      <Container>
        {loading ? "loading..." : null}
        {!images.length && !loading ? "no results" : null}
        {images.map(img => (
          <Image src={img.urls.small} key={img.id} />
        ))}
      </Container>
    );
  }
}

function mapStateToProps(state) {
  const { results, loading } = state.unsplashImages;
  return {
    results,
    loading
  };
}

export default connect(mapStateToProps)(ImagesGrid);
