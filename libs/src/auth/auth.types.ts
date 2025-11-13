export interface AuthRegisterResponse {
  message: string;
}

export interface AuthLoginResponse {
  message: string;
  token?: string;
}

// JWT payload returned by sign() in the backend (shape may vary)
export interface JwtPayload {
  id?: number;
  email?: string;
  // optional role if backend adds it
  role?: string | string[];
  iat?: number;
  exp?: number;
}
