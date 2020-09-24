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
        // console.log(this.props.count);

        const cards = this.props.img.map((m, idx) => (
            <img src={m} key={idx} alt={`${this.props.value} of ${this.props.suit}`} />
        ))

        return (
            <div>
                {this.props.count === 0 ? <div>
                    <p>No More Cards</p> <br></br> <br></br>
                    {cards}
                </div> : <div>
                        <button className='dealButton' onClick={this.handleNewClick} >DEAL CARD</button>
                        <br />
                        <br />
                        <p>{cards}</p>
                    </div>}
            </div>
        );
    }
}

export default PlayingCard;