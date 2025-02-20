import React, { createContext, useContext, useState } from "react";

// Create Context
const CheckoutContext = createContext();

// Context Provider Component
export const CheckoutProvider = ({ children }) => {
    const [selectedPlan, setselectedPlan] = useState(null);
    const [selecetedMealType, setselecetedMealType] = useState(null);
    const [mealType, setMealType] = useState([]);
    const [planType, setPlanType] = useState("normal");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedDates, setSelectedDates] = useState([]);
    const [Taxes, setTaxes] = useState([]);
    const [Charges, setCharges] = useState([]);
    const [Offers, setOffers] = useState([]);
    const [plan, setPlan] = useState([]);
    const [TiffinName, setTiffinName] = useState(null);
    const [Address, setAddress] = useState(null);

    const value = {
        setAddress,
        Address,
        TiffinName,
        setTiffinName,
        plan,
        setPlan,
        Offers,
        setOffers,
        Taxes,
        setTaxes,
        Charges,
        setCharges,
        selectedPlan,
        setselectedPlan,
        selecetedMealType,
        setselecetedMealType,
        mealType,
        setMealType,
        planType,
        setPlanType,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        quantity,
        setQuantity,
        totalPrice,
        setTotalPrice,
        selectedDates,
        setSelectedDates,
    };

    return (
        <CheckoutContext.Provider value={value}>{children}</CheckoutContext.Provider>
    );
};

// Custom Hook for consuming context
export const useCheckout = () => {
    return useContext(CheckoutContext);
};
