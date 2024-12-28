import classNames from 'classnames/bind';
import styles from './SongInput.module.scss';

const cx = classNames.bind(styles);

function SongInput() {
  return (
    <div className={cx('wrapp')}>
      <input id="song-input" className={cx('song-input')} type="range" min="0" max="100" step="1" />
    </div>
  );
}

export default SongInput;
