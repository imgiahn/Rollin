import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";
import { IMG_PATH } from "../../http/GiftAxios";
import { load } from "../../app/gifts";

const Gifts=()=>{
    const dispatch = useDispatch();
    const allGifts=useSelector((state)=>state.gifts.allGifts);
    console.log(allGifts);

    useEffect(() => {
        dispatch(load());
      }, []);

    const[searchKey,setSearchKey]=useState({searchKey:""});
    const onChangeHandler=(e)=>{
        const {name,value}=e.target;
        setSearchKey({...searchKey,[name]: value});
    };
    const onSubmitSearch=()=>{
        alert("hi");
    }

    return(
        <div className="container">
            <div className="row text-center">
                <h1>선물하기</h1>
            </div>
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <form className="container" role="search" onSubmit={onSubmitSearch}>
                        <div className="row">
                            <input 
                            type="text" className="form-control col" placeholder="Search..." 
                            name="name" onChange={(e)=>onChangeHandler(e)}>
                            </input>
                            <button type="button" className="btn btn-primary col-1">검색</button>
                        </div>
                        <br></br>
                    </form>
                </div>
            </div>

            <div className="row row-cols-4">
                {allGifts?.map((gift,index)=>(
                    <figure key={index} className="figure">
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
                        <figcaption className="figure-caption text-center">{gift.name}</figcaption>
                    </figure>
                ))}
            
            </div>
        </div>
        
    );
};
export default Gifts;
