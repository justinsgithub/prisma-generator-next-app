import { type AppType } from "next/app";

import '../src/styles/globals.css'

const MyApp: AppType = ({ Component, pageProps: { ...pageProps }, }) => {
  return (
      <Component {...pageProps} />
  );
};

export default MyApp
