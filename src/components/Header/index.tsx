import { useState } from "react"

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

    const [active, setActive] = useState(0)

    return(
        <Container>
            <Content>
                <Image src={logoNike} alt="Logo" width="64"/>
                <List>
                    <Item 
                        onClick={() => setActive(0)} 
                        className={active == 0 ? 'active' : ''}
                    >
                        Women
                    </Item>
                    <Item 
                        onClick={() => setActive(1)}
                        className={active == 1 ? 'active' : ''}
                    >
                        Man
                    </Item>
                    <Item 
                        onClick={() => setActive(2)}
                        className={active == 2 ? 'active' : ''}
                    >
                        Kids
                    </Item>
                    <Item 
                        onClick={() => setActive(3)}
                        className={active == 3 ? 'active' : ''}
                    >
                        Collections
                    </Item>
                </List>
            </Content>
            {/* <Cart2 size="24" title="Unlock account"/> */}
        </Container>
    )
}