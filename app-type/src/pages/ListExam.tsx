import React, { useState } from 'react';
import LustComp from '../components/LustComp';

function ListExam() {

    const [list, setList] = useState<string[]>([]);
    const [str, setStr] = useState<string>('');

    const addStr = (): void => {
        setList((prev) => [...prev, str]);
    }

    const remove = ():void => {
        setList(list.slice(0,-1));
    }

    const onInput = (value: string) => {
        setStr(value);
    }
    
    return (
        <div className='container'>
            <header className='text-center'>
                <h2>이벤트 처리 예제</h2>
            </header>
            <div style={{display:'flex', justifyContent:'center'}}>
                <div style={{width:'800px', height:"500px", border:"1px solid black"}}> 
                    <LustComp list={list} add={addStr} remove={remove} onInput={onInput}/>
                </div>  
            </div>   
        </div>
    );
}

export default ListExam;