import React, { useRef } from "react";

const InfiniteScrollView = () => {
    const array = [...Array(100).keys()].map(i => ++i);

    return (
        <div ref={boxElement} id="box" style={{ border: "1px solid gray", height: "200px", width: "200px", overflow: "scroll" }}>
            <ul id="items">
                {array.map((number, index) => (
                    <li  key={index}>
                        Item {number}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default InfiniteScrollView;