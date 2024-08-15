import React, { lazy, Suspense } from 'react';

const LazyCalculator = lazy(() => import('./Calculator'));

const Calculator = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode }) => (
  <Suspense fallback={null}>
    <LazyCalculator {...props} />
  </Suspense>
);

export default Calculator;
