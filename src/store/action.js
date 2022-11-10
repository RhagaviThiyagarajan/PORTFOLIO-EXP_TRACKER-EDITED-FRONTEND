export const LoginStart=(userCredentials)=>(
    {
        type:"LOGIN_START"
    }
)


export const LoginSuccessful=(user)=>(
    {
        type:'LOGIN_SUCCESS',
        payLoad:user,
    }
);



export const LoginFailure=()=>(
    {
        type:'LOGIN_FAILURE',
    }
);

export const Logout=()=>(
    {
        type:'LOGOUT',
    }
);
