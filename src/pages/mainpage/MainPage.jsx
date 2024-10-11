import common from '../../css/pages/page.common.module.css'
import style from './style/mainPage.module.css'
import RecipeCard from './component/recipeCard'
import { useState } from 'react';


export default function MainPage() {

  const [currentPage, setCurrentPage] = useState(1); //현재 페이지

  const itemsPerPage = 9; //한 페이지에 보여줄 아이템 개수
  const startIndex = (currentPage - 1) * itemsPerPage; //0, 9, 18, 27... 
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage); // {0~8} {9~17} {18~26} ...

    // 3개씩 배열을 그룹화
    const getRows = (items) => {
      const rows = [];
      for (let i = 0; i < items.length; i += 3) {
        rows.push(items.slice(i, i + 3));
      }
      console.log('새로운 배열', rows);
      return rows;
    };

  return (
    <div className={common.frame}>
      {
        getRows(currentItems).map((row, rowIndex) => 
          <div key={rowIndex} className={style.rowFrame}>
            {
              row.map((item, itemIndex) => <RecipeCard key={itemIndex} item={item}/>)
            }
          </div>
        )
      }

      <div className={style.pagination}>
        <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>이전</button>
        <button onClick={() => setCurrentPage(currentPage + 1)}>다음</button>
      </div>

    </div>
  )

}


//Mock Data
const items = [
  {
    imgFile: 'https://homecuisine.co.kr/files/attach/images/140/868/087/c936189e03c496989162bf511a99b12e.JPG',
    recipeName: '마라떡볶이',
    NickName: '소연',
    recipeDesc: '마라맛이 나는 떡볶이'
  },
  {
    imgFile: 'https://www.sbfoods-worldwide.com/ko/recipes/qfttv70000001txe-img/9_FriedRice_L.png',
    recipeName: '볶음밥',
    NickName: '성오',
    recipeDesc: '햄이 잔뜩 들어간 햄 맛 짱 강한 볶음밥을 원하시나요?!'
  },
  {
    imgFile: 'https://cdn.mkhealth.co.kr/news/photo/202002/img_MKH200225001_0.jpg',
    recipeName: '고구마맛탕',
    NickName: '유진',
    recipeDesc: '고구마맛탕 레시피입니다. 고구마 한 개면 한끼 뚝딱'
  },
  {
    imgFile: 'https://recipe1.ezmember.co.kr/cache/recipe/2021/10/12/b93cbb9da52c5edf702f312d678979a91.jpg',
    recipeName: '토마토계란볶음',
    NickName: '차은우',
    recipeDesc: '차은우처럼 먹으면 차은우처럼 되나요? 차은우가 픽한 요리 토.달.볶'
  },
  {
    imgFile: 'https://recipe1.ezmember.co.kr/cache/recipe/2016/08/30/a85a01bb815660d165711089b6aea41f.jpg',
    recipeName: '짜파구리',
    NickName: '원영',
    recipeDesc: '짜짜라짜짜 짜~파게티~'
  },
  {
    imgFile: 'https://i.namu.wiki/i/QmCg_wtSaWqRXR5-gIBfAy36a14b7WOzSwMIu3AC7BECbdRKN1uOb22mes9px6thnhl2kXh1eKUWStoQLLX9WQ.webp',
    recipeName: '김치볶음밥',
    NickName: '카리나',
    recipeDesc: '더이상 멘트가 생각나지 않음. 카리나는 존예 여신이다'
  },
  {
    imgFile: 'https://recipe1.ezmember.co.kr/cache/recipe/2017/01/17/3d67642d4eddda0984123d1f7c587cf11.jpg',
    recipeName: '돈가스김밥',
    NickName: '소연',
    recipeDesc: '요즘 돈가스 김밥 한줄이 5000원 넘나? 미친 물가다 ㄹㅇ..'
  },
  {
    imgFile: 'https://recipe1.ezmember.co.kr/cache/recipe/2017/01/17/3d67642d4eddda0984123d1f7c587cf11.jpg',
    recipeName: '돈가스김밥',
    NickName: '소연',
    recipeDesc: '요즘 돈가스 김밥 한줄이 5000원 넘나? 미친 물가다 ㄹㅇ..'
  },
  {
    imgFile: 'https://recipe1.ezmember.co.kr/cache/recipe/2017/01/17/3d67642d4eddda0984123d1f7c587cf11.jpg',
    recipeName: '돈가스김밥',
    NickName: '소연',
    recipeDesc: '요즘 돈가스 김밥 한줄이 5000원 넘나? 미친 물가다 ㄹㅇ..'
  },
  {
    imgFile: 'https://recipe1.ezmember.co.kr/cache/recipe/2017/01/17/3d67642d4eddda0984123d1f7c587cf11.jpg',
    recipeName: '돈가스김밥',
    NickName: '소연',
    recipeDesc: '요즘 돈가스 김밥 한줄이 5000원 넘나? 미친 물가다 ㄹㅇ..'
  },
  {
    imgFile: 'https://recipe1.ezmember.co.kr/cache/recipe/2017/01/17/3d67642d4eddda0984123d1f7c587cf11.jpg',
    recipeName: '돈가스김밥',
    NickName: '소연',
    recipeDesc: '요즘 돈가스 김밥 한줄이 5000원 넘나? 미친 물가다 ㄹㅇ..'
  },
  {
    imgFile: 'https://recipe1.ezmember.co.kr/cache/recipe/2017/01/17/3d67642d4eddda0984123d1f7c587cf11.jpg',
    recipeName: '돈가스김밥',
    NickName: '소연',
    recipeDesc: '요즘 돈가스 김밥 한줄이 5000원 넘나? 미친 물가다 ㄹㅇ..'
  },
  {
    imgFile: 'https://recipe1.ezmember.co.kr/cache/recipe/2017/01/17/3d67642d4eddda0984123d1f7c587cf11.jpg',
    recipeName: '돈가스김밥',
    NickName: '소연',
    recipeDesc: '요즘 돈가스 김밥 한줄이 5000원 넘나? 미친 물가다 ㄹㅇ..'
  },
]