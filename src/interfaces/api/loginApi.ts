// 로그인 데이터 타입 정의
export interface LoginData {
    email: string;
    password: string;
}

// 로그인 응답 타입 정의
export interface LoginResponse {
    accessToken: string;
    refreshToken: string;
}

export interface LogoutResponse {
    message: string;
}

export interface EmailAuthData {
    email: string;
    authCode: string;
}

export interface RegisterData {
    email: string;
    nickname: string;
    name: string;
    phoneNumber: string;
    password: string;
    passwordConfirm: string;
}

export interface EmailAuthResponse {
    message: string;
}

export interface PasswordReset {
    email: string;
    name: string;
    phoneNumber: string;
}