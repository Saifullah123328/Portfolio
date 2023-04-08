import React from 'react'

const updatedcomp = orginalComp =>{
    class Newcomp extends React.Component{
        render()
        {
            return <orginalComp name = "The user"/>;
        }
        
    }
    return Newcomp;
};

export default updatedcomp;