import { useState } from 'react';
import useAxios from '../../hooks/useAxios';
import { BoardListStyle } from './style';
import BoardTable from './BoardTable';
import Pagination from './Pagination';

const BoardList = () => {
  const url = `https://gist.githubusercontent.com/danbijyj/b3b9e553be6ca9c2662d01a8eb0121b6/raw/8bc4e3af2b87192e860b3841e677efc4418a009c/gistfile1.txt`;
  const { state: posts, loading, error } = useAxios(url);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  const totalPage = posts.length;
  const lastPost = currentPage * postsPerPage;
  const firstPost = lastPost - postsPerPage;
  const pageNumber = Math.ceil(totalPage / postsPerPage);
  const currentPosts = posts.slice(firstPost, lastPost);

  const onCurrent = (id) => {
    setCurrentPage(id);
  };
  return (
    <BoardListStyle>
      <BoardTable currentPosts={currentPosts} loading={loading} />
      <Pagination
        pageNumber={pageNumber}
        onCurrent={onCurrent}
        currentPage={currentPage}
      />
    </BoardListStyle>
  );
};

export default BoardList;
