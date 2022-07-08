import { forwardRef } from 'react';
import cn from 'classnames';
import InputProps from './Input.props';
import styles from './Input.module.css';

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => (
  <div className={styles.inputContainer}>
    <input ref={ref} className={cn(className, styles.input)} {...props} />
  </div>
));

export default Input;
