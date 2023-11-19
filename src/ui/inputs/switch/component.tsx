import { HTMLAttributes } from 'react';
import { clsx } from 'clsx';

import styles from './styles.module.scss';

type PropsType = {
  className?: string;
} & HTMLAttributes<HTMLInputElement>;

/**
 * This is an interactive element toggled by the user that holds a boolean value.
 *
 * @param className {string} - a string for overwriting component styles.
 *
 * @example
 * ```tsx
 * <Switch />
 * ```
 */
export const Switch = ({ className, ...rest }: PropsType) => {
  return (
    <label className={clsx(styles.switch, className)}>
      <input {...rest} type="checkbox" role="switch" />
      <span className={clsx(styles.slider)} />
    </label>
  );
};
