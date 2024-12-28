import classNames from 'classnames/bind';
import styles from './SongCard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBackwardStep,
  faBars,
  faForwardStep,
  faMusic,
  faPlay,
  faPlus,
  faRepeat,
  faShuffle,
  faSquareCaretRight,
  faUpRightAndDownLeftFromCenter,
  faVolumeDown
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef } from 'react';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import SongInput from '../SongInput/SongInput';
const cx = classNames.bind(styles);

function SongCard() {
  const favSongBtnRef = useRef();
  const songShuffleBtnRef = useRef();
  const songPrevBtnRef = useRef();
  const songPlayBtnRef = useRef();
  const songNextBtnRef = useRef();
  const songRepeatBtnRef = useRef();

  useEffect(() => {
    tippy(favSongBtnRef.current, {
      content: 'Thêm vào Bài hát đã thích',
      placement: 'top'
    });
    tippy(songShuffleBtnRef.current, {
      content: 'Bật trộn bài',
      placement: 'top'
    });
    tippy(songPrevBtnRef.current, {
      content: 'Trước',
      placement: 'top'
    });
    tippy(songPlayBtnRef.current, {
      content: 'Phát',
      placement: 'top'
    });
    tippy(songNextBtnRef.current, {
      content: 'Sau',
      placement: 'top'
    });
    tippy(songRepeatBtnRef.current, {
      content: 'Lặp lại',
      placement: 'top'
    });
  });
  return (
    <div className={cx('wrapp')}>
      {/* song */}
      <div className={cx('song')}>
        <div className={cx('song-img')}>
          <img alt="songIMG" src="https://ddk.1cdn.vn/2024/11/19/untitled-7.jpg" />
        </div>
        <div className={cx('song-info')}>
          <span>number one girl</span>
          <p>ROSÉ</p>
        </div>
        <FontAwesomeIcon ref={favSongBtnRef} icon={faPlus} className={cx('add-song-fav')} />
      </div>

      {/* control song */}
      <div className={cx('song-control')}>
        <div className={cx('song-manage')}>
          <div ref={songShuffleBtnRef} className={cx('btn', 'btn-shffle')}>
            <FontAwesomeIcon icon={faShuffle} />
          </div>

          <div ref={songPrevBtnRef} className={cx('btn', 'btn-backward')}>
            <FontAwesomeIcon icon={faBackwardStep} />
          </div>
          <div ref={songPlayBtnRef} className={cx('btn', 'btn-play')}>
            <FontAwesomeIcon icon={faPlay} />
          </div>
          <div ref={songNextBtnRef} className={cx('btn', 'btn-forward')}>
            <FontAwesomeIcon icon={faForwardStep} />
          </div>
          <div ref={songRepeatBtnRef} className={cx('btn', 'btn-repeat')}>
            <FontAwesomeIcon icon={faRepeat} />
          </div>
        </div>
        <div className={cx('song-progress')}>
          <span>2:36</span>
          <SongInput size="large" />
          <span>3:36</span>
        </div>
      </div>

      {/* actions   */}
      <div className={cx('actions')}>
        <FontAwesomeIcon icon={faSquareCaretRight} />
        <FontAwesomeIcon icon={faMusic} />
        <FontAwesomeIcon icon={faBars} />
        <FontAwesomeIcon icon={faVolumeDown} />
        <SongInput />
        <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
      </div>
    </div>
  );
}

export default SongCard;
