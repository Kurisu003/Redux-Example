// For Normal Slice
export type user = {
    id: number;
    username: string;
    email: string;
    name: string;
    city: string;
}

// For API Slice
export type album = {
    id: number;
    Uid: number;
    title: string;
}

// For Entity Adapter
export type todo = {
    id: number;
    title: string;
    completed: boolean;
}

// For Thunk Slice
export type post = {
    Uid: number;
    id: number;
    title: string;
    body: string;
}