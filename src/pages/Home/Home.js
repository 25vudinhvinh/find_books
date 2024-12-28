import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx('wrapp')}>
      <div className={cx('header')}>
        <Button color="white" size="small">
          Tất cả
        </Button>

        <Button color="white" size="small">
          Âm nhạc
        </Button>

        <Button color="white" size="small">
          Podcast
        </Button>
      </div>
    </div>
  );
}

export default Home;
