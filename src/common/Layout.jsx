import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
    return (
        <div>
            <Header />
            {/* 변경되는 컴포넌트 */}
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
