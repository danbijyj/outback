import { Link } from 'react-router-dom';

const NotFiles = () => {
    return (
        <div style={{ padding: '200px 0', textAlign: 'center' }}>
            <h2>404</h2>
            <p style={{ marginBottom: '50px' }}>
                요청하신 페이지를 찾을 수 없습니다.
            </p>
            <Link to="/">홈으로 돌아가기</Link>
        </div>
    );
};

export default NotFiles;
