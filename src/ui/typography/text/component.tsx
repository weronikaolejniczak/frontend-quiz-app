import { ElementType } from 'react';
import { clsx } from 'clsx';

import styles from './styles.module.scss';

enum TextSizes {
  m = 'medium-size',
  s = 'small-size',
}

enum TextStyles {
  italic = 'italic-style',
  normal = 'normal-style',
}

type PropsType = {
  className?: string;
  size?: TextSizes;
  style?: TextStyles;
};

export const Text = <K extends ElementType = 'span'>({
  as,
  children,
  className,
  size = TextSizes.m,
  style = TextStyles.normal,
}: PolymorphicComponentPropsType<K, PropsType>) => {
  const Component = as || 'span';

  return (
    <Component
      className={clsx(styles.text, styles[size], styles[style], className)}
    >
      {children}
    </Component>
  );
};

Text.size = TextSizes;
Text.style = TextStyles;
