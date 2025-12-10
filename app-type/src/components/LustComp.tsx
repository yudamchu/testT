import React from 'react';

type Props = {
    list: string[],
    add: () => void,
    remove: () => void,
    onInput: (str: string) => void;
}


function LustComp({list, add, remove, onInput}: Props) {

    return (
        <div className='contents'>
            <div>
                <div>
                    <div className='row'>
                        <div className='col-9'>
                            <input className='form-contorl' onChange={(e)=> onInput(e.target.value)}/>
                        </div>
                        <div className='cole-3'>
                            <button onClick={add} className='btn btn-primary me-2'>등록</button>
                            <button onClick={remove} className='btn btn-danger'>삭제</button>
                        </div>
                    </div>
                    <div>
                        {
                            list?.map((obj, index) => (
                                <p key={index}>
                                    {obj}
                                </p>
                            ))
                        }
                    </div>
                    <div>
                        {
                            
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LustComp;