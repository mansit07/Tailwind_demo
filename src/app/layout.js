'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './components/navbar';

import { Provider } from 'react-redux'
import { applyMiddleware, legacy_createStore as createStore, compose } from 'redux';
import {thunk} from 'redux-thunk';
import rootReducer from './redux/reducers';
import loggerMiddleware from './redux/middleware/logger';
import monitorReducerEnhancer from './redux/enhancers/monitorReducer';

const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunk)

const composedEnhancers = compose(middlewareEnhancer, monitorReducerEnhancer)

const store = createStore(rootReducer, undefined, composedEnhancers)

const inter = Inter({ subsets: ["latin"] });


// export const metadata = {
//   title: "My demo",
//   description: "Mansi's assignment",
// };

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
