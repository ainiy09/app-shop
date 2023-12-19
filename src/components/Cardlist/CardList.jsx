import '../Cardlist/styles.css';
import Card from '../Card/Card.jsx'

const Cardlist = ({goods}) => {
    return(
        <div className='cards'>
      { goods.map( (item) => <Card key={item._id} {...item} />)}
    </div>
    )
}

export default Cardlist;