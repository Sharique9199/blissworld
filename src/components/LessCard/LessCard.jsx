
import style from '../Card/Card.module.css'
import { AiFillHeart } from 'react-icons/ai'

let LessCard=({img,name,desc,price})=>{
    return(
        < >
            <div>
                <div className={style.imageCard}>
                <img src={img} alt="" />
                </div>
                <p className={style.iconHeart}>
                    <AiFillHeart /> <AiFillHeart /> <AiFillHeart /> <AiFillHeart /> <AiFillHeart />
                    </p>
                <h3>{name}</h3>
                <p>{desc}</p>
                <button>Add to bag ${price}</button>
            </div>
        </>
        
        // </>
    )
}
export default LessCard;