import React, { useState } from "react"

const MARGIN_ITEM_COUNT = 3;

const useStartIndex = () => {
    const [startIndex, setStartIndex] = useState(0);
    return { startIndex, setStartIndex };
}

const VirtualList = ({
    boxHeight,
    boxWidth,
    itemHeight,
    itemCount,
    items
}) => {
    const { startIndex, setStartIndex } = useStartIndex();
    const displayedItemCount = Math.floor(boxHeight / itemHeight) + MARGIN_ITEM_COUNT

    const handleScroll = (e) => {
        const scrollPosition = e.currentTarget.scrollTop;
        const displayedItemCount = Math.floor(boxHeight / itemHeight);
        const index = Math.floor(scrollPosition / itemHeight);
        if (index <= itemCount - displayedItemCount) {
            setStartIndex(index);
        }
    }

    const isDisplay = (index) => {
        return index >= startIndex && index < startIndex + displayedItemCount
    }

    const filterItems = (items) => {
        return items.filter((_, index) => isDisplay(index));
    }

    const outerStyle = { width: boxWidth, height: boxHeight, overflowY: "scroll" }
    const innerStyle = { height: itemCount * itemHeight }
    const ulistStyle = { margin: "0", padding: "0", listStyle: "none", position: "relative", top: startIndex * itemHeight }
    const itemStyle = { height: itemHeight }

    return (
        <div onScroll={handleScroll} style={outerStyle}>
            <div style={innerStyle}>
                <ul style={ulistStyle}>
                    {filterItems(items).map((item, index) =>
                        <li key={index} style={itemStyle}>
                            {item}
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default VirtualList;