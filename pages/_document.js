import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      
        <>
          <meta charSet="utf-8" />
          {/* <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Title Here</title> */}
          {/* Favicon */}
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
     
          {/* <link rel="icon" type="image/png" sizes="32x32" href="favicon.ico" /> */}
          {/* partial:partial/__stylesheets.html */}
          {/* <link rel="stylesheet" href="./../assets/css/plugins/bootstrap.min.css" /> */}
          {/* <link rel="stylesheet" href="./../assets/css/plugins/animate.min.css" /> */}
          <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
                  
         {/* Icon Fonts */}
          <link rel="stylesheet" href="./../assets/fonts/flaticon/flaticon.css" />
        
          <link
            rel="stylesheet"
            href="./../assets/css/plugins/font-awesome.min.css"
          />
          {/* Template Style sheet */}
          {/* <link rel="stylesheet" href="./../assets/css/style.css" />
          <link rel="stylesheet" href="./../assets/css/responsive.css" /> */}
          
          {/* partial */}
        </>
      </Head>
      <body>
        <Main />
        <NextScript >
        
        
        </NextScript>
      </body>
    </Html>
  );
}
