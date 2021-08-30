import React from 'react';

const images = [
  '../../javascript-carousel/images/001.png',
  '../../javascript-carousel/images/007.png',
  '../../javascript-carousel/images/004.png',
  '../../javascript-carousel/images/025.png',
  '../../javascript-carousel/images/039.png'
];

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      photo: 'https://cdn.vox-cdn.com/thumbor/heXu37IbDvVy6Qbo1wbPjNvi6Ys=/0x0:712x423/1200x800/filters:focal(385x120:497x232)/cdn.vox-cdn.com/uploads/chorus_image/image/55531035/Screen_Shot_2017_06_30_at_3.17.00_PM.0.png'
    };
    this.goToNextSlide = this.goToNextSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.handleDot = this.handleDot.bind(this);
  }

  componentDidMount() {
    setInterval(this.goToNextSlide, 3000);
  }

  goToPrevSlide() {
    let index = this.state.activeIndex;
    const length = images.length; if (index < 1) {
      index = length - 1;
    } else {
      index--;
    } this.setState({
      activeIndex: index
    });
  }

  goToNextSlide() {
    let index = this.state.activeIndex;
    const length = images.length; if (index === length - 1) {
      index = 0;
    } else {
      index++;
    } this.setState({ activeIndex: index });
  }

  handleDot(index) {
    this.setState({ activeIndex: index });
  }

  render() {
    function Image(props) {
      const url = props.url;
      return (
        <img src={url}></img>
      );
    }

    return (
      <div>
        <div className="row justify-center align-center height">
        <div className="border row justify-center wrap">
          <div className="column align-self-center flex-basis">
            <div onClick={this.goToPrevSlide} className="row justify-center">
              <i className="arrow fas fa-chevron-circle-left"></i>
          </div>
          </div>
          <div className="column align-self-center flex-basis">
            <div className="row">
                <Image url={images[this.state.activeIndex]} />
            </div>
            </div>
            <div className="column align-self-center flex-basis">
              <div className="row justify-center">
                <i onClick={this.goToNextSlide} className="arrow fas fa-chevron-circle-right"></i>
              </div>
          </div>
          <div className="row justify-center margin-10 align-self-center">
            {
              images.map((image, index) => {
                return (<i key={index} onClick={() => this.handleDot(index)} className={`margin-left-5 ${this.state.activeIndex === index ? 'fas' : 'far'} fa-circle`}></i>);
              })
            }
            </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Carousel;
