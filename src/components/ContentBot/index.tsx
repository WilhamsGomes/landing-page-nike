import { 
    Container,
    Content,
    Buttons
} from "@/styles/components/ContentBot/styles"
import Image from "next/image"
import ImgBot from "../../assets/img/air-max-pre-day-se-shoes-RLpZQ3.png"

export default function ContentBot(){
    return(
        <Container>
            <Content>
                <h1>Nike Air Max Pre-Day</h1>
                <p>It s the perfect mix: a splash of heritage Nike running and a whole lot of comfort. The fast-paced look also includes a revamped Air unit window to energize your every step. Knit and synthetic leather upper features straight-edge cuts—meaning less waste. It s the perfect mix: a splash of heritage Nike running and a whole lot of comfort. The fast-paced look also includes a revamped Air unit window to energize your every step. Knit and synthetic leather upper features straight-edge cuts—meaning less waste.</p>
                <Buttons>
                    <button>Comprar</button>
                    <button>Comprar</button>
                </Buttons>
            </Content>
            <Image src={ImgBot} alt="Tênis Nike"/>
        </Container>
    )
}