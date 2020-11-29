import React, {useState} from 'react'
import {Navbar} from '../navbar/index'
import {MainPContainer, MainPContent, MainPItems, MainPH1, MainPP, MainPButton} from './mainElements'
import SideBar from "../sideBar/sideBar";
import Products from "../products/products";
import {productsDB} from "../products/db";
import {BrowserRouter as Router} from "react-router-dom";
import Features from "../features/features";

export const MainPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return  (
        <>
        <MainPContainer>
            <Navbar toggle={toggle} />
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <MainPContent>
                <MainPItems>
                    <MainPH1>Tasty pizza for you!!!</MainPH1>
                    <MainPP>Are you ready?</MainPP>
                    <MainPButton>Place order</MainPButton>
                </MainPItems>
            </MainPContent>
        </MainPContainer>

            <Products heading='Choose your favorite' data={productsDB}/>
            <Features />
            </>
        );
}