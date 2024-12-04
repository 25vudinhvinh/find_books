import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';

function MainLayout({ children }) {
  return (
    <div>
      <header>
        <Header />
      </header>
      <div className="container">
        <Sidebar />
        <div>{children}</div>
      </div>
    </div>
  );
}

export default MainLayout;
