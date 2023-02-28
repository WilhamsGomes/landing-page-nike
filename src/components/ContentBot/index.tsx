import { useState } from "react"

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


export default function ContentBot(){

    const [active, setActive] = useState(1)

    return(
        <Container>
            <MenuOptions>
                <Option 
                    onClick={() => setActive(1)}
                    className={active == 1 ? 'active' : ''}
                >
                    1
                </Option>
                <Option 
                    onClick={() => setActive(2)}
                    className={active == 2 ? 'active' : ''}
                >
                    2
                </Option>
                <Option 
                    onClick={() => setActive(3)}
                    className={active == 3 ? 'active' : ''}
                >
                    3
                </Option>
            </MenuOptions>
            <Content>
                <h1>Nike Air Max Pre-Day Pure Platinum</h1>
                <p>La marque au Swoosh a décidé d’embellir l’été de ses aficionados en dévoilant une nouvelle version de sa Air Max avec le coloris Pure Platinum.
                <br/> <br/>
                La Nike Air Max Pre-Day Pure Platinum adopte une base en mesh blanc qui est agrémentée par des empiècements en suède gris clair au niveau du panel et du mudguard. Le Swoosh latéral se pare de blanc et s’accorde à merveille avec les lacets et la midsole. Le tout repose sur l’emblématique Air-Sol de la Air Max 1..</p>
                <Buttons>
                    <button>Comprar</button>
                    <button>Comprar</button>
                </Buttons>
            </Content>
            <ContentImage>
                <Image src={ImgBotNike} alt="Tênis Nike"/>
                <Galery/>
            </ContentImage>
        </Container>
    )
}