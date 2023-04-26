"use client"
import {getLinksLinks}from "csc-start/utils/data";
import { useEffect, useState } from 'react';

const NonSocialLinks = () => {
    
    const [nonSocLinks, setNonSocLinks] = useState([]);

    useEffect(() => {

        setNonSocLinks(getLinksLinks());
        console.log(getLinksLinks());

    },[]);
    
    return( 
    
    <div className="barge">
      <div>
        <button className='button'>LINK 1</button>
      </div>
      <div>
        <button className='button'>LINK 2</button>
      </div>
      <div>
        <button className='button'>LINK 3</button>
      </div>
      <div>
        <button className='button' link to='https://google.com'>
          LINK 4
        </button>
      </div>
    </div>

    
    )
}

export default NonSocialLinks;