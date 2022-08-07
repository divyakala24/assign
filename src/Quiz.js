import React from 'react'
import { useState } from 'react'
import Menu from './Menu';



const Quiz = () => {
    const [myInp, setMyInp] = useState('');
    const[status, setStatus] = useState(false);

    
    const handleChange = (e) =>
    {
        setMyInp(e.key);
        if(e.key === '/')
        {
            setStatus(true)
                
            
         }
         else if (e.key === "backspace") {
            setStatus('')
         }


        else{
            setStatus(false)
        }

    
       
		}

        
   
            

  return (
    <div>
    <h1> Press '/' for more</h1>
				
	<input type="text" value={myInp}  id='inp1' onKeyPress={handleChange} placeholder='click here' autoFocus='true'/>
    {
        status ? <Menu /> : null
    }
				
	</div>
  )
}

export default Quiz