import Reat from 'react';

const User=(props)=>{
    console.warn(props.data.name);
    const {data} = props
    return(
        <div>
            <h1>User component</h1>
            <h3>{data.name}</h3>
            <h3>{data.age}</h3>
        </div>
    )
}

export default User;