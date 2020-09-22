import React, { Component } from 'react';
import './PlayingCard.css'

class PlayingCard extends Component {

    constructor(props) {
        super(props)

        this.handleNewClick = this.handleNewClick.bind(this)
    }

    handleNewClick() {
        this.props.passClick()
    }


    render() {
        // console.log(this.props.img);

        const cards = this.props.img.map((m, idx) => (
            <img src={m} key={idx} alt={`${this.props.value} of ${this.props.suit}`} />
        ))

        return (
            <div>
                {/* <h2>Card Component</h2> */}
                <button className='dealButton' onClick={this.handleNewClick} >DEAL CARD</button>
                <br />
                <br />
                {/* <img src={this.props.img} alt={`${this.props.value} of ${this.props.suit}`} /> */}
                <p>{cards}</p>
            </div>
        );
    }
}

export default PlayingCard;