import PhotoItem from './PhotoItem';
import { PhotoListsStyle } from './style';
import data from '../../assets/data';

const PhotoLists = () => {
  return (
    <PhotoListsStyle>
      {data.map((item) => (
        <PhotoItem key={item.id} item={item} />
      ))}
    </PhotoListsStyle>
  );
};

export default PhotoLists;
