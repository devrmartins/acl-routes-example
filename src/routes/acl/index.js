const defaultAcl = {
    ADMIN: {
        allow: true,
    },
    STANDARD: {
        allow: false,
    },
    PRO: {
        allow: false,
    },
    FREEDOM: {
        allow: false,
    },
};

const isAllowed = ({ path, acl, currentRole }) => {
    console.log(path ,acl, currentRole, acl[currentRole].allow)
    return acl[currentRole].allow || false;
};

export { defaultAcl, isAllowed };
