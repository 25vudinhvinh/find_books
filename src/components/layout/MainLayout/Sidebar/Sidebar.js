import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { LibraryCard } from '~/components/LibraryCard';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <div className={cx('wrapp')}>
      {/* header */}
      <div className={cx('library-header')}>
        <button className={cx('library-btn')}>
          <svg data-encore-id="icon" role="img" fill="#B3B3B3" aria-hidden="true" viewBox="0 0 24 24">
            <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path>
          </svg>
          Thư viện
        </button>
        <FontAwesomeIcon className={cx('create-playlist-btn')} icon={faPlus} />
      </div>

      {/* content */}
      <div className={cx('content')}>
        <LibraryCard
          title="Tạo danh sách phát đầu tiên của bạn"
          desc="Rất dễ! Chúng tôi sẽ giúp bạn"
          button={
            <Button size="large" color="white">
              Tạo danh sách phát
            </Button>
          }
        />

        <LibraryCard
          title="Hãy cùng tìm và theo dõi một số podcast"
          desc="Chúng tôi sẽ cập nhật cho bạn thông tin về các tập mới"
          button={
            <Button size="large" color="white">
              Duyệt xem podcast
            </Button>
          }
        />
      </div>
    </div>
  );
}

export default Sidebar;
