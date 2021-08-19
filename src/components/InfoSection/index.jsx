import React from "react";
import {
    InfoContainer,
    InfoRow,
    Column1,
    Column2,
    ImgWrap,
    InfoWrapper,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    // BtnWrap,
    Img,
    DescT,
    DescTWrapper,
} from "./infoElements";
// import { Button } from "../ButtonElement";

const InfoSection = ({
    lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    headline,
    darkText,
    description,
    buttonLabel,
    img,
    alt,
    primary,
    dark,
    dark2,
    d1,
    d2,
    d3,
    d4,
    d5,
    d6,
}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>
                                    {headline}
                                </Heading>
                                <Subtitle darkText={darkText}>
                                    {description}
                                </Subtitle>
                                {/* <BtnWrap>
                                    <Button
                                        to="home"
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        excact={true}
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}
                                    >
                                        {buttonLabel}
                                    </Button>
                                </BtnWrap> */}
                                <DescTWrapper>
                                    <DescT>{d1}</DescT>
                                    <DescT>{d2}</DescT>
                                    <DescT>{d3}</DescT>
                                    <DescT>{d4}</DescT>
                                    <DescT>{d5}</DescT>
                                    <DescT>{d6}</DescT>
                                </DescTWrapper>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
};

export default InfoSection;
