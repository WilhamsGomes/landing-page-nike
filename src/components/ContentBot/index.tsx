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

import ImgBotAirMax from "../../assets/img/air-max-pre-day.png"
import ImgBotAirForce from "../../assets/img/air-force-1.png"
import ImgBotAirForceLow from "../../assets/img/air-force-1-low.png"

import { bots } from "./data/bots"

type PropsTypes ={
    id: Number,
    title: string,
    description: string,
    price: string,
}

export default function ContentBot(){

    const [active, setActive] = useState(0)
    const [botSelected, setBotSelected] = useState<PropsTypes>()

    useEffect(() => {
        setBotSelected(bots[active])
    }, [active])

    return(
        <Container>    
            <MenuOptions active={active}>
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
            <Content active={active}>
                <h1> {botSelected?.title} </h1>
                <p> {botSelected?.description} </p>
                <Buttons active={active}>
                    <button>Buy</button>
                    <button className="transparent"> 
                        {botSelected?.price}
                    </button>
                </Buttons>
            </Content>
            <ContentImage>
                {active == 0 && <Image src={ImgBotAirMax} alt={botSelected?.title || 'Bot Nike'}/>}
                {active == 1 && <Image src={ImgBotAirForce} alt="Tênis Nike"/>}
                {active == 2 && <Image src={ImgBotAirForceLow} alt="Tênis Nike"/>}
                <Galery bot={active}/>
            </ContentImage>
        </Container>
    )
}