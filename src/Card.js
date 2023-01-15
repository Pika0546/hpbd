import { Stack } from "@mui/material";
import React from "react";

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
                                <img src="/strawberry.png" alt="" />
                                <img src="/strawberry.png" alt="" />
                                <img src="/strawberry.png" alt="" />
                                <img src="/strawberry.png" alt="" />
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
                        <img src="/our2.jpg"></img>
                        <h1>&#10084; </h1>
                    </div>
                </div>
            </div>
            <div className="cardInside">
                <h3 className="back">Happy Birthday</h3>
                <p>Chúc mừng sinh nhật babe,</p>
                <p>
                    Tuổi mới chúc em có thêm nhiều sức khỏe, niềm vui và hạnh
                    phúc nha babe. Chúc em có thể hoàn thành được tất cả những
                    mục tiêu trên con đường của mình. Có thể trong lúc em đi
                    trên con đường đó sẽ gặp những khó khăn, nhưng cố lên nha
                    babe, đừng quên bên cạnh em sẽ luôn có anh đồng hành. Gủi em
                    mọi lời chúc tốt đẹp nhất. Anh yêu em{" "}
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
