const PaginationItem = ({ item, onCurrent, currentPage }) => {
  return (
    <a
      href="#"
      onClick={() => onCurrent(item)}
      className={currentPage === item ? 'on' : ''}
    >
      {item}
    </a>
  );
};

export default PaginationItem;
