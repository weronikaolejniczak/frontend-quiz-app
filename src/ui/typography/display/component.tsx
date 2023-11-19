import { ElementType } from 'react';
import { clsx } from 'clsx';

import { PolymorphicComponentPropsType } from '../../../types';
import styles from './styles.module.scss';

type PropsType = {
  className?: string;
};

/**
 * This is a typography component that encapsulates the styling for the main heading element.
 *
 * @param as - an HTML element to use.
 * @param className - a string for overwriting component styles.
 * @param children - a text content to render.
 *
 * @example
 * ```tsx
 * <Display>Main title</Display>
 * ```
 */
export const Display = <K extends ElementType = 'h1'>({
  as,
  children,
  className,
}: PolymorphicComponentPropsType<K, PropsType>) => {
  const Component = as || 'h1';

  return (
    <Component className={clsx(styles.display, className)}>
      {children}
    </Component>
  );
};
