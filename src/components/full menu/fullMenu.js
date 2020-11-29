import React, {useState} from 'react'
import {Error} from "./FullElements";
import {Navbar} from "../navbar";
import SideBar from "../sideBar/sideBar";
import Products from "../products/products";
import {mainFull, productsDB} from "../products/db";

function FullMenu() {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
            <>
          <Error>
              <Navbar toggle={toggle} />
              <SideBar isOpen={isOpen} toggle={toggle}/>
              </Error>
                <Products  heading='Full Menu' data={mainFull}/>
                <Products   data={productsDB}/>
            </>
    );
}

export default FullMenu