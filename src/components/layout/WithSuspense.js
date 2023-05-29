import Loader from "components/common/Loader";
import React, { Suspense } from "react";

const WithSuspense = (Component) => (props) =>
  (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );

export default WithSuspense;
