import { ElementType } from 'react';
import { clsx } from 'clsx';

import { PolymorphicComponentPropsType } from '../../../types';
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

/**
 * This is a typography component that encapsulates the styling for body text, e.g. paragraph.
 *
 * @param as - an HTML element to use.
 * @param className - a string for overwriting component styles.
 * @param children - a text content to render.
 * @param size - a font size of the text.
 * @param style - a text style of the text.
 *
 * @example
 * ```tsx
 * <Text as="p" size={Text.size.m} style={Heading.style.normal}>
 *  Normal paragraph
 * </Text>
 * ```
 */
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
