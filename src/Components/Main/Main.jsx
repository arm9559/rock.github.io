import React , { Component } from 'react';
import main from './main.scss'

import rock from "../Images/rock.png"
import paper from "../Images/paper.png"
import scissor from "../Images/scissors.png"

import Cart from "./Cart"
export default class Main extends Component {

    state = {
        showCart: false,
        imgFirst:0,
        imgSecond:0,
        imgThird:0,
        resultFirst:0,
        resultSecond:0,
        resultThird:0
      };

    showCartHandle = () => {
        this.setState({
          showCart: !this.state.showCart
        });
      };
      startGameHandle = () => {
        const images = [rock,paper,scissor]
                let randomImages = Math.floor(Math.random() * images.length);
                let getItemsContainer = document.querySelector(".random-item")
                getItemsContainer.style.backgroundSize = "contain"
                getItemsContainer.style.background = `url(${images[randomImages]})`;


                let style = document.querySelector(".random-item").backgroundImage
                    let firstImage = `url(${images[0]})`;
                    let secondImage = `url(${images[1]})`;
                    let thirdImage = `url(${images[2]})`;
                        console.log(firstImage)

    }
    render(){
        return(
            <main className="container-fluid">
                <div className="main-child container">
                    <div className="player-container container"></div>
                    <div className="random-item container"></div>
                </div>
                <Cart show={this.state.showCart}/>
                <div className="buttons-bar container-fluid">
                    <button className="btn btn-primary start" onClick={this.showCartHandle}>Set Item</button>
                    <button className="btn btn-warning start start-game" onClick={this.startGameHandle}>Start Game</button>
                </div>
            </main>
        )
    }
}