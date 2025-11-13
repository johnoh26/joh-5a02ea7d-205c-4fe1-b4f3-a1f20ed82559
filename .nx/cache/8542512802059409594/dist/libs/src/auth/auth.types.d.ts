export interface AuthRegisterResponse {
    message: string;
}
export interface AuthLoginResponse {
    message: string;
    token?: string;
}
export interface JwtPayload {
    id?: number;
    email?: string;
    role?: string | string[];
    iat?: number;
    exp?: number;
}
