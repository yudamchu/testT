import React, { useState } from 'react';

function CouterExam() {

    const[count, setCount] = useState<number>(0);

    //이렇게 줘도 명시적으로 number type 주는거긴함. const[count, setCount] = useState(0);

    const upperEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log('클릭:' , e.currentTarget);
        setCount((prev) => prev+1);
    }

     const underEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log('클릭:' , e.currentTarget);
        setCount((prev) => prev-1);
    }

    return (
        <div>
            <h1>카운트: {count}</h1>
            <div>
                <button onClick={upperEvent}>증가</button>
                <button onClick={underEvent}>감소</button>
            </div>
            
        </div>
    );
}

export default CouterExam;