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
    expandCart: boolean;
    handleCart: (value: boolean) => void;
}

type Props = {
    children?: JSX.Element;
};

export const CartContext = createContext({} as CartProps)

export const CartProvider = ({children} : Props) => {
 
    const [cart, setCart] = useState<Product[]>([]);
    const [expandCart, setExpandCart] = useState(false);

    const handleCart = (value: boolean) =>{
        setExpandCart(value)
    }

    const addProduct = (productId: number) => {

        //Fazer verificações antes de adicionar no carrinho
        console.log(productId)
        const botAdd = bots.find((item) =>  item.id === productId)

        if(botAdd){

            const verifyIfExists = cart.find((item) => item.productId === productId)
            
            if(verifyIfExists){
                console.log("Produto já existe no carrinho")

                // setCart(prevList => [
                //     ...prevList,
                //     {
                //         productId: 1,
                //         amount: 10,
                //         quantity: 2,
                //     },
                // ])

            } else {
                console.log("Produto não existe no carrinho")

                setCart(prevList => [
                    ...prevList,
                    {
                        productId: botAdd.id,
                        amount: botAdd.price,
                        quantity: 1
                    }
                ])

            }

        }

    }

    useEffect(() => {
        console.log("useEffect", cart.length)
    }, [cart])

    return(
        <CartContext.Provider
            value={{
                cart,
                addProduct,
                expandCart,
                handleCart
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