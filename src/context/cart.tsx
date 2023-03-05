import React, { createContext, useContext, useState, useEffect} from "react";

type Product ={
    productId: number;
    amount: number;
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

        setCart(prevList => [
            ...prevList,
            {
                productId: productId,
                amount: 15.98
            }
        ])

    }

    useEffect(() => {
        console.log("useEffect", cart)
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