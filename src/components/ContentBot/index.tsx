import { useEffect, useState } from "react"

import { 
    Container,
    Content,
    Buttons,
    MenuOptions,
    Option,
    ContentImage
} from "@/styles/components/ContentBot/styles"
import Galery from "../Galery"

import Image from "next/image"
import ImgBot from "../../assets/img/air-max-pre-day-se-shoes-RLpZQ3.png"
import ImgBotNike from "../../assets/img/air-max-pre-day.png"

import { bots } from "./data/bots"

type PropsTypes ={
    id: Number,
    title: String,
    description: String,
    price: String,
    photoMain: String,
    photoSecundary1: String,
    photoSecundary2: String,
    photoSecundary3: String,
}

export default function ContentBot(){

    const [active, setActive] = useState(0)
    const [botSelected, setBotSelected] = useState<PropsTypes>()

    useEffect(() => {
        setBotSelected(bots[active])
    }, [active])

    return(
        <Container>
            
            <MenuOptions>
                <Option 
                    onClick={() => setActive(0)}
                    className={active == 0 ? 'active' : ''}
                >
                    1
                </Option>
                <Option 
                    onClick={() => setActive(1)}
                    className={active == 1 ? 'active' : ''}
                >
                    2
                </Option>
                <Option 
                    onClick={() => setActive(2)}
                    className={active == 2 ? 'active' : ''}
                >
                    3
                </Option>
            </MenuOptions>
            <Content>
                <h1> {botSelected?.title} </h1>
                <p> {botSelected?.description} </p>
                <Buttons>
                    <button>Buy</button>
                    <button className="transparent"> 
                        {botSelected?.price}
                    </button>
                </Buttons>
            </Content>
            <ContentImage>
                <Image src={ImgBotNike} alt="Tênis Nike"/>
                <Galery/>
            </ContentImage>
        </Container>
    )
}