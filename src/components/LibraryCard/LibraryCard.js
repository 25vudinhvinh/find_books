import styles from './LibraryCard.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function LibraryCard({ title, desc, button }) {
  return (
    <div className={cx('wrapp')}>
      <span className={cx('title')}>{title}</span>
      <span className={cx('desc')}>{desc}</span>
      {button}
    </div>
  );
}

export default LibraryCard;
