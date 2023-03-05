import React, { useContext, useEffect } from "react";
import Image from "next/image";

import { 
    Overflow,
    Container,
    ButtonExit,
    Content,
    Item,
    Header,
    InfosBasic,
    Actions,
    ButtonBuy
} from "@/styles/components/Cart/styles";

import { CartContext } from "@/context/cart";

import logoNike from "../../assets/img/nike-logo-white.png";

export default function Cart(){

    const { cart, addProduct, handleCart, expandCart } = useContext(CartContext);

    useEffect(() => {
        console.log(cart)
    })

    return(
        <Overflow>
            <Container>
                <Header>
                    <Image src={logoNike} alt="Logo" width="64"/>
                    <ButtonExit onClick={() => {handleCart(false)}}>
                        X
                    </ButtonExit>
                </Header>
                <Content>
                    {cart?.map((item, index) => (
                        <Item key={index}>
                            <InfosBasic>
                                <p>Nike Air Max Pre-Day Pure Platinum</p>
                                <h4>U$ 248,00</h4>
                            </InfosBasic>
                            <Actions>
                                <span>2x</span>
                                <button>+</button>
                                <button>-</button>
                            </Actions>
                        </Item>
                    ))}
                </Content>
                <ButtonBuy>Buy</ButtonBuy>
            </Container>
        </Overflow>
    );
} 