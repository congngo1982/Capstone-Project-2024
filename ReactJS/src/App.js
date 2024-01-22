import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { HelmetProvider } from 'react-helmet-async';

import AppNavigation from './navigation/app-navigation';
import { store } from './redux/store';

function App() {
  return (
    <>
      <Provider store={store}>
          <HelmetProvider>
            <AppNavigation />
            {/* thanh thông báo trạng thái */}
            <ToastContainer />
          </HelmetProvider>
      </Provider>
    </>
  );
}

export default App;
