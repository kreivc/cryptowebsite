import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavGoto,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";
import { animateScroll as scroll } from "react-scroll";

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);
    const [chart, setChart] = useState("Chart");
    const [pancake, setPancake] = useState("Buy On Pancake");
    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>
                        PEE
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks
                                to="about"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                            >
                                About
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="tokenomics"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                            >
                                Tokenomics
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="timeline"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                            >
                                Timeline
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavGoto
                                href="https://poocoin.app/"
                                target="_blank"
                                onMouseOver={() => setChart("Not released yet")}
                                onMouseLeave={() => setChart("Chart")}
                            >
                                {chart}
                            </NavGoto>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink
                            href="https://pancakeswap.finance/"
                            target="_blank"
                            onMouseOver={() => setPancake("Not released yet")}
                            onMouseLeave={() => setPancake("Buy On Pancake")}
                        >
                            {pancake}
                        </NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
