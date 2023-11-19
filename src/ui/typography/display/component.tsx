import { ElementType } from 'react';
import { clsx } from 'clsx';

import styles from './styles.module.scss';

type PropsType = {
  className?: string;
};

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
