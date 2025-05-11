export interface User {
    id?: string;
    username: string;
    email: string;
    password_hash: string;

}
// export interface TokenPayload extends JwtPayload {
//     id: string;
//     username: string;
// }