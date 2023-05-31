import PageLoader from "components/common/loaders/pageloader";
import React, { Suspense } from "react";

const WithSuspense = (Component) => (props) =>
  (
    <Suspense fallback={<PageLoader size={40} />}>
      <Component {...props} />
    </Suspense>
  );

export default WithSuspense;
