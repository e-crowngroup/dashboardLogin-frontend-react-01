import React, {useContext} from 'react'
import StoreContext from 'components/Store/Context';
import { AiOutlineCloseSquare } from 'react-icons/ai'
import { GoReply } from 'react-icons/go'

import { Link }from 'react-router-dom'




import './ProductSellingLacie.css'
import RenderProductSellingLacie from './RenderProductSellingLacie';


const ProductSellingLacie = () => {
    const { setToken } = useContext(StoreContext);
    
 
    return (
        <div className="container-full">
        
        <div className="box-container-over">
            <div className="btn-box">
          
            
            <Link to="/dashboardLacieh">
            <GoReply className="btn-btn">Voltar</GoReply>
            </Link>

            <AiOutlineCloseSquare  className="btn-btn" onClick={() => setToken(null)} />
            </div>
            
            <h1>Campaign Overview Lacie</h1>
            
            <div className="content">
               <RenderProductSellingLacie />
            </div>
        </div>
        </div>
    )

}

export default ProductSellingLacie;