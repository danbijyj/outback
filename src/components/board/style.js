import styled from 'styled-components';
export const BoardVisualStyle = styled.div`
  width: 100%;
  height: 400px;
  background-image: url('./images/sub4_bg.jpg');
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoardListStyle = styled.section``;

export const BoardStyle = styled.div`
  table {
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
    caption {
      display: none;
    }
    .id {
      width: 10%;
    }
    .title {
      width: auto;
    }
    .date {
      width: 20%;
    }

    th,
    td {
      border: 1px solid #000;
      vertical-align: middle;
      padding: 10px;
      p {
        width: 850px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    td {
      &:nth-child(1) {
        text-align: center;
      }
    }
  }
`;

export const PagingStyle = styled.p`
  margin-top: 40px;
  text-align: center;
  a {
    display: inline-block;
    width: 30px;
    height: 30px;
    margin: 0 10px;

    text-align: center;
    line-height: 30px;
    cursor: pointer;
    &.on {
      color: #b01c12;
      font-weight: 600;
    }
  }
`;
