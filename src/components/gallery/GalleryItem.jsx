import { GalleryItemStyle } from './style';

const GalleryItem = ({ item }) => {
    const { user, downloads, views, likes, webformatURL, tags } = item;
    const tagArr = tags.split(',');
    return (
        <GalleryItemStyle>
            <img src={webformatURL} alt={user} />
            <h3>{user}</h3>
            <ul>
                <li>조회수 : {views}</li>
                <li>다운로드 : {downloads}</li>
                <li>좋아요 : {likes}</li>
            </ul>
            <p>
                {tagArr.map((item) => (
                    <span key={item}>#{item.trim()} </span>
                ))}
            </p>
        </GalleryItemStyle>
    );
};

export default GalleryItem;
