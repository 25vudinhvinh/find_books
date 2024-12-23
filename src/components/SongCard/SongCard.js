import classNames from 'classnames/bind';
import styles from './SongCard.module.scss';
const cx = classNames.bind(styles);

function SongCard() {
  return (
    <div className={cx('wrapp')}>
      <div className="song">
        <div className={cx('song-img')}>
          <img alt="songIMG" src="https://ddk.1cdn.vn/2024/11/19/untitled-7.jpg" />
        </div>
      </div>
    </div>
  );
}

export default SongCard;
