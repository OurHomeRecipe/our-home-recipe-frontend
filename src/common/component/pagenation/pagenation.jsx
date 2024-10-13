import style from './styles/pagenation.module.css'
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { PageNumber } from './styles/pagenation.style';
import { useState } from 'react';

export default function Pagenation({totalPages, pageSize, setPage}) {

    // 테스트용 값
    // const totalPages = 21;
    // const pageSize = 9;

    const [start, setStart] = useState(0); // 시작 페이지

    const handlePrev = () => {
        setStart(prev => prev === 0 ? prev : prev - 1);
    };

    const handleNext = () => {
        setStart(prev => prev === getPageNumber(totalPages, pageSize).length - 1 ? prev : prev + 1);
    };

    const selectPage = (e) => {
        const selectPage = e.target.innerText - 1;
        setPage(selectPage);
    }


    const getPageNumber = (total, pageSize) => {
        const pageNumberArr = [];
        let tempArr = [];
    
        for (let i = 1; i <= total; i++) {
            tempArr.push({ page: i });
    
            // 9개의 객체가 채워지면 pageNumberArr에 추가하고 tempArr를 초기화
            if (tempArr.length === pageSize) {
                pageNumberArr.push(tempArr);
                tempArr = [];  // 배열 초기화
            }
        }
    
        // 남아 있는 객체가 있으면 마지막에 추가
        if (tempArr.length > 0) {
            pageNumberArr.push(tempArr);
        }
    
        return pageNumberArr;
    }

    const noPrev = start === 0; // 이전 페이지가 없는 경우
    const noNext = start === getPageNumber(totalPages, pageSize).length - 1 // 다음 페이지가 없는 경우

    console.log(getPageNumber(totalPages, pageSize));



  return (
    <div className={style.frame}>
        {noPrev ? '' : 
            <FaArrowAltCircleLeft 
                size={20} 
                color='#ff9e01'
                onClick={handlePrev}
            />
        }

        {getPageNumber(totalPages, pageSize)[start].map( (page, index) => 
            <PageNumber key={index} onClick={selectPage}>{page.page}</PageNumber>
        )}

        {noNext ? '' : 
            <FaArrowAltCircleRight 
                size={20} 
                color='#ff9e01' 
                onClick={handleNext}
            />
        }
        
    </div>
  )
}
