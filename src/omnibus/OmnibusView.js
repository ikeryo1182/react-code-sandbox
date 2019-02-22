import React from "react";
import VirtualList from "../components/VirtualList";
import Image1 from "../assets/1.png"
import Image2 from "../assets/2.png"
import Image3 from "../assets/3.png"
import Image4 from "../assets/4.png"
import Image5 from "../assets/5.png"

const getImage = () => {
    const randomNumber = Math.floor(Math.random() * (5));
    switch (randomNumber) {
        case 1:
            return Image1
        case 2:
            return Image2
        case 3:
            return Image3
        case 4:
            return Image4
        case 5:
            return Image5
        default:
            return Image1
    }
}

const OmnibusView = () => {
    // 表示するアイテム個数
    const array = [...Array(10000).keys()].map(i => ++i);
    const boxHeight = 200;
    const boxWidth = 300;
    const itemHeight = 40;
    const itemCount = array.length;
    const items = array.map(index => <div key={index}><img width={35} src={getImage()} />Number {index} <button>Button</button></div>)

    return (
        <div>
            <VirtualList
                boxHeight={boxHeight}
                boxWidth={boxWidth}
                itemHeight={itemHeight}
                itemCount={itemCount}
                items={items}
            />
        </div>
    )
}

export default OmnibusView;