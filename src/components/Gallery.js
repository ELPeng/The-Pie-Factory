import { useState, useEffect } from 'react'
import  TransitionsModal from  './Modal'
import  { cakes, cookies, cupcakes, others } from '../img'

function Gallery(){
    // If view mode is desktop, allows each gallery image to be bring up a modal when clicked. On mobile, this feature is disabled.
    const [isDesktop, setIsDesktop] = useState(true)

    const updateViewMode = () => {
        setIsDesktop(window.innerWidth > 1450)
    }

    useEffect(() => {
        updateViewMode()
        window.addEventListener('resize', updateViewMode)
        return () => {
            window.removeEventListener('resize', updateViewMode)
        }
    }, [])

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return(
        <>     
            <div className="page-banner">
                <h2>Gallery</h2>
            </div>

            <div className='gallery-category'>
                <h3 className='gallery-cat-title'>Cakes</h3>
                <div className='photo-grid-container grid-desserts'>
                    {cakes.map(cake => {
                        return (
                            <div className="photo-grid-item">
                                {isDesktop ? <TransitionsModal imgSrc={cake}/> : <img src={cake} />}
                            </div> 

                        )   
                    })}
                </div>
            </div>

            <div className='gallery-category'>
                <h3 className='gallery-cat-title'>Cookies</h3>
                <div className='photo-grid-container grid-desserts'>
                    {cookies.map(cookie => {
                        return (
                            <div className="photo-grid-item">
                                {isDesktop ? <TransitionsModal imgSrc={cookie} /> : <img src={cookie} />}
                            </div> 

                        )   
                    })}
                </div>
            </div>

            <div className='gallery-category'>
                <h3 className='gallery-cat-title'>Cupcakes</h3>
                <div className='photo-grid-container grid-desserts'>
                    {cupcakes.map(cupcake => {
                        return (
                            <div className="photo-grid-item">
                                {isDesktop ? <TransitionsModal imgSrc={cupcake}/> : <img src={cupcake} />}
                            </div> 

                        )   
                    })}
                </div>
            </div>

            <div className='gallery-category'>
                <h3 className='gallery-cat-title'>Desserts (Tarts + more!)</h3>
                <div className='photo-grid-container grid-desserts'>
                    {others.map(other => {
                        return (
                            <div className="photo-grid-item">
                                {isDesktop ? <TransitionsModal imgSrc={other}/> : <img src={other} />}
                            </div> 

                        )   
                    })}
                </div>
            </div>
        </>
    )
}


export default Gallery