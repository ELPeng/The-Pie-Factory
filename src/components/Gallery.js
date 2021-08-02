import { cake1, cake2, cake3, cake4, cake5, cake6, cake7, cake8, cake9, cake10, cake11, cake12, cake13 } from '../img'
import { dessert1, dessert2, dessert3, dessert4, dessert5, dessert6, dessert7, dessert8, dessert9, dessert10, dessert11, dessert12 } from '../img'
import { pie1, pie2, pie3, pie4, pie5, pie6 } from '../img'

function Gallery(){

    return(
        <>     
            <div className="page-banner">
                <h2>Gallery</h2>
            </div>
            <div className='gallery-category'>
                    <h3 className='gallery-cat-title'>Pies</h3>
                    <div className='photo-grid-container grid-pies'>
                        <img className='photo-grid-img' src={pie1} /> 
                        <img className='photo-grid-img' src={pie2} />
                        <img className='photo-grid-img' src={pie3} />
                        <img className='photo-grid-img' src={pie4} /> 
                        <img className='photo-grid-img' src={pie5} /> 
                        <img className='photo-grid-img' src={pie6} /> 
                    </div>
            </div>
            <div className='gallery-category'>
                <h3 className='gallery-cat-title'>Cakes</h3>
                <div className='photo-grid-container grid-cakes'> 
                    <img className='photo-grid-img' src={cake1} /> 
                    <img className='photo-grid-img' src={cake2} />
                    <img className='photo-grid-img' src={cake3} />
                    <img className='photo-grid-img' src={cake4} /> 
                    <img className='photo-grid-img' src={cake5} /> 
                    <img className='photo-grid-img' src={cake6} /> 
                    <img className='photo-grid-img' src={cake7} /> 
                    <img className='photo-grid-img' src={cake8} /> 
                    <img className='photo-grid-img' src={cake9} /> 
                    <img className='photo-grid-img' src={cake10} /> 
                    <img className='photo-grid-img' src={cake11} /> 
                    <img className='photo-grid-img' src={cake12} /> 
                    <img className='photo-grid-img' src={cake13} /> 
                </div>
            </div>
            <div className='gallery-category'>
                <h3 className='gallery-cat-title'>Other Desserts</h3>
                <div className='photo-grid-container grid-desserts'>
                    <img className='photo-grid-img' src={dessert1} />
                    <img className='photo-grid-img' src={dessert4} /> 
                    <img className='photo-grid-img' src={dessert3} /> 
                    <img className='photo-grid-img' src={dessert2} /> 
                    <img className='photo-grid-img' src={dessert5} /> 
                    <img className='photo-grid-img' src={dessert6} />
                    <img className='photo-grid-img' src={dessert7} /> 
                    <img className='photo-grid-img' src={dessert8} /> 
                    <img className='photo-grid-img' src={dessert9} /> 
                    <img className='photo-grid-img' src={dessert10} />
                    <img className='photo-grid-img' src={dessert11} /> 
                    <img className='photo-grid-img' src={dessert12} /> 
                </div>
            </div>
        </>
    )
}


export default Gallery