import React, { useContext } from "react";

import { 
    Overflow,
    Container,
    ButtonExit
} from "@/styles/components/Cart/styles";

import { CartContext } from "@/context/cart";

export default function Cart(){

    const { cart, addProduct, handleCart, expandCart } = useContext(CartContext);


    return(
        <Overflow>
            <Container>
                <ButtonExit onClick={() => {handleCart(false)}}>
                    X
                </ButtonExit>
            </Container>
        </Overflow>
    );
}