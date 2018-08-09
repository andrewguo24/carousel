import React from 'react';
import './index.css';

export default class App extends React.Component {
    state = {
        activeIndex: 0,
        imgUrl: [
            "https://www.qantas.com/images/qantas/miscellaneous/map-world-pins-ports/jpg/homepagepromotion.desktop.jpg",
            "https://www.qantas.com/images/qantas/destinations/australia/perth-boat-house-jetty-sunset/jpg/homepagepromotion.desktop.jpg",
            "https://www.qantas.com/images/qantas/merchandising/girl-in-venice-square/jpg/homepagepromotion.desktop.jpg"
        ],
        array: [0, 1, 2],
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 5000);
    }

    tick() {
        let {activeIndex, imgUrl} = this.state;
        this.setState({
            activeIndex: (activeIndex + 1) % imgUrl.length
        });
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const {activeIndex, imgUrl, array} = this.state;
        return (
            <div>
                <img src={imgUrl[activeIndex]} className="pic" />
                {array.map((item, index) => {
                    return <button key={index} className={"control-btn" + (activeIndex === index ? 'active-btn' : '') }></button>
                })}
            </div>
        );
    }
}