import PhotoLists from '../components/photo/PhotoLists';
import PhotoVisual from '../components/photo/PhotoVisual';
import { Container } from './style';

const Photo = () => {
  return (
    <Container>
      <PhotoVisual />
      <div className="inner">
        <p className="title">스테이크 메뉴</p>
        <PhotoLists />
      </div>
    </Container>
  );
};

export default Photo;
