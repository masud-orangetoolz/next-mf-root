import React from 'react';
import dynamic from "next/dynamic";
import LoadingFallback from "../components/common/fallback/LoadingFallback";
import {useGetUserListQuery} from "../src/state/features/users/userApiSlice";

const Contact: React.ComponentType<Partial<{ userList: object[] }>> = dynamic(() => import('remoteApp/Contact'), {
    loading: () => <LoadingFallback />,
    ssr: false,
});

const Index = () => {
    const {data: userList} = useGetUserListQuery({});

    console.log({userList})

    return (
        <div>
            <Contact userList={userList}  />
        </div>
    );
};

export default Index;