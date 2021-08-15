import React from "react";
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
} from "./FooterElements";
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/" href="#" target="_blank">
                                How it works
                            </FooterLink>
                            <FooterLink to="/" href="#" target="_blank">
                                Testimonials
                            </FooterLink>
                            <FooterLink to="/" href="#" target="_blank">
                                Careers
                            </FooterLink>
                            <FooterLink to="/" href="#" target="_blank">
                                Investors
                            </FooterLink>
                            <FooterLink to="/" href="#" target="_blank">
                                Terms of services
                            </FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to="/" href="#" target="_blank">
                                Submit Video
                            </FooterLink>
                            <FooterLink to="/" href="#" target="_blank">
                                Ambasadors
                            </FooterLink>
                            <FooterLink to="/" href="#" target="_blank">
                                Agency
                            </FooterLink>
                            <FooterLink to="/" href="#" target="_blank">
                                Influencer
                            </FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to="/" href="#" target="_blank">
                                Contact
                            </FooterLink>
                            <FooterLink to="/" href="#" target="_blank">
                                Support
                            </FooterLink>
                            <FooterLink to="/" href="#" target="_blank">
                                Destinations
                            </FooterLink>
                            <FooterLink to="/" href="#" target="_blank">
                                Sponsorships
                            </FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to="/" href="#" target="_blank">
                                Instagram
                            </FooterLink>
                            <FooterLink to="/" href="#" target="_blank">
                                Facebook
                            </FooterLink>
                            <FooterLink to="/" href="#" target="_blank">
                                Youtube
                            </FooterLink>
                            <FooterLink to="/" href="#" target="_blank">
                                Twitter
                            </FooterLink>
                            <FooterLink to="/" href="#" target="_blank">
                                Telegram
                            </FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>
                            token
                        </SocialLogo>
                        <WebsiteRights>
                            token &copy; {new Date().getFullYear()} All rights
                            reserved.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink
                                href="//www.facebook.com"
                                target="_blank"
                                aria-label="Facebook"
                            >
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink
                                href="/"
                                target="_blank"
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink
                                href="/"
                                target="_blank"
                                aria-label="Youtube"
                            >
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink
                                href="/"
                                target="_blank"
                                aria-label="Twitter"
                            >
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink
                                href="/"
                                target="_blank"
                                aria-label="Linkedin"
                            >
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;
