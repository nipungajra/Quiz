import react from 'react'

function x(props){
    console.log(props)
    const {name,course}=React.useState()
    return(
        <>
            <div>Hello {name}</div>
            <div>Interested couse {course}</div> 
        </>
    )
}

