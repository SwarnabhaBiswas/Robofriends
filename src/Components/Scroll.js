import React from 'react';

const Scroll=(props)=>{
    return(
        <div style={{overflowY:'scroll',border: '2px solid black',height:'800px',width:'100%' }}>
            {props.children}
        </div>
    );
}
export default Scroll;
