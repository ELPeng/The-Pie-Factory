import  { cakes, cookies, pies, desserts, others } from '../img'

function Gallery(){
    return(
        <>     
            <div className="page-banner">
                <h2>Gallery</h2>
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
                <h3 className='gallery-cat-title'>Cookies</h3>
                <div className='photo-grid-container grid-desserts'>
                    {cookies.map(cookie => {
                        return <div className="photo-grid-item"><img src={cookie} /></div>
                    })}
                </div>
            </div>
            <div className='gallery-category'>
                <h3 className='gallery-cat-title'>Cupcakes</h3>
                <div className='photo-grid-container grid-desserts'>
                    {desserts.map(dessert => {
                        return <div className="photo-grid-item"><img src={dessert} /></div>
                    })}
                </div>
            </div>
            <div className='gallery-category'>
                <h3 className='gallery-cat-title'>Other Desserts (Tarts + more!)</h3>
                <div className='photo-grid-container grid-desserts'>
                    {others.map(other => {
                        return <div className="photo-grid-item"><img src={other} /></div>
                    })}
                </div>
            </div>
        </>
    )
}


export default Gallery