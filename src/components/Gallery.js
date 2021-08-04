import  { cakes, pies, desserts } from '../img'

function Gallery(){
    return(
        <>     
            <div className="page-banner">
                <h2>Gallery</h2>
            </div>
            <div className='gallery-category'>
                    <h3 className='gallery-cat-title'>Pies</h3>
                    <div className='photo-grid-container grid-pies'>
                        {pies.map((pie, index) => {
                           return <img className='photo-grid-img' src={pie} />
                        })}
                    </div>
            </div>
            <div className='gallery-category'>
                    <h3 className='gallery-cat-title'>Cakes</h3>
                    <div className='photo-grid-container grid-cakes'>
                        {cakes.map((cake, index) => {
                           return <img className='photo-grid-img' src={cake} />
                        })}
                    </div>
            </div>
            <div className='gallery-category'>
                    <h3 className='gallery-cat-title'>Other Desserts</h3>
                    <div className='photo-grid-container grid-desserts'>
                        {desserts.map((dessert, index) => {
                           return <img className='photo-grid-img' src={dessert} />
                        })}
                    </div>
            </div>
     
        </>
    )
}


export default Gallery