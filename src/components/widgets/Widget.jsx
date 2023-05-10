import React from 'react'
import './widget.scss'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
const Widget = ({type}) => {

    const amount=10000
    const diff=2000
    let data;
    switch(type)
    {
        case "User":
            data={
                title:"USERS",
                Fees:false,
                link:"See All Users",
                icon:<AccountCircleIcon className="icon" style={{color:"black"}}/>,
            };
            break;
            case  "Fees":
            data={
                title:"Fees",
                Fees:false,
                link:"Users Fee Submitted",
                icon:<CurrencyRupeeIcon  className="icon" style={{color:"crimson"}}/>,
            };
            break;
            case "Drivers":
            data={
                title:"Drivers",
                Fees:false,
                link:"Drivers management",
                icon:<DirectionsBusIcon className="icon" style={{color:"lemonyellow"}}/>,
            };
            break;
            case "Manage":
            data={
                title:"Manage",
                Fees:false,
                link:"Manage users data",
                icon:<AccountCircleIcon className="icon" style={{color:"cyan"}}/>,
            };
            break;
            default:
            break;
        
    }
  return (
    <div className='widget'>
        <div className="left">
            <div className="title">{data.title}</div>
            <div className="counter">{data.Fees && "Rs"} {amount}</div>
            <div className="link">{data.link}</div>
        </div>
        <div className="right">
            <div className="percentage">
                <KeyboardDoubleArrowUpIcon/>
                {diff} %

            </div>
        {data.icon}
        </div>
    </div>
  )
}

export default Widget