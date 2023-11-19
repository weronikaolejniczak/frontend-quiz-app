type AsProp<K extends React.ElementType> = {
  as?: K;
};

type PropsToOmit<K extends React.ElementType, P> = keyof (AsProp<K> & P);

type PolymorphicComponentPropsType<
  K extends React.ElementType,
  Props = {}
> = React.PropsWithChildren<Props & AsProp<K>> &
  Omit<React.ComponentPropsWithoutRef<K>, PropsToOmit<K, Props>>;
