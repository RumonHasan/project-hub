import { useState, useEffect } from "react";

export const useDimentions = (menuRef)=>{
    const [dimensions, setDimensions] = useState({
        height: 0, width: 0
    });

    useEffect(()=>{
        const handleDimensions = ()=>{
            setDimensions({
                height: menuRef.current.offsetHeight,
                width: menuRef.current.offsetWidth,
            })
        }
        window.addEventListener('resize', handleDimensions)
    },[]);

    return dimensions;
}