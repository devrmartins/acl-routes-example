import { bool, element } from "prop-types";
import { Navigate } from "react-router-dom";

const AccessControl = ({ allowed = false, children }) => {
    if (!allowed) {
        return <Navigate to="/not-allowed" />;
    }

    return children;
};

AccessControl.propTypes = {
    children: element.isRequired,
    allowed: bool,
};

export { AccessControl };
