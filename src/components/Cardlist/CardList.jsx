import '../Cardlist/styles.css';
import Card from '../Card/Card.jsx'
import data from '../../assets/data.json';

const Cardlist = ({goods}) => {
    return(
        <div className='cards'>
      { goods.map( (item, index) => <Card key={index} {...item} />)}
    </div>
    )
}

export default Cardlist;