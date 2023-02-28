import { 
    Container,
    List,
    Item,
    Content
} from "@/styles/components/Header/styles";

import logoNike from "../../assets/img/Logo_NIKE.svg.png";
import Image from "next/image";
import { Cart2 } from '@styled-icons/bootstrap/Cart2'

export default function Header() {
    return(
        <Container>
            <Content>
                <Image src={logoNike} alt="Logo" width="64"/>
                <List>
                    <Item className="active">Women</Item>
                    <Item>Man</Item>
                    <Item>Kids</Item>
                    <Item>Collections</Item>
                </List>
            </Content>
            {/* <Cart2 size="24" title="Unlock account"/> */}
        </Container>
    )
}