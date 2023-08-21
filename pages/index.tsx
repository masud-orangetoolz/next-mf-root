import Head from 'next/head'
import Home from "../src/components/home/Home";

export default function Page() {

    function ProductPage() {

        return (
            <div>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <meta charSet="utf-8"/>
                    <title>
                        iPhone 12 XS Max For Sale in Colorado - Big Discounts | Apple
                    </title>
                    <link rel="icon" href="/favicon1.png"/>
                    <meta
                        name="description"
                        content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
                    />
                    <meta
                        property="og:description"
                        content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
                        key={"ogDesc"}
                    />

                    <meta property="og:title" content="iPhone 12 XS Max For Sale in Colorado - Big Discounts | Apple"
                          key={"ogTitle"}/>
                    <meta property="og:image"
                          content="https://jobfalo.sfo3.digitaloceanspaces.com/images/jobfalo-logo.png"
                          key={"ogImage"}/>
                    <meta property="og:url" content="https://jobfalo.com" key={"ogUrl"}/>

                    <meta property="twitter:title"
                          content="iPhone 12 XS Max For Sale in Colorado - Big Discounts | Apple" key={"twTitle"}/>
                    <meta property="twitter:card"
                          content="iPhone 12 XS Max For Sale in Colorado - Big Discounts | Apple" key={"twCard"}/>
                    <meta property="twitter:description"
                          content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
                          key={"twDesc"}/>
                    <meta property="twitter:image"
                          content="https://jobfalo.sfo3.digitaloceanspaces.com/images/jobfalo-logo.png"
                          key={"twImage"}/>
                </Head>

                <Home/>
            </div>

        )
    }
}
