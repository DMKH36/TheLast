import { BrowserRouter as Router} from 'react-router-dom';

import Menu from '../components/Menu';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
    return (
        <Router>
            <Menu />
            <main>{children}</main>
            <Footer />
        </Router>
    )
};

export default Layout;