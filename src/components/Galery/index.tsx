import {
    Container,
    DivPhoto
} from "@/styles/components/Galery"

import Image from "next/image"
import { useEffect } from "react"

import ImgDetailsNike01 from "../../assets/img/detailsAirMax/air-max01.png"
import ImgDetailsNike02 from "../../assets/img/detailsAirMax/air-max02.png"

import ImgDatailsAirForce01 from "../../assets/img/detailsAirForce/air-force01.png"
import ImgDatailsAirForce02 from "../../assets/img/detailsAirForce/air-force02.png"
import ImgDatailsAirForce03 from "../../assets/img/detailsAirForce/air-force03.png"
import ImgDatailsAirForce04 from "../../assets/img/detailsAirForce/air-force04.png"

import ImgDatailsAirForceLow01 from "../../assets/img/detailsAirForceLow/air-forceLow01.png"
import ImgDatailsAirForceLow02 from "../../assets/img/detailsAirForceLow/air-forceLow02.png"
import ImgDatailsAirForceLow03 from "../../assets/img/detailsAirForceLow/air-forceLow03.png"
import ImgDatailsAirForceLow04 from "../../assets/img/detailsAirForceLow/air-forceLow04.png"

type PropsType = {
    bot: number
}

export default function Galery( { bot } : PropsType){

    useEffect(() =>{
        console.log(bot)
    },[bot])

    return(
        <>
        { bot == 0 &&
            <Container>
                <DivPhoto>
                    <Image src={ImgDetailsNike01} alt="Air Max Pre"/>
                </DivPhoto>
                <DivPhoto>
                    <Image src={ImgDetailsNike02} alt="Air Max Pre"/>
                </DivPhoto>
                <DivPhoto>
                    <Image src={ImgDetailsNike01} alt="Air Max Pre"/>
                </DivPhoto>
            </Container>
        }
        { bot == 1 &&
            <Container>
                <DivPhoto>
                    <Image src={ImgDatailsAirForce02} alt="Air Max Pre"/>
                </DivPhoto>
                <DivPhoto>
                    <Image src={ImgDatailsAirForce03} alt="Air Max Pre"/>
                </DivPhoto>
                <DivPhoto>
                    <Image src={ImgDatailsAirForce02} alt="Air Max Pre"/>
                </DivPhoto>
            </Container>
        }
        { bot == 2 &&
            <Container>
                <DivPhoto>
                    <Image src={ImgDatailsAirForceLow03} alt="Air Max Pre"/>
                </DivPhoto>
                <DivPhoto>
                    <Image src={ImgDatailsAirForceLow02} alt="Air Max Pre"/>
                </DivPhoto>
                <DivPhoto>
                    <Image src={ImgDatailsAirForceLow04} alt="Air Max Pre"/>
                </DivPhoto>
            </Container>
        }
        
        </>
        
    )
}