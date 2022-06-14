import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { selectAllgifts } from "../../app/gifts";

const Gifts=()=>{
    const gifts=useSelector((state)=>state.gifts.allGifts);
    console.log(gifts);
    const dispatch=useDispatch();
    const getAllGifts = () => {
        dispatch(selectAllgifts());
      };
      useEffect(()=>{
        getAllGifts();
      },[])

    return(
        <div className="container">
            <div className="title">
                <h1>선물하기</h1>
            </div>
            <div className="Gifts">
                {/* {gifts?.map((gift)=>(
                        <img
                            className="GiftsImg"
                            key={gift.id}
                            src={gift.img}
                            alt={gift.name}
                        ></img>
                ))}
             */}
            </div>
        </div>
        
    );
};
export default Gifts;