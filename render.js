import React from 'react'

function Quiz2(props){
    let que=[
        {
            id:1,
            question:"Everything in React is a ",
            option:["Module","Component","Package","Class"],
            correctAnswer:"Component"
        },
        {
            id:2,
            question:"What is Babel?",
            option:["A transpiler","An interpreter","A Compiler","Both Compiler and Transpilar"],
            correctAnswer:"Both Compiler and Transpilar"
        },
        {
            id:3,
            question:"How many elements does a react component return?",
            option:["1 Element","2 Elements","Multiple Elements","None of the above"],
            correctAnswer:"Multiple Elements"
        },
        {
            id:4,
            question:"Props are __________ into other components",
            option:["Injected","Methods","Both A and B","All of these"],
            correctAnswer:"Methods"
        },
        {
            id:5,
            question:"Which of the following API is a MUST for every ReactJS component?",
            option:["getInitialState","render","renderComponent","None of the Above"],
            correctAnswer:"renderComponent"
        },
    ];
    console.log(props);
    const[page,setpage]=React.useState(1);
    const handleClick=()=>{
        setpage(page+1)
    };
    const[ans,setAns]=React.useState({});
    const handleOptionChange=(e)=>{
        const{name,value}=e.target;
        setAns({
            ...ans,
            [name]:value
        })
    }
    console.log(ans);
    function calculateScore(){
        let  score=0;
        que.forEach((fld)=>{
            if(ans[[fld.id]]==fld.correctAnswer){
                score++;
            }
    })
        return score;
    }
    
    return(
        <>
            <div>
                {page==1 && (
                    <div>
                        <form method="post" action="">
                        Name:<input type='text'  name="n" required/>
                        Password:<input type='password'  name="p"/>
                        <button onClick={()=>{handleClick()}}>login</button>
                        </form>    
                    </div>
                )}
                {page==2 && (
                    <div>
                        <h1>Quiz App</h1>
                        <hr/>
                        {que.map((fld)=>(
                            <>
                                <h2>
                                    {fld.question}
                                </h2>
                                {fld.option.map((val)=>(
                                    <div class="form-check">
                                    <input class="form-check-input" type="radio" name={fld.id} value={val}  id="flexRadioDefault1" onClick={(e)=>{handleOptionChange(e)}}/>
                                    <label class="form-check-label" for="flexRadioDefault1">
                                       {val} 
                                    </label>
                                </div>
                                ))}
                            </>
                        ))} 
                        <button onClick={()=>{handleClick()}}>submit</button>  
                    </div>
                )}
                {page==3 && (
                    <div>
                        <p>your score is{calculateScore()}</p>   
                    </div>
                )}
            </div>            
        </>
    )
}

export default Quiz2