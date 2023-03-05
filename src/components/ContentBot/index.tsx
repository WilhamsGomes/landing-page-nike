import { useEffect, useState, useContext } from "react"

import { 
    Container,
    Content,
    Buttons,
    MenuOptions,
    Option,
    ContentImage,
    WrapperContent
} from "@/styles/components/ContentBot/styles"
import Galery from "../Galery"

import Image from "next/image"

import ImgBotAirMax from "../../assets/img/air-max-pre-day.png"
import ImgBotAirForce from "../../assets/img/air-force-1.png"
import ImgBotAirForceLow from "../../assets/img/air-force-1-low.png"

import { CartContext } from "@/context/cart"

import { bots } from "./data/bots"

type PropsTypes ={
    id: number,
    title: string,
    description: string,
    price: number,
}

export default function ContentBot(){

    const [active, setActive] = useState(0);
    const [botSelected, setBotSelected] = useState<PropsTypes>();
    const { cart, addProduct, handleCart, expandCart } = useContext(CartContext);

    useEffect(() => {
        setBotSelected(bots[active])
    }, [active])

    return(
        <Container>    
            <WrapperContent>
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
                        <button
                            onClick={ () =>{ addProduct(botSelected?.id || 0) }}
                        >
                            Buy
                        </button>
                        <button className="transparent"> 
                            U$ {botSelected?.price}
                        </button>
                    </Buttons>
                </Content>
            </WrapperContent>    
            <ContentImage>
                {active == 0 && <Image className="photo-main" src={ImgBotAirMax} alt={botSelected?.title || 'Bot Nike'}/>}
                {active == 1 && <Image className="photo-main" src={ImgBotAirForce} alt="Tênis Nike"/>}
                {active == 2 && <Image className="photo-main" src={ImgBotAirForceLow} alt="Tênis Nike"/>}
                <Galery bot={active}/>
            </ContentImage>
        </Container>
    )
}