import { React, Component } from "react";
import StarRatings from "react-star-ratings";

class stars extends Component {
  state = { rating: 4 };
  changeRating(newRating, name) {
    this.setState({ rating: 1 });
  }
  setNewRating = (newRating) => {
    this.setState({ rating: newRating });
  };
  render() {
    // rating = 2;
    return (
      <StarRatings
        rating={this.props.value}
        starRatedColor="#044e4e"
        changeRating={this.props.changeValue}
        numberOfStars={5}
        name="rating"
        starDimension="16px"
        starHoverColor="rgb(4,150,255)"
        style={{ marginBottom: "0.5em" }}
        starSpacing="3px"
      />
    );
  }
}

export default stars;
