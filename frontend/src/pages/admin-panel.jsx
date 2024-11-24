import { getAllUsers } from '@/api/apiAllUsers';
import UserCard from '@/components/UserCard';
import useApiFetch from '@/hooks/useApiFetch';
import React, { useEffect } from 'react';
import { UsersLoading } from '@/components/UsersLoading';

const AdminPanel = () => {
    const {
        data: users,
        error: errorGetUsers,
        loading: loadingGetUsers,
        fn: fnGetUsers,
    } = useApiFetch(getAllUsers);

    useEffect(() => {
        fnGetUsers();
    }, []);

    if (loadingGetUsers) {
        return <UsersLoading/>;
    }

    if (errorGetUsers) {
        return <div>{`Error fetching users data... ${errorGetUsers}`}</div>;
    }

    return (
        <div>
            <ul>
                {users && users.totalCount > 0 ? (
                    users.data.map((user) => (
                        <li key={user.id}>
                            <UserCard key={user.id} user={user} />
                        </li>
                    ))
                ) : (
                    <div>No user found 👀</div>
                )}
            </ul>
        </div>
    );
};

export default AdminPanel;
