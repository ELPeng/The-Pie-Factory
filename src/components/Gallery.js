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
                        {pies.map(pie => {
                           return <div className="photo-grid-item"><img src={pie} /></div>
                        })}
                    </div>
            </div>
            <div className='gallery-category'>
                    <h3 className='gallery-cat-title'>Cakes</h3>
                    <div className='photo-grid-container grid-cakes'>
                        {cakes.map(cake => {
                           return <div className="photo-grid-item"><img src={cake} /></div>
                        })}
                    </div>
            </div>
            <div className='gallery-category'>
                    <h3 className='gallery-cat-title'>Other Desserts</h3>
                    <div className='photo-grid-container grid-desserts'>
                        {desserts.map(dessert => {
                           return <div className="photo-grid-item"><img src={dessert} /></div>
                        })}
                    </div>
            </div>
     
        </>
    )
}


export default Gallery