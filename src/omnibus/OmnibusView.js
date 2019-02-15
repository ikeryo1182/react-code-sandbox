import React, { useRef } from "react";
import VirtualList from "../components/VirtualList";

const OmnibusView = () => {
    const array = [...Array(100).keys()].map(i => ++i);
    const boxHeight = 200;
    const boxWidth = 300;
    const itemHeight = 40;
    const itemCount = array.length;
    const items = array.map(index => <div key={index}>Number {index} <button>Button</button></div>)

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