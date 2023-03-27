import { useSelector} from 'react-redux';

export const Header = () => {
    const user = useSelector((state) => state.user);

    return (
        <header>
            <h1>Ejemplo de Redux toolkit</h1>
            <ul>
                <li>Name: {user.name}</li>
                <li>Username:
                     {user.username}</li>
                <li>email: {user.email}</li>
            </ul>
        </header>
    )
}