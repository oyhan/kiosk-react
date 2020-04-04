import React, { useState } from 'react'





export const useShouldRestart= ()=>{

    const [shouldRestart, setShouldRestart] = useState(true);
    
    return [shouldRestart,setShouldRestart]
}