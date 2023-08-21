import Head from 'next/head'
import {Container} from "@mui/material";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUsersData} from "../src/state/features/users/usersSlice";
import {selectUsersData} from "../src/state/features/users/usersSelector";
import {useGetUserListQuery} from "../src/state/features/users/userApiSlice";

export default function Home() {
    const dispatch = useDispatch();
    const {data = [], isLoading} = useSelector(selectUsersData);
    const {data: userList} = useGetUserListQuery({});

    console.log({userList})

    let content: null | React.ReactNode;
    if (isLoading) {
        content = <p>isLoading...</p>
    } else if (data?.length > 0) {
        content = (
            <u>
                {data.map((user: {id: string, email: string}) => (
                    <li key={user.id}>{user.email}</li>
                ))}
            </u>
        )
    }

    useEffect(() => {
        dispatch(getUsersData())
    }, [])
    return (
        <>
            <Head>
                <title>
                    iPhone 12 XS Max For Sale in Colorado - Big Discounts | Apple
                </title>
                <meta
                    name="description"
                    content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
                    key="desc"
                />
                <link rel="icon" href="/favicon1.png"/>
            </Head>



            <Container>
                <main>
                    <h1>
                        Welcome to <a href="#">Root App</a>
                    </h1>

                    <p>
                        Get started by editing{' '}
                        <code>pages/index.tsx</code>
                    </p>
                </main>

                {content}
            </Container>
        </>

    )
}
