import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html data-theme="black"> {/* Set data-theme here */}
            <Head>
                {/* Add any global meta tags, styles, etc. */}
                
<link rel="stylesheet" href="node_modules/@glidejs/glide/dist/css/glide.core.min.css"></link>


            </Head>
            <body>
                <Main /> {/* This is where the app's pages will be rendered */}
                <NextScript /> {/* This injects Next.js scripts into the page */}
            </body>
        </Html>
    );
}