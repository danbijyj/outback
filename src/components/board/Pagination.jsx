import PaginationItem from './PaginationItem';
import { PagingStyle } from './style';

const Pagination = ({ pageNumber, onCurrent, currentPage }) => {
  const arr = [...Array(pageNumber)].map((_, i) => i + 1);
  return (
    <PagingStyle>
      {arr.map((item) => (
        <PaginationItem
          key={item}
          item={item}
          onCurrent={onCurrent}
          currentPage={currentPage}
        />
      ))}
    </PagingStyle>
  );
};

export default Pagination;
