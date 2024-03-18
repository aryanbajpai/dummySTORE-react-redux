import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectedPrdt, removePrdt } from '../Redux/Actions/prdtActions';

const PrdtDetails = () => {
    const prdt = useSelector( (state) => state.prdt);
    const {image, title, price, category, description} = prdt;
    const {prdtId} = useParams();
    const dispatch = useDispatch()
    console.log(prdt)

    const fetchDetail = async() => {
        const resp = await axios
          .get(`https://fakestoreapi.com/products/${prdtId}`)
          .catch( err => console.log(err));

          dispatch(selectedPrdt(resp.data));
    }

    useEffect( ()=>{
        if(prdtId && prdtId !== ""){
            fetchDetail();
        }
        return () => {
            dispatch(removePrdt())
        }
    }, [prdtId])
  return (
    <div className='mt-24'>
        {Object.keys(prdt).length === 0 ? (
            <div className='text-center text-3xl font-semibold'>...LOADING</div>
        ) : (
            <div className=' md:w-[1030px] m-auto' >
                <div>
                    <div className='font-bold text-sm absolute hidden md:block md:left-[65%] lg:left-[48.9%] top-[50%] bg-white'>AND</div>
                    <div className='md:grid grid-cols-2 md:border-[2px] rounded-md'>
                        <div className='md:h-[570px] lg:h-[600px] border-r-[2px]'>
                            <img className='h-full m-auto p-5' src={image} alt={title}/>
                        </div>
                        <div className='p-6'>
                            <h1 className='text-3xl mb-5 font-bold'>{title}</h1>
                            <h2 className='text-2xl text-white rounded font-bold bg-cyan-500 inline px-4 py-1'>
                                <a >$ {price}</a>
                            </h2>
                            <h3 className='mt-6 mb-3 text-xl font-bold border-[2px] border-red-200 bg-gray-200 px-3 py-2 text-yellow-800'>{category}</h3>
                            <p className='text-md mb-3 font-semibold text-gray-500'>{description}</p>
                            <div>
                                <div>
                                    <i></i>
                                </div>
                                <div className='bg-red-600 text-white text-lg font-semibold px-3 py-2 rounded-md w-[170px] text-center'>Add to Cart</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}

export default PrdtDetails