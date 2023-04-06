import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import { useContext } from "react";
import { HouseContext } from "../../context/HouseContext";

const PriceFilter = () => {
    const { setPrice } = useContext(HouseContext);

    const prices = [
        { value: "200 - 300" },
    { value: "300 - 1100" },
    { value: "1100 - 1400" },
    { value: "1400 - 1700" },
    { value: "1700 - 2000" },
    { value: "2000 - 2300" },
    ];

    const priceHandler = (e) => {
        setPrice(e.target.value);
    };

    return (
        <Select placeholder="select price" onChange={priceHandler}>
        {prices.map((price, index) =>
            <option key={index}>{price.value}</option>
          )
        }
      </Select>
    )
    }

    export default PriceFilter;