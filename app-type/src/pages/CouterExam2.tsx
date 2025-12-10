import React, { useState } from 'react';

function CouterExam2() {

    const[count, setCount] = useState<number>(0);

    //이렇게 줘도 명시적으로 number type 주는거긴함. const[count, setCount] = useState(0);

    const upperEvent = (num: number):void => {
        console.log('더하기 클릭');
        setCount((prev) => prev+num);
    }

     const underEvent = (num: number):void => {
        console.log('빼기 클릭');
        setCount((prev) => prev-num);
    }

    return (
        <div>
            <h1>카운트: {count}</h1>
            <div>
                <button onClick={() => upperEvent(10)}>증가</button>
                <button onClick={() => underEvent(10)}>감소</button>
            </div>
            
        </div>
    );
}

export default CouterExam2;