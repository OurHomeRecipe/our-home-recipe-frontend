import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import API from "../interceptor/API";
import {useSelector} from "react-redux";

/**
 * 프로필 조회 쿼리
 * @author 소연
 */
export const useProfileQuery = () => {
    const accessToken = useSelector((state) => state.login.accessToken);
    
    const {data, error, isLoading} = useQuery({
        queryKey: ['profile'],  // 쿼리 키
        queryFn: async () => {
            try {
                const response = await API.get('/member/me/profile');
                return response.data;
            } 
            catch (error) {
                throw error;
            }
        },
        enabled: !!accessToken,
        retry: false // 쿼리 실패 시 재시도 방지
    });

    return {
        data, error, isLoading
    }
    
};



/**
 * 프로필 업데이트 리액트 쿼리
 * @author 소연
 */
export const useProfileUpdateQuery = () => { 

    const queryClient = useQueryClient();

        const update = useMutation({
            mutationFn: async (profileData) => {
                try {
                    const response = await API.post(
                        '/member/me/profile',
                        profileData,
                        {headers: {"Content-Type": 'multipart/form-data'}},
                        {withCredentials: true}, //CORS
                    );
                    return response.data;
                } catch (error) {
                    throw error;
                }
            },
            onSuccess: (data) => {
                console.log('프로필 업데이트 성공', data);
                alert('프로필이 수정되었습니다.');
                queryClient.invalidateQueries(['profile']); // 프로필 업데이트 성공 시 쿼리 무효화 및 새로고침
            },
            onError: (error) => {
                console.error('프로필 수정 실패:', error);
            }

        });

        const profileUpdate = (formData) => {
            update.mutate(formData);
        }

        return {profileUpdate};

}