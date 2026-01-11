const BoardTr = ({ post }) => {
  const { id, title, date } = post;
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>
        <p>{date}</p>
      </td>
    </tr>
  );
};

export default BoardTr;
