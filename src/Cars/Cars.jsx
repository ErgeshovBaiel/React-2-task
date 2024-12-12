import './Cars.css'

const Cars = (props) => {
    return (
        <div className='Cars-compania'> 
        <div className='cars-card'>
            <img src={props.imgUrl} alt=""   className='cars-img'/>
            <div className='nurs'>
                <div className='bai'>
            <h3 className='cars-name'> {props.carsName} </h3>
            <div className='cars-imgs'>
                <img src= {props.carsUrl}  alt="" className='cars-carsUrl' />
                <img src= {props.carsUrl2}  alt="" className='cars-carsUrl2' />
            </div>
                </div>
            <p className='cars-text'> {props.carsP} </p>
            <div className='cars-btn'>
                <button className='btn'> {props.carsBtn} </button>
                <h4 className='auto'> {props.carsh4} </h4>
            </div>
            <h2 className='som'> {props.carskgs}  KGS</h2>
            <h4 className='dollar'> {props.carsusd}  USD</h4>
            <div className='Chyi'>
                <p className='Bishkek'> {props.carsTime} Бишкек</p>
                <h1 className='Kant'> {props.carsh1} </h1>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Cars