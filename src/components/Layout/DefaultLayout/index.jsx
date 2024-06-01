import { Link, Outlet } from "react-router-dom";

function DefaultLayout() {
    return (
        <>
            <h1>APP</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/freedom">Freedom</Link>
                    </li>
                    <li>
                        <Link to="/admin">Admin</Link>
                    </li>
                    <li>
                        <Link to="/standard">Standard</Link>
                    </li>
                    <li>
                        <Link to="/pro">Pro</Link>
                    </li>
                </ul>
            </nav>

            <hr />
            <br />
            <Outlet />
        </>
    );
}

export { DefaultLayout };
