import React, { createContext, useContext, useState, useEffect} from "react";
import { bots } from "@/components/ContentBot/data/bots";

type Product ={
    productId: number;
    amount: number;
    quantity: number;
}

type CartProps = {
    cart: Product[] | undefined;
    addProduct: (productId: number) => void;
    removeProduct: (productId: number) => void;
    expandCart: boolean;
    handleCart: (value: boolean) => void;
    quantityProduct: number;
}

type Props = {
    children?: JSX.Element;
};

export const CartContext = createContext({} as CartProps)

export const CartProvider = ({children} : Props) => {
 
    const [cart, setCart] = useState<Product[]>([]);
    const [expandCart, setExpandCart] = useState(false);
    const [quantityProduct, setQuantityProduct] = useState(0)

    const handleCart = (value: boolean) =>{
        setExpandCart(value)
    }

    const addProduct = (productId: number) => {

        const botAdd = bots.find((item) =>  item.id === productId)

        if(botAdd){

            const verifyIfExists = cart.find((item) => item.productId === productId)
            
            if(verifyIfExists){
                let edit = cart.find((item) => item.productId == verifyIfExists.productId)
                if(edit){
                    edit.quantity = edit.quantity+1
                    setQuantityProduct(quantityProduct + 1)
                } 

            } else {
                setCart(prevList => [
                    ...prevList,
                    {
                        productId: botAdd.id,
                        amount: botAdd.price,
                        quantity: 1
                    }
                ])
                setQuantityProduct(quantityProduct + 1)
            }
        }

    }

    const removeProduct = (productId: number) => {

        let botRemove = cart.find((item) =>  item.productId === productId)
        const findIndex = cart.findIndex((item) =>item.productId === productId)

        if(botRemove && botRemove.quantity > 0){
            botRemove.quantity = botRemove.quantity - 1
            setQuantityProduct(quantityProduct - 1)
        } 

    }

    return(
        <CartContext.Provider
            value={{
                cart,
                addProduct,
                removeProduct,
                expandCart,
                handleCart,
                quantityProduct
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => {
    const context = useContext(CartContext)
    return context;
}