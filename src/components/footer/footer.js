import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/all";
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMWrap,
    SosialLogo,
    SolialIcons,
    IconLink
} from './footerElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMWrap>
                        <SosialLogo to="/">Pizza</SosialLogo>
                        <SolialIcons>
                            <IconLink href="/" target="_blank" aria-label="Facebook" rel="noopener noreferrer">
                                <FaTwitter />
                            </IconLink>
                            <IconLink href="/" target="_blank" aria-label="Facebook" rel="noopener noreferrer">
                                <FaInstagram />
                            </IconLink>
                            <IconLink href="/" target="_blank" aria-label="Facebook" rel="noopener noreferrer">
                                <FaFacebook />
                            </IconLink>
                        </SolialIcons>
                    </SocialMWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
}

export default Footer