import React, { useState } from 'react';

/**
 * 타입 생성 > interface, type 객체 두가지 방법
 * type: 중첩, 튜블, 결합 등 모든 타입 선언 가능
 * interface: 구조 정의 및 확장
 * 하고 싶을 떄 사용
 * 
 * 실제로 props는 interface로 많이 선언
 */

//type은 객체이기때문에 객체선언
type Props2 = {
    title: string,
    onSelect: (id: string)=> void;
}
//자바처럼 클래스 형태 
interface Props {
    title: string,
    children: React.ReactNode
}

//인터페이스는 상속이 가능 (type은 상속은 안되나 확장은 가능)
interface ChildProps extends Props{
    name: string;
}

//타입의 확장
type ChildTypeProps = Props2 &{
    name: string;
}

//사용 여부
//interface: api 응답, Props 선언, 객체의 구조정의 할 때 사용
//type: 튜플, 함수정의, 문자열처리 등에 사용
//둘 다 선언 시 초기값은 부여하지 못함


function Exam01(props: Props) {

    //type을 쓰는 경우 (문자열 처리) -아래 3가지만 오도록 할떄. 이 3개말고 다른것들 나오면 error
    type Status = "loading" | "success" | "error";
    const [status, setStatus] = useState<Status>('loading');


    return (
        <div>
           {
            
           }
        </div>
    );
}

export default Exam01;