import Head from 'next/head'
import Home from "../src/components/home/Home";
import {GetServerSideProps} from "next";

interface IProps {
    title: string,
    description: string,
    image: string,
    url?: string
}

export default function Page(props: IProps) {
    const {title, description, image} = props;

    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta charSet="utf-8"/>
                <title>{title}</title>
                <link rel="icon" href="/favicon1.png"/>

                <meta name="description" content={description}/>
                <meta property="og:description" content={description} key={"ogDesc"}/>

                <meta property="og:title" content={title} key={"ogTitle"}/>
                <meta property="og:image" content={image} key={"ogImage"}/>
                <meta property="og:url" content="https://jobfalo.com" key={"ogUrl"}/>

                <meta property="twitter:title"
                      content={title} key={"twTitle"}/>
                <meta property="twitter:card"
                      content="iPhone 12 XS Max For Sale in Colorado - Big Discounts | Apple" key={"twCard"}/>
                <meta property="twitter:description"
                      content={description}
                      key={"twDesc"}/>
                <meta property="twitter:image"
                      content={image}
                      key={"twImage"}/>
            </Head>

            <Home/>
        </div>

    )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    console.log("context", context)
    return {
        props: {
            title: "iPhone 12 XS Max For Sale in Colorado - Big Discounts | Apple",
            description: "Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice.",
            image: "https://jobfalo.sfo3.digitaloceanspaces.com/images/jobfalo-logo.png",
        },
    }
}



