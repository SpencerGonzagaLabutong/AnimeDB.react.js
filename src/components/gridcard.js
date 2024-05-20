import { Link } from "react-router-dom";

const GridCard = (props) => {

    const handleAddToList = () => {
        const newItem = { img: props.img, title: props.title, identity: props.identity, url: props.url, p1: props.p1, p2: props.p2, p3: props.p3 };
        props.handleAddToList(newItem); // Call the function passed as a prop
      };


    return ( 
        <>
        
<div className="col-md-4 anime-card">
    <div className="card">
        <img src={props.img} className='card-img-top' alt=""></img> 
        <div className="card-body">
            <h5 className='class-title'>{props.title}</h5>
            <p className='card-text'>Episodes: {props.p1}</p>
            <p className='card-text'>Score: {props.p2}</p>
            <p className='card-text'>Rank: {props.p3}</p>
            <a href={props.url} className='btn btn-dark'>Website link</a>
            <button onClick={handleAddToList} className='btn btn-dark add-to-list'>Add to List</button>
            <Link to='/modal' className='btn btn-dark quick-preview' state={props.identity}>
                Quick Preview
            </Link>
        </div>
    </div>  
</div>


        </>
     );
}
 
export default GridCard ;