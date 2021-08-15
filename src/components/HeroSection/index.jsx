import React, { useState } from "react";
import {
    HeroBg,
    HeroContainer,
    HeroContent,
    VideoBg,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    IoCopy,
    ArrowRight,
    HeroContentItemKiri,
    HeroContentItemKanan,
    HeroContentImgWrapper,
    HeroImg,
} from "./HeroElements";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElement";
import Image from "../../images/eos.png";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import { MdClose } from "react-icons/md";
import { Slide } from "@material-ui/core";

const HeroSection = () => {
    const [hover, setHover] = useState(false);
    const [open, setOpen] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg
                    playsInline
                    autoPlay
                    loop
                    muted
                    src={Video}
                    type="video/mp4"
                />
            </HeroBg>
            <HeroContent>
                <HeroContentItemKiri>
                    <HeroContentImgWrapper>
                        <HeroImg src={Image} />
                    </HeroContentImgWrapper>
                </HeroContentItemKiri>
                <HeroContentItemKanan>
                    <HeroH1>Virtual Currecy Made Easy</HeroH1>
                    <HeroP>
                        Buy token now, for new holders will get $100 in token
                        towards tokenomics holdings for 1 month.
                    </HeroP>
                    <HeroBtnWrapper>
                        <CopyToClipboard text="0x56b6fb708fc5732dec1afc8d8556423a2edccbd6">
                            <Button
                                primary="true"
                                dark="true"
                                onMouseEnter={onHover}
                                onMouseLeave={onHover}
                                onClick={handleClick}
                                // to="signup"
                                // smooth={true}
                                // duration={500}
                                // spy={true}
                                // exact="true"
                                // offset={-80}
                            >
                                0x56b6fb708fc5732dec1afc...
                                {hover ? <IoCopy /> : <ArrowRight />}
                            </Button>
                        </CopyToClipboard>
                    </HeroBtnWrapper>
                    <Snackbar
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                        }}
                        TransitionComponent={Slide}
                        open={open}
                        autoHideDuration={3000}
                        onClose={handleClose}
                        message="token address copied!"
                        action={
                            <IconButton onClick={handleClose}>
                                <MdClose />
                            </IconButton>
                        }
                    />
                </HeroContentItemKanan>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
