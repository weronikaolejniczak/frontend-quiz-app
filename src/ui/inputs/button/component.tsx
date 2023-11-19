import { HTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';

import styles from './styles.module.scss';

type PropsType = {
  children?: ReactNode;
  className?: string;
  label: string;
} & HTMLAttributes<HTMLButtonElement>;

/**
 * This is an interactive element activated by user that triggers an action within the application.
 *
 * @param className {string} - a string for overwriting component styles.
 * @param children {ReactNode} - a text content to render.
 * @param label {string} - an aria label read by screen-readers.
 *
 * @example
 * ```tsx
 * <Button label="Click me">
 *  Click me
 * </Button>
 * ```
 */
export const Button = ({ children, className, label, ...rest }: PropsType) => {
  return (
    <button
      className={clsx(styles.button, className)}
      aria-label={label}
      {...rest}
    >
      {children}
    </button>
  );
};
