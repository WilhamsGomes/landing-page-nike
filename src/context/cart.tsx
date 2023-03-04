import React, { createContext, useContext, useState, ReactNode} from "react";

type Product ={
    productId: number;
    amount: number;
}

type CartProps = {
    cart: Product[] | undefined;
    addProduct: (productId: number) => void;
}

type Props = {
    children?: JSX.Element;
};

export const CartContext = createContext({} as CartProps)

export const CartProvider = ({children} : Props) => {

    const [cart, setCart] = useState<Product[]>();
    const addProduct = (productId: number) => {
        alert("Vamos adicionar")
    }

    return(
        <CartContext.Provider
            value={{
                cart,
                addProduct
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