import React, { Component } from 'react'
import rock from "../Images/rock.png"
import paper from "../Images/paper.png"
import scissor from "../Images/scissors.png"
import main from "./main.scss"
export default class Cart extends Component {
    firstImageClick = ()=>{
        let get = document.querySelector(".player-container")
            get.style.background = `url(${rock})`
            get.style.backgroundSize = "cover"
            get.setAttribute("title","rock")       

            this.setState({
                imgFirst:5
            })
            console.log(this.state)
    }
    secondImageClick = ()=>{
        let get = document.querySelector(".player-container")
            get.style.background = `url(${paper})`
            get.style.backgroundSize = "cover"
            get.setAttribute("title","paper")       
    }
    thirdImageClick = ()=>{
        let get = document.querySelector(".player-container")
            get.style.background = `url(${scissor})`
            get.style.backgroundSize = "cover"
            get.setAttribute("title","scissor")       
    }
    render() {
        return (
                <div className={`items-container ${this.props.show ? "showContainer" : "hideContainer"}`} title="">
                    <img src={rock} alt="rock" title="rock" onClick={this.firstImageClick} className="img-fluid"/>
                    <img src={paper} alt="paper" title="paper" onClick={this.secondImageClick} className="img-fluid"/>
                    <img src={scissor} alt="scissor" title="scissor" onClick={this.thirdImageClick} className="img-fluid"/>
                </div>
        )
    }
}
