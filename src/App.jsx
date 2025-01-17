import React, { Suspense } from "react";

import Routes from "src/routes/NavRoutes";
import Loader from "src/components/Common/Loader/Loader";
import LangContext from "src/utils/LanguageContext";
import ScrollToTop from "./utils/ScrollToTop";
import { store, persistor } from "src/store/index";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "react-international-phone/style.css";

import "./App.css";

function App() {
  const [lang, setLang] = React.useState("en");

  return (
    <>
      <Suspense fallback={<Loader />}>
        <LangContext.Provider value={{ lang, setLang }}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <ToastContainer
                position="top-right"
                autoClose={3500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false}
                theme="light"
              />
              <ScrollToTop />
              <Routes />
            </PersistGate>
          </Provider>
        </LangContext.Provider>
      </Suspense>
    </>
  );
}

export default App;
