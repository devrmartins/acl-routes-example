import { string } from "prop-types";
import { Routes as RoutesDom, Route } from "react-router-dom";

import { Admin, Freedom, Pro, Standard, NotAllowed } from "../pages/index";
import { DefaultLayout, AccessControl } from "../components";
import { defaultAcl, isAllowed } from "./acl/index";

const routes = [
    {
        path: "/freedom",
        element: Freedom,
        acl: { ...defaultAcl, FREEDOM: { allow: true } },
    },
    {
        path: "/admin",
        element: Admin,
        acl: { ...defaultAcl },
    },
    {
        path: "/standard",
        element: Standard,
        acl: { ...defaultAcl, STANDARD: { allow: true } },
    },
    {
        path: "/pro",
        element: Pro,
        acl: {
            ...defaultAcl,
            PRO: { allow: true },
        },
    },
];

function Routes({ currentRole }) {
    return (
        <RoutesDom>
            <Route path="/" element={<DefaultLayout />}>
                {routes.map(({ path, element: Element, acl }) => (
                    <Route
                        key={path}
                        path={path}
                        element={
                            <AccessControl
                                allowed={isAllowed({ path, acl, currentRole })}
                            >
                                <Element />
                            </AccessControl>
                        }
                    />
                ))}
                <Route path="/not-allowed" element={<NotAllowed />} />
                <Route path="*" element={<h1>404</h1>} />
            </Route>
        </RoutesDom>
    );
}

Routes.propTypes = {
    currentRole: string.isRequired,
};

export { Routes };
