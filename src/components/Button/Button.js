import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ children, onClick, color }) {
  return (
    <button className={cx(`btn`, `${color}-btn`)} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
