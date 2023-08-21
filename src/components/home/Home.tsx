import React, {useEffect} from 'react';
import {Container} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {getUsersData} from "../../state/features/users/usersSlice";
import {selectUsersData} from "../../state/features/users/usersSelector";
import {useGetUserListQuery} from "../../state/features/users/userApiSlice";

const Home = () => {

    const dispatch = useDispatch();
    const {data = [], isLoading} = useSelector(selectUsersData);
    const {data: userList} = useGetUserListQuery({});

    let content: null | React.ReactNode;
    if (isLoading) {
        content = <p>isLoading...</p>
    } else if (data?.length > 0) {
        content = (
            <u>
                {data.map((user: { id: string, email: string }) => (
                    <li key={user.id}>{user.email}</li>
                ))}
            </u>
        )
    }

    useEffect(() => {
        dispatch(getUsersData())
    }, [])

    return (
        <Container>
            <main>
                <h1>
                    iPhone 12 XS Max For Sale in Colorado - Big Discounts | Apple
                </h1>

                <p>
                    Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice.
                </p>

                <p>
                    Get started by editing{' '}
                    <code>pages/index.tsx</code>
                </p>
            </main>

            {content}
        </Container>
    );
};

export default Home;