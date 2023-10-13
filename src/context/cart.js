import { createContext, useContext, useEffect, useState } from "react";


const cartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // useEffect
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('blissworld_cart'));
        data && setCart(data);
    }, [cart.length])
    return (
        <cartContext.Provider value={[cart, setCart]}>
            {children}
        </cartContext.Provider>
    )
}

const useCart = () => useContext(cartContext);

export { CartProvider, useCart }