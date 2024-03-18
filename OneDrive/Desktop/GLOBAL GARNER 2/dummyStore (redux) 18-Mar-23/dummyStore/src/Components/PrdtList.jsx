import React, {useEffect} from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { PrdtComponent } from './PrdtComponent';
//import action
import { setPrdt } from '../Redux/Actions/prdtActions';

export const PrdtList = () => {
    //fetch prdt from redux store and ACCESS PRDT in any component
    //useSelector is used to access redux Store
    const prdts = useSelector((state) => state);

    const dispatch = useDispatch()

    const fetchPrdts = async() => {
        const resp =await axios
          .get("https://fakestoreapi.com/products")
          .catch(err => console.log(err));
        //dispatch action
        dispatch(setPrdt(resp.data));  //goes to action and returns object
        //obj is then taken by reducers which holds type and PayLoad
    }

    useEffect( () => {
        fetchPrdts();
    })

    console.log("All products: ",prdts);

  return (
    <div className='mt-24 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 mx-3'>
        <PrdtComponent/>
    </div>
  )
}
