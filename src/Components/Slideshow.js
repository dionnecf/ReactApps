import React from "react";
import "./Slideshow.css";

const NUMBER_OF_PICTURES = 7;

export class Slideshow extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPictureNumber: 1
    };

    setInterval(this.changePicture, 5000);
  }

  changePicture = () => {
    if (this.state.currentPictureNumber === NUMBER_OF_PICTURES) {
      this.setState({
        currentPictureNumber: 1
      });
    } else {
      this.setState({
        currentPictureNumber: this.state.currentPictureNumber + 1
      });
    }
  };
  renderPictures() {
    const pictures = [];

    for (let i = 1; i <= NUMBER_OF_PICTURES; i++) {
      const url = "/photo${i}.jpg";
      const className = this.state.currentPictureNumber;
      pictures.push(<img className={className} src={url} />);
    }
  }
  render() {
    return (
      //<h1>Slideshow component</h1>

      <div className="Slideshow">{this.renderPictures()}</div>
    );
  }
}
