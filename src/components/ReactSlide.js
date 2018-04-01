import React, {Component} from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './slider.scss';

const content = [
  {
    title: 'Vulputate Mollis Ultricies Fermentum Parturient',
    description:
    'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
    button: 'Read More',
    image: 'https://i.imgur.com/ZXBtVw7.jpg',
    user: 'Luan Gjokaj',
    userProfile: 'https://i.imgur.com/JSW6mEk.png'
  },
  {
    title: 'Tortor Dapibus Commodo Aenean Quam',
    description:
    'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
    button: 'Discover',
    image: 'https://i.imgur.com/DCdBXcq.jpg',
    user: 'Erich Behrens',
    userProfile: 'https://i.imgur.com/0Clfnu7.png'
  },
  {
    title: 'Phasellus volutpat metus',
    description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
    button: 'Buy now',
    image: 'https://i.imgur.com/DvmN8Hx.jpg',
    user: 'Bruno Vizovskyy',
    userProfile: 'https://i.imgur.com/4KeKvtH.png'
  }
];

export default class slider extends Component {
  render() {
    return (
      <div>
          <div className="wrapper">
            <h1>react-animated-slider</h1>
            <p>
              <a href="https://circleci.com/gh/erichbehrens/react-animated-slider/tree/master"><img src="https://circleci.com/gh/erichbehrens/react-animated-slider/tree/master.svg?style=shield" alt="CircleCI" /></a>
              <a href="https://www.npmjs.com/package/react-animated-slider"><img src="https://img.shields.io/npm/v/react-animated-slider.svg" alt="version" /></a>
              <a href="https://www.npmjs.com/package/react-animated-slider"><img src="https://img.shields.io/npm/dt/react-animated-slider.svg" alt="downloads" /></a>
              <a href="https://github.com/erichbehrens/react-animated-slider"><img src="https://img.shields.io/github/stars/erichbehrens/react-animated-slider.svg?style=social&amp;label=Stars" /></a>
            </p>
          </div>
          <Slider className="slider-wrapper">
            {content.map((item, index) => (
              <div
                key={index}
                className="slider-content"
                style={{ background: `url('${item.image}') no-repeat center center` }}
              >
                <div className="inner">
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  <button>{item.button}</button>
                </div>
                <section>
                  <img src={item.userProfile} alt={item.user} />
                  <span>
                    Posted by <strong>{item.user}</strong>
                  </span>
                </section>
              </div>
            ))}
          </Slider>
        </div>
    )
  }
}