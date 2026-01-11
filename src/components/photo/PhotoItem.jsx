import { Link } from 'react-router-dom';

const PhotoItem = ({ item }) => {
    const { id, namekor, imgurl } = item;
    return (
        <li>
            <Link to={`/photo/${id}`}>
                <h3>{namekor}</h3>
                <p>
                    <img src={imgurl} alt={namekor} />
                </p>
            </Link>
        </li>
    );
};

export default PhotoItem;
