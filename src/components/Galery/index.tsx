import {
    Container,
    DivPhoto
} from "@/styles/components/Galery"

import Image from "next/image"
import ImgDetailsNike01 from "../../assets/img/detailsAirMax/air-max01.png"
import ImgDetailsNike02 from "../../assets/img/detailsAirMax/air-max02.png"

export default function Galery(){
    return(
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
    )
}