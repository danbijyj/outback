import BoardTr from './BoardTr';
import { BoardStyle } from './style';

const BoardTable = ({ currentPosts, loading }) => {
  if (loading) {
    return <div>로딩중...</div>;
  }
  return (
    <BoardStyle>
      <table>
        <caption>게시판</caption>
        <colgroup>
          <col className="id" />
          <col className="title" />
          <col className="date" />
        </colgroup>
        <thead>
          <tr>
            <th>번호</th>
            <th>타이틀</th>
            <th>날짜</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {currentPosts.map((post) => (
            <BoardTr key={post.id} post={post} />
          ))}
        </tbody>
      </table>
    </BoardStyle>
  );
};

export default BoardTable;
