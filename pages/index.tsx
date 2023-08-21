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
                    key="description"
                />
                <meta property="image" content="https://example.com/images/cool-page.jpg"/>

                <meta property="og:title" content="iPhone 12 XS Max For Sale in Colorado - Big Discounts | Apple"  key="title"/>
                <meta
                    property="og:description"
                    content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
                    key="description"
                />
                <meta property="og:image" content="https://example.com/images/cool-page.jpg"/>
                <link rel="icon" href="/favicon1.png"/>
            </Head>

            <Home />
        </div>

    )
}
