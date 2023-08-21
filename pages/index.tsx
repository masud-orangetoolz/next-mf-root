import Head from 'next/head'
import Home from "../src/components/home/Home";

export default function Page() {

    return (
        <div>
            <Head>
                <title>
                    iPhone 12 XS Max For Sale in Colorado - Big Discounts | Apple
                </title>
                <meta
                    name="description"
                    content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
                />
                <link rel="icon" href="/favicon1.png"/>

                <meta property="og:title" content="iPhone 12 XS Max For Sale in Colorado - Big Discounts | Apple"/>
                <meta
                    property="og:description"
                    content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
                />
                <meta property="og:image" content="https://example.com/images/cool-page.jpg"/>
                <meta property="og:url" content="https://example.com"/>

                <meta property="twitter:image" content="https://example.com/images/cool-page.jpg"/>
                <meta property="twitter:card" content="iPhone 12 XS Max For Sale in Colorado - Big Discounts | Apple"/>
                <meta property="twitter:title" content="iPhone 12 XS Max For Sale in Colorado - Big Discounts | Apple"/>
                <meta property="twitter:description" content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."/>
            </Head>

            <Home/>
        </div>

    )
}
