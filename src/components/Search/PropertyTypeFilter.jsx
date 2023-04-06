import { Select } from "@chakra-ui/react";
import { useContext } from "react";
import { HouseContext } from "../../context/HouseContext";

const PropertyTypeFilter = () => {
    
    const {setProperty, properties} = useContext(HouseContext);

    const propertyTypeHandler = (e) => {
        setProperty(e.target.value);
    };

    return (
        <Select placeholder="select type" onChange={propertyTypeHandler}>
            {
                properties.map((type, index) =>
                <option key={index} value={type}>{type}</option>
                )
            }
        </Select>
    )
}

export default PropertyTypeFilter;