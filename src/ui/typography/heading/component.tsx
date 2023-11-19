import { ElementType } from 'react';
import { clsx } from 'clsx';

import styles from './styles.module.scss';

enum HeadingSizes {
  l = 'large-size',
  m = 'medium-size',
  s = 'small-size',
}

enum HeadingWeight {
  medium = 'medium-weight',
  regular = 'regular-weight',
}

type PropsType = {
  className?: string;
  size: HeadingSizes;
  weight?: HeadingWeight;
};

export const Heading = <K extends ElementType = 'span'>({
  as,
  children,
  className,
  size,
  weight = HeadingWeight.medium,
}: PolymorphicComponentPropsType<K, PropsType>) => {
  const Component = as || 'span';

  return (
    <Component
      className={clsx(styles.heading, styles[size], styles[weight], className)}
    >
      {children}
    </Component>
  );
};

Heading.size = HeadingSizes;
Heading.weight = HeadingWeight;
