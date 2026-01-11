import { Container, PhotoDetailStyle } from './style';
import data from '../assets/data';
import { useNavigate, useParams } from 'react-router-dom';

const PhotoDetail = () => {
    const navigate = useNavigate();
    const { photoID } = useParams();
    const thisPhoto = data.find((item) => item.id === Number(photoID));
    if (!thisPhoto) {
        return <div>해당 제품을 찾을 수 없습니다.</div>;
    }
    const { id, nameeng, namekor, imgurl, desc, price } = thisPhoto;
    const onGo1 = () => {
        navigate('/');
    };
    const onGo2 = () => {
        navigate('/photo');
    };
    const formatPrice = (price) => {
        return price.toLocaleString();
    };

    return (
        <Container>
            <PhotoDetailStyle>
                <div className="inner">
                    <article className="con-box">
                        <strong>{nameeng}</strong>
                        <p>
                            <img src={imgurl} alt={namekor} />
                        </p>
                        <h3>{namekor}</h3>
                        <p>{formatPrice(price)}원</p>
                        <p className="desc">{desc}</p>
                        <p className="btn">
                            <button onClick={onGo1}>Home</button>
                            <button onClick={onGo2}>List</button>
                        </p>
                    </article>
                </div>
            </PhotoDetailStyle>
        </Container>
    );
};

export default PhotoDetail;
