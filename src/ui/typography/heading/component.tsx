import { ElementType } from 'react';
import { clsx } from 'clsx';

import { PolymorphicComponentPropsType } from '../../../types';
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

/**
 * This is a typography component that encapsulates the styling for heading elements except for the h1.
 *
 * @param as {ElementType} - an HTML element to use.
 * @param className {string} - a string for overwriting component styles.
 * @param children {ReactNode} - a text content to render.
 * @param size {HeadingSizes} - a font size of the heading.
 * @param weight {HeadingWeight} - a font weight of the heading.
 *
 * @example
 * ```tsx
 * <Heading as="h2" size={Heading.size.l} weight={Heading.weight.medium}>
 *  Big and bold title
 * </Heading>
 * ```
 */
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
