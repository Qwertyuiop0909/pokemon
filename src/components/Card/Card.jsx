import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Api } from "../../api/api";
import { getWordByAmmouth } from "../../helpers/functions";

export default function MyCard ({url}) {
    const [card, setCard] = useState(null)
    useEffect(() => {
        if (url) {
            Api.getCurrentCard(url)
                // .then(res => console.log(res))
                .then(res => setCard(res.data))
        }
    }, [url])
    return(
        <>
            {card&& 
            <Card sx={{
                "border-radius": "0",
                display: "flex",
                height: "500px",
                padding: "44px",
                background: "black",
                color: "var(--light-gray-for-text, #A0A0A0);",
            }}>
                <CardContent sx={{
                    display: "flex",
                    "flex-direction": "column",
                    "text-align": "start",
                    gap: "40px",
                }}>
                    <Typography sx={{
                        "font-size": "48px",
                        "font-weight": 700,
                    }}variant="h5" component="div">
                        {card?.name}
                    </Typography>
                    <div className="img__wrapper">
                        <CardMedia
                            component="img"
                            image={card?.sprites.front_default}
                            alt="Card"
                            sx={{
                                // padding: "22px 150px",
                                // width: "192px",
                                "fit-content": "object-fit",
                            }}
                        />
                    </div>
                    <div>
                        <Typography variant="body2" component="div">
                            Снялся в {getWordByAmmouth(card?.moves?.length || 0)}
                        </Typography>
                        <Typography variant="body2" component="div">
                            id: {card?.id}
                        </Typography>
                        <Typography variant="body2" component="div">
                            height: {card?.height}
                        </Typography>
                        <Typography variant="body2" component="div">
                            attack: {card?.stats.find((el) => el.stat.name === 'attack').base_stat}
                        </Typography>
                    </div>
                    
                </CardContent>
            </Card>
        }
        </>
        
    )
}