import { Provider } from "react-redux";
import type {AppProps} from 'next/app'
import RootLayout from "../components/common/layouts/RootLayout";
import {storeWrapper} from "../src/state/store";
import '../styles/globals.css'

export default function App({Component, ...rest}: AppProps) {
    const { store, props } = storeWrapper.useWrappedStore(rest);

    return (
        <Provider store={store}>
        <RootLayout>
            <Component {...props.pageProps} />
        </RootLayout>
        </Provider>
    )

}
