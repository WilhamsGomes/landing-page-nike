import { 
    Container,
    List,
    Item
} from "@/styles/components/Header/styles";

import logoNike from "../../assets/img/Logo_NIKE.svg.png";
import Image from "next/image";

export default function Header() {
    return(
        <Container>
            <Image src={logoNike} alt="Logo" width="64"/>
            <List>
                <Item className="active">Women</Item>
                <Item>Man</Item>
                <Item>Kids</Item>
                <Item>Collections</Item>
            </List>
        </Container>
    )
}