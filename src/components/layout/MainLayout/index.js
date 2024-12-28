import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import styles from './MainLayout.module.scss';
import classNames from 'classnames/bind';
import SongCard from '~/components/SongCard/SongCard';

const cx = classNames.bind(styles);

function MainLayout({ children }) {
  return (
    <div>
      <header className={cx('header')}>
        <Header />
      </header>
      <div className={cx('container')}>
        <Sidebar />
        <div className={cx('content')}>{children}</div>
      </div>
      <div className={cx('footer')}>
        <SongCard />
      </div>
    </div>
  );
}

export default MainLayout;
