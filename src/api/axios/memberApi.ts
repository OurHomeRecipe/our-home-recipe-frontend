import API from "../interceptor/API";

// 비밀번호 찾기 API
export const resetPasswordApi = async (data: any) => {
    const response = await API.post('/member/password/reset', data);
    return response.data;
}