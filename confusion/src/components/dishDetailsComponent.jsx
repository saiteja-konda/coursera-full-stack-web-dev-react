import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class DishDetailComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  renderDish(dish) {
    console.log(dish.name);
    return (
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }

  renderComments(dish) {
    //  console.log(dish.commments);
    const commentSection = dish.map((comments) => {
      if (comments) {
        return (
          <li key={comments.id}>
            {comments.comment}
            <br />
            <br /> ---
            {comments.author} ,
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "2-digit",
            }).format(new Date(comments.date))}
            <br />
            <br />
          </li>
        );
      } else return <div></div>;
    });

    return (
      <div>
        <h4>Comments</h4>
        <ul className="list-unstyled">{commentSection}</ul>
      </div>
    );
  }

  render() {
    if (this.props.dish) {
      return (
        <div className="row">
          <div className="col-12 col-md-6 mt-3">
            {this.renderDish(this.props.dish)}
          </div>
          <div className="col-12 col-md-6 mt-3">
            {this.renderComments(this.props.dish.comments)}
          </div>
        </div>
      );
    } else return <div></div>;
  }
}

export default DishDetailComponent;
