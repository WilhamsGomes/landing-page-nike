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
import { bots } from "../ContentBot/data/bots";

import logoNike from "../../assets/img/nike-logo-white.png";

export default function Cart(){

    const { cart, addProduct, removeProduct, handleCart, expandCart } = useContext(CartContext);

    useEffect(() => {
        console.log(cart)
    })

    const searchBot = (id: number) : String => {
        const find = bots.find((bot) => bot.id == id)
        return find?.title || ''
    }

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
                       <div key={index}>
                        {item.quantity > 0 &&
                             <Item>
                                <InfosBasic>
                                    <p>
                                    {searchBot(item.productId)}
                                    </p>
                                    <h4>U$ {item.amount * item.quantity}</h4>
                                </InfosBasic>
                                <Actions>
                                    <span>{item.quantity}x</span>
                                    <button 
                                        onClick={() => addProduct(item.productId)}
                                    >
                                        +
                                    </button>
                                    <button
                                        onClick={() => removeProduct(item.productId)}
                                    >
                                        -
                                    </button>
                                </Actions>
                            </Item>
                        }
                       </div>
                    ))}
                </Content>
                <ButtonBuy>Buy</ButtonBuy>
            </Container>
        </Overflow>
    );
} 