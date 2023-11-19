import {
  ElementType,
  PropsWithChildren,
  ComponentPropsWithoutRef,
} from 'react';

type AsProp<K extends ElementType> = {
  as?: K;
};

type PropsToOmit<K extends ElementType, P> = keyof (AsProp<K> & P);

export type PolymorphicComponentPropsType<
  K extends ElementType,
  Props = {}
> = PropsWithChildren<Props & AsProp<K>> &
  Omit<ComponentPropsWithoutRef<K>, PropsToOmit<K, Props>>;
