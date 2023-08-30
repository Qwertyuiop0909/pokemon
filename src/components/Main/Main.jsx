import axios from "axios"
import { useEffect, useState } from "react"
import { Button } from "@mui/material"
import MyButton from "../MyButton/Mybutton"
import { Api } from "../../api/api"
import MyCard from "../Card/Card"
import "./styles.css"

export default function Main () {
    const [ cards, setCards ] = useState([])
    const [ currentCard, setCurrentCard ] = useState("")

    useEffect(() => {
        Api.getCards()
        // .then(res => console.log(res))
            .then((res) => setCards(res.data.results))
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const handleClick = (url) => {
        console.log(url)
        setCurrentCard(url)
    }

    return(
        <div className="main">
            <div className="main__buttons">
                {cards?.map((card, i) => <MyButton key={i} card={card} cb={handleClick}/>)}
            </div>
            <div className="main_content">
                <MyCard url={currentCard}/>
            </div>
        </div>
    )
}