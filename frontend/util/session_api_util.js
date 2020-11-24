export const signup = (user) => {
    return $.ajax({
        method: "POST",
        url: "/api/users",
        data: { user }
            // user: {
            //     username: user.username,
            //     password: user.password
            // }
        // }
    })
}

export const login = (user) => {
    return $.ajax({
        method: "POST",
        url: "/api/session",
        data: { user }
        // user: {
        //     username: user.username,
        //     password: user.password           
        // } 
    });
}

export const logout = () => {
    return $.ajax({
        method: "DELETE",
        url: "/api/session"
    })
}

export const demoLogin = () => (
    $.ajax({
        method: 'POST',
        url: 'api/session',
        data: {
            user:
            {
                email: 'bezos1994@ebay.com',
                password: 'amuzon',
            }
        }
    })
)