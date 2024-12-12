export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
}

// mock database
export const users: User[] = [
    {
        id: "1",
        name: "John Doe",
        email: "johndoe@example.com",
        password: "doe123",
    },
    {
        id: "2",
        name: "Jane Smith",
        email: "janesmith@example.com",
        password: "smith123",
    }, {
        id: "3",
        name: "Robert Johnson",
        email: "robertjohnson@example.com",
        password: "johnson123",
    }, {
        id: "4",
        name: "Emily Davis",
        email: "emilydavis@example.com",
        password: "davis123",
    },
];

// mock db operations

export const findUserByEmailAndPassword = (email: string, password: string) => {
    const user = users.find(
        (user) => user.email === email && user.password === password
    );
    return user
};

export const addUser = (user: User) => {
    // look for existing user
    const existingUser = findUserByEmailAndPassword(user.email, user.password)

    if (!existingUser) {
        users.push(user)
    }
};

export const findUser = (id: string) => {
    const user = users.find((u) => u.id === id)
    return user;
};



export const deleteUser = (id: string) => {
    const index = users.findIndex((u) => u.id === id)
    if (index !== -1) {
        users.splice(index, 1)
    }

};