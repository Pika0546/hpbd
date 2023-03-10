import { Stack } from "@mui/material";
import React from "react";
import berry from "./assets/strawberry.png";
import our from "./assets/our2.jpg";
const Card = () => {
    return (
        <div className="birthdayCard">
            <div className="cardFront">
                <div className="cardFront-inner">
                    <div className="front">
                        <h3 className="happy">Happy Birthday</h3>
                        <div className="balloon-container">
                            <div className="balloon"></div>
                            <div className="balloon"></div>
                            <div className="balloon"></div>
                            <div className="balloon"></div>
                            <div className="balloon"></div>
                            <div className="balloon"></div>
                            <div className="balloon"></div>
                        </div>
                        <div className="cake">
                            <div className="plate"></div>
                            <div className="layer layer-bottom"></div>
                            <div className="layer layer-middle"></div>
                            <div className="layer layer-top"></div>
                            <div className="icing">
                                <img src={berry} alt="" />
                                <img src={berry} alt="" />
                                <img src={berry} alt="" />
                                <img src={berry} alt="" />
                            </div>
                            <div className="drip drip1"></div>
                            <div className="drip drip2"></div>
                            <div className="drip drip3"></div>
                            <div className="candle">
                                <div className="flame"></div>
                            </div>
                        </div>
                    </div>
                    <div className="backk">
                        <img src={our}></img>
                        <h1>&#10084; </h1>
                    </div>
                </div>
            </div>
            <div className="cardInside">
                <h3 className="back">Happy Birthday</h3>
                <p>Ch??c m???ng sinh nh???t babe,</p>
                <p>
                    Tu???i m???i ch??c em c?? th??m nhi???u s???c kh???e, ni???m vui v?? h???nh
                    ph??c nha babe. Ch??c em c?? th??? ho??n th??nh ???????c t???t c??? nh???ng
                    m???c ti??u tr??n con ???????ng c???a m??nh. C?? th??? trong l??c em ??i
                    tr??n con ???????ng ???? s??? g???p nh???ng kh?? kh??n, nh??ng c??? l??n nha
                    babe, ?????ng qu??n b??n c???nh em s??? lu??n c?? anh ?????ng h??nh. G???i em
                    m???i l???i ch??c t???t ?????p nh???t. Anh y??u em{" "}
                    <span style={{ color: "red" }}>&#10084;</span>
                </p>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="flex-end"
                >
                    <p>Your sen</p>
                </Stack>
            </div>
        </div>
    );
};

export default Card;
