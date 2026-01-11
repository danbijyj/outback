import BoardVisual from '../components/board/BoardVisual';
import BoardList from '../components/board/BoardList';
import { Container } from './style';

const Board = () => {
  return (
    <Container>
      <BoardVisual />
      <div className="inner">
        <BoardList />
      </div>
    </Container>
  );
};

export default Board;
