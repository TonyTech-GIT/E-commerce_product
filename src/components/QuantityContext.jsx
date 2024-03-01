
// eslint-disable-next-line no-unused-vars
import React, { createContext, useState, useEffect, useCallback } from 'react';

import PropTypes from 'prop-types';



export const QuantityContext = createContext({
    quantity: 0,
    setQuantity: () => { },
});

export const QuantityProvider = ({ children }) => {
    const [quantity, setQuantity] = useState(0);

    const handleQuantityChange = useCallback((newQuantity) => {
        setQuantity(newQuantity);
    }, [setQuantity]);

    // useEffect(() => {
    // }, [quantity])

    return (
        <QuantityContext.Provider
            value={{ quantity, setQuantity: handleQuantityChange }}
        >
            {children}
        </QuantityContext.Provider>
    );
};

QuantityProvider.propTypes = {
    children: PropTypes.node.isRequired, // Validate that children are provided
};
