import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'


const Features = () => {
  return (
    <div className='container'>
      <div>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href='#'>Home</BreadcrumbLink>
          </BreadcrumbItem>


          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href='#'>Features</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
    </div>
  );
};
  
export default Features;
