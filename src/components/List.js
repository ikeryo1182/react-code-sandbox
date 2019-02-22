import React, { useState } from "react"

const List = ({
    boxHeight,
    boxWidth,
    itemHeight,
    itemCount,
    items
}) => {
    const outerStyle = { width: boxWidth, height: boxHeight, overflowY: "scroll" }
    const innerStyle = { height: itemCount * itemHeight }
    const ulistStyle = { margin: "0", padding: "0", listStyle: "none" }
    const itemStyle = { height: itemHeight }

    return (
        <div style={outerStyle}>
            <div style={innerStyle}>
                <ul style={ulistStyle}>
                    {items.map((item, index) =>
                        <li key={index} style={itemStyle}>
                            {item}
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default List;