import React, { lazy, Suspense } from 'react';

const LazyUtils = lazy(() => import('./Utils'));

const Utils = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode }) => (
  <Suspense fallback={null}>
    <LazyUtils {...props} />
  </Suspense>
);

export default Utils;
