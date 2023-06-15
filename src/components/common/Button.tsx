import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

interface Props {
  type?: 'basic' | 'alert';
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
}

function Button({ children, onClick, disabled, loading }: Props) {
  return (
    <button className={cx('Button', { loading })} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
