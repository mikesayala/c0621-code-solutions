import React from 'react';

const topics = [
  {
    title: 'PICKLE RICK', text: 'Come on, flip the pickle, Morty. Youre not gonna regret it. The payoff is huge. I turned myself into a pickle, Morty! Boom! Big reveal: Im a pickle. What do you think about that. I turned myself into a pickle. what are you just staring at me for, bro. I turned myself into a pickle.'
  },
  {
    title: 'WUBBA LUBBA', text: 'Dont be a baby! You avoid getting shot in real life all the time, Morty! Just do the same thing here and well be fine! Go home and drink, grandpa.'
  },
  {
    title: 'DUB DUB', text: ' Yeah. I can prove it mathematically. Actually, l-l-let me grab my whiteboard. This has been a long time coming, anyways.'
  }
];

function TopicItems(props) {
  return (
  <div>
    <div onClick={() => { props.handleHide(props.index); }} className="header row justify-center align-center">
      <h4>{props.title}</h4>
    </div>
    <div className={`content row justify-center align-center ${props.shownIndex === props.index ? '' : 'hidden'}`}>
      <p>
        {props.description}
      </p>
      </div>
  </div>
  );
}

const listItems = (handleHide, shownIndex) => {
  return topics.map((topic, index) =>
  <TopicItems
  handleHide={handleHide}
  key={index}
  index={index}
  title={topic.title}
  description={topic.text}
  shownIndex={shownIndex}
/>
  );
};

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: false,
      shownIndex: null
    };
    this.handleHide = this.handleHide.bind(this);
  }

  handleHide(index) {
    const shownIndex = this.state.shownIndex;
    if (shownIndex === index) {
      this.setState({ shownIndex: null });
    } else {
      this.setState({ shownIndex: index });
    }
  }

  render() {
    const { shownIndex } = this.state;
    return (
     <div>
       <div className="container">
        <div>
        </div>
        <div>
            {listItems(this.handleHide, shownIndex)}
        </div>
       </div>
     </div>
    );
  }
}

export default Accordion;
