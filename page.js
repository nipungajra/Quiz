import react from 'react'

function page(props){
    console.log(props)
    const [page,setpage]=React.useState(1)
    const handleclick=()=>{
        setpage(page+1)
    }
    return(
        <>
            <div>
            <form method="post" action="dbdemo.php">
		Name:<input type='text'  name="n" required/>
		password:<input type='password'  name="m"/>
	
		<input type="submit" name="b"/>
		</form>
                <button onClick={()=>{handleClick()}}>login</button>
            </div>
        </>

    )
}

export default page