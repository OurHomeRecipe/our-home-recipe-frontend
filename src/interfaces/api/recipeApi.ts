
/**
 * 레시피 등록 응답 데이터 타입 정의
 */
export interface RecipeRegisterResponse {
    id: number; // 등록된 레시피 ID
    message: string; // 성공 메시지
}

/**
 *  레시피 데이터 타입 정의
 */
export interface RecipeData {
    // 여기에 필요한 레시피 필드를 추가합니다.
    title: string;
    ingredients: string[];
    instructions: string;
    image: File | null;
    // 예: image: File | null; (파일 업로드를 위한 필드)
}

/**
 * 리뷰 등록 응답 데이터 타입 정의
 */ 
export interface RecipeReviewResponse {
    id: number; // 등록된 리뷰 ID
    message: string; // 성공 메시지
}

/**
 * 리뷰 등록 함수에 대한 매개변수 타입 정의
 */
export interface RecipeReviewData {
    recipeId: number; // 레시피 ID
    content: string; // 리뷰 내용
    rating: number; // 평점
}
