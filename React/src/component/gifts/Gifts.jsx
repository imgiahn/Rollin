import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { selectAllgifts } from "../../app/gifts";
import { IMG_PATH } from "../../http/CustomAxios";

const Gifts=()=>{
    const allGifts=useSelector((state)=>state.gifts.allGifts);
    console.log(allGifts.gifts);
    const dispatch=useDispatch();
    const getAllGifts = () => {
        dispatch(selectAllgifts());
      };
      useEffect(()=>{
        getAllGifts();
      },[])

    return(
        <div className="container">
            <div className="row text-center">
                <h1>선물하기</h1>
            </div>
            <div className="row row-cols-4">
                {allGifts.gifts?.map((gift,index)=>(
                    <figure key={index} className="figure">
                         <figcaption className="figure-caption text-center">{gift.name}</figcaption>
                        <img
                            className="img-thumbnail col"
                            key={gift.id}
                            src={`${IMG_PATH}${gift.img}`}
                            alt={gift.name}
                            id={gift.id}
                            content={gift.content}
                            count={gift.count}
                            name={gift.name}
                            view={gift.views}
                        ></img>
                    </figure>
                ))}
            
            </div>
        </div>
        
    );
};
export default Gifts;