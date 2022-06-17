import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { load } from "../../app/paper";
import PaperDetail from "./PaperDetail";
import PapersList from "./PaperList";
const PaperMain = () => {
    const dispatch = useDispatch();
    const [isSelect, setIsSelect] = useState(false);
    const papers = useSelector((state) => state.paper.paper);
    const me = useSelector((state) => state.user.me);
    useEffect(() => {
        dispatch(load());
    }, [dispatch]);
    return !isSelect ? <PapersList setIsSelect={setIsSelect}/> : <PaperDetail setIsSelect={setIsSelect}/>;
};
export default PaperMain;
