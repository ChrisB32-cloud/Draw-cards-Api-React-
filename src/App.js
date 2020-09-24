import React, { Component } from 'react';
import './App.css';
import PlayingCard from './PlayingCard';
import axios from 'axios'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      deckID: '',
      cardCount: '',
      cardImg: [],
      cardSuit: [],
      cardValue: [],

    }

    this.handleClick = this.handleClick.bind(this)
  }

  async componentDidMount() {
    const responce = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle")

    this.setState({
      deckID: responce.data.deck_id,
      cardCount: responce.data.remaining,

    })


    // const callDeck = localStorage.getItem('deck') === 0 ? '' : localStorage.getItem('deck');
    // const callCount = localStorage.getItem('count') === '' ? '' : localStorage.getItem('count');
    // const callImg = localStorage.getItem('img') === [] ? [] : [localStorage.getItem('img')];
    // const callSuit = localStorage.getItem('suits') === [] ? [] : [localStorage.getItem('suits')];
    // const callValue = localStorage.getItem('values') === [] ? [] : [localStorage.getItem('values')];

    // const iterateCallImg = callImg.map(img => img)



    // console.log(callDeck);
    // console.log(callCount);
    // console.log(callImg);
    // console.log(callSuit);
    // console.log(callValue);

    // this.setState({
    //   deckID: callDeck,
    //   cardCount: callCount,
    //   cardImg: callImg,
    //   cardSuit: callSuit,
    //   cardValue: callValue
    // })


  }
  // async handleClick() {
  // const request = await axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw/`)

  // let dataApi = request.data.cards[0]

  // // console.log(request.data.cards);

  // this.setState({
  //   cardCount: this.state.cardCount - 1,
  //   cardImg: [...this.state.cardImg, dataApi.images.png],
  //   // cardImg: [dataApi.images.png],
  //   cardSuit: [...this.state.cardSuit, dataApi.suit],
  //   cardValue: [...this.state.cardValue, dataApi.value]

  // })

  // const { deckID, cardCount, cardImg, cardSuit, cardValue } = this.state



  // localStorage.setItem('deck', deckID)
  // localStorage.setItem('count', cardCount)
  // localStorage.setItem('img', cardImg)
  // localStorage.setItem('suits', cardSuit)
  // localStorage.setItem('values', cardValue)
  // }

  async handleClick() {
    try {
      const request = await axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw/`)

      let dataApi = request.data.cards[0]

      console.log(request.data.cards);

      // Theres a better way to do this. 
      // Need to rework state

      if (request.data.remaining === 0) {
        throw new Error("No Cards left")
      }

      this.setState({
        cardCount: this.state.cardCount - 1,
        cardImg: [...this.state.cardImg, dataApi.images.png],
        // cardImg: [dataApi.images.png],
        cardSuit: [...this.state.cardSuit, dataApi.suit],
        cardValue: [...this.state.cardValue, dataApi.value]

      })

      const { deckID, cardCount, cardImg, cardSuit, cardValue } = this.state



      localStorage.setItem('deck', deckID)
      localStorage.setItem('count', cardCount)
      localStorage.setItem('img', cardImg)
      localStorage.setItem('suits', cardSuit)
      localStorage.setItem('values', cardValue)
    } catch (error) {
      //
    }
  }


  componentDidUpdate() {

    // const { deckID, cardCount, cardImg, cardSuit, cardValue } = this.state

    // //
    // localStorage.setItem('deck', deckID)
    // localStorage.setItem('count', cardCount)
    // localStorage.setItem('img', cardImg)
    // localStorage.setItem('suits', cardSuit)
    // localStorage.setItem('values', cardValue)


  }



  render() {
    // console.log(this.state.deckID);
    // console.log(this.state.cardCount);
    // console.log(this.state.cardImg);

    // May be a better Idea to put the map() here 
    // than in the PLayingCard Component

    return (
      <div className="App">
        {/* <h1>Main Component</h1> */}
        <PlayingCard passClick={this.handleClick} img={this.state.cardImg} suit={this.state.cardSuit} value={this.state.cardValue} count={this.state.cardCount} />
      </div>
    );
  }
}

export default App;


// async componentDidUpdate() {
  //   const request = await axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw/`)

  //   let dataApi = request.data.cards[0]

  //   console.log(dataApi);

  //   this.setState({
  //     // cardImg: [...this.state.cardImg, dataApi.image]
  //   })


  // }


  //
  // }