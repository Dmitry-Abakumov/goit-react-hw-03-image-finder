import { ToastContainer } from 'react-toastify';

import ImageSearch from 'modules/ImageSearch/ImageSearch';

export const App = () => {
  return (
    <>
      <ImageSearch />;
      <ToastContainer />
    </>
  );
};
