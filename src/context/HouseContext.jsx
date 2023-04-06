import React, { createContext, useState, useEffect } from "react";
import { housesData } from '../data'

// Create a context for the list of houses
export const HouseContext = createContext({});

// Define a provider component that wraps the application and provides the house list and filtering functions
export const HouseProvider = ({children}) => {
  // Define state variables for houses, country, countries, price, property, properties, and isLoading
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('Select Country');
  const [countries, setCountries] = useState([]);
  const [price, setPrice] = useState('Select Price');
  const [property, setProperty] = useState('Select type');
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Use an effect hook to extract the unique list of countries from the house data
  useEffect(() => {
    const allCountries = housesData.map(house => house.country);
    const uniqueCountries = [...new Set(allCountries)];
    setCountries(uniqueCountries);
  }, []);

  // Use an effect hook to extract the unique list of property types from the house data
  useEffect(() => {
    const allPropertyTypes = housesData.map(house => house.type);
    const uniquePropertyTypes = [...new Set(allPropertyTypes)];
    setProperties(uniquePropertyTypes);
  }, []);

  // Define a function to filter the list of houses based on selected country, price, and property type
  const searchHandler = () => {
    setIsLoading(true);

    // Define a helper function to check if a string is set to the default "Select" value
    const isDefault = (str) => {
      return str.toLowerCase().includes('select');
    };
    const minPrice = parseInt(price.split(' ')[0]);
    const maxPrice = parseInt(price.split('- ')[1]);

    const filteredHouses = housesData.filter(house => {
      const housePrice = parseInt(house.price);

      // Check which filters are applied and return the houses that match
      if (!isDefault(country) && house.country !== country) {
        return false;
      }
      if (!isDefault(property) && house.type !== property) {
        return false;
      }
      if (isDefault(price)) {
        return true;
      }
      if (price.includes('-')) {
        return housePrice >= minPrice && housePrice <= maxPrice;
      } else {
        return housePrice >= minPrice;
      }
    });

    // Set the filtered houses as the new list of houses after a 1 second delay to simulate a loading spinner
    setTimeout(() => {
      filteredHouses.length > 0 ? setHouses(filteredHouses) : setHouses([]);
      setIsLoading(false);
    }, 1000);
  };

  // Render the provider component and pass in the list of houses, country, countries, price, property, properties, search function, and loading state as the context value
  return (
    <HouseContext.Provider value={{
      houses,
      country,
      setCountry,
      countries,
      price,
      setPrice,
      property,
      setProperty,
      properties,
      searchHandler,
      isLoading
    }}>
      {children}
    </HouseContext.Provider>
  );
};

export default HouseProvider;
