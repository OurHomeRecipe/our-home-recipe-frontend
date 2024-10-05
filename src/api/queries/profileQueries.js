import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../axios/get.me.profile";

// Profile 조회 쿼리
export const useFetchProfile = () => {

    const {data, error} = useQuery({
        queryKey: ['profile'],  // 쿼리 키
        queryFn: getProfile,
        retry: false // 쿼리 실패 시 재시도 방지
        }); 

    return {data, error}// async 함수 내의 불필요한 데이터 구조 제거
    

  };