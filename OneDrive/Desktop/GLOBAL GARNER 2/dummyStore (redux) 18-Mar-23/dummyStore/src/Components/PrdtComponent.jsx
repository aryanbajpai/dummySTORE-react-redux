import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrdtComponent = () => {
    //access State without using PROPS in component

    //this is an array of prdts and we need to map through all the prdts
    const prdts = useSelector((state) => state.allPrdts.prdts);
    //to access prdts destructure the state

    const renderList = prdts.map((prdt) => {
        const {id, title, image, price, category} = prdt
        return(
            <div className='h-[460px] hover:scale-[1.02] m-auto' key={id}>
             <Link to={`/prdt/${id}`}>
                <div>
                    <div className='mx-14 py-2 px-5 w-[270px] rounded-md border-2'>
                        <div className='w-full h-[280px] border-b-[2px]'>
                            <img className='h-full m-auto px-2 py-4' src={image} alt={title}/>
                        </div>
                        <div className='w-full h-[90px] my-2'>
                            <div>{title}</div>
                            <div>$ {price}</div>
                            <div>{category}</div>
                        </div>
                    </div>
                </div>
             </Link>
            </div>
        )
    })

  return (
     <>
        {renderList}
     </>
  );
}
