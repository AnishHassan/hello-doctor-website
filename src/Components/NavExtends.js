import React, { useEffect, useState } from 'react'
import './NavExtends.css'
import searchicon from '../images/search.png'
import callicon from '../images/call.png'
import msgicon from '../images/msg.png'
import timeicon from '../images/time.png'
import InfoContact from './Reuse-Components/InfoContact'

function NavExtends() {

    const [updates, setUpdates] = useState([]);


    useEffect(() => {
        return setUpdates([{ value: 'The representatives of EFU Life Assurance & Rehability UK call on SECP Chairman Aamir Khan & Commissioner Insurance Sadia Khan at SECP Head Office ' }])
    }, [])

    return (
        <>
         
            {updates.map((item) => {
                console.log(item);
                return <p className='update'><span>Updates:</span> {item.value}</p>
            })

            }

            <div className='navextends'>
                <div className='infosearch'>
                    <form action="" className='searchbar'>
                        <input type="text" placeholder="i.e. Cancer doctor" name="search" />
                        <button type="submit"><img src={searchicon} alt="search-icon" /></button>
                    </form>
                </div>
                  <InfoContact/>
            </div>


        </>
    )
}

export default NavExtends