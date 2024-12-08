import React from 'react'
import { LuPencil } from 'react-icons/lu'
import { MdOutlineWatchLater,MdOutlineKeyboardArrowDown,MdOutlineDrafts,MdInbox } from "react-icons/md";
import { IoMdStar } from "react-icons/io";
import { TbSend2 } from "react-icons/tb";
import { useDispatch } from 'react-redux';
import { setOpen } from '../redux/appSlice';

const sidebarItems = [
  {
      icon: <MdInbox size={"20px"} />,
      text: "Inbox"
  },
  {
      icon: <IoMdStar size={"20px"} />,
      text: "Starred"
  },
  {
      icon: <MdOutlineWatchLater size={"20px"} />,
      text: "Snoozed"
  },
  {
      icon: <TbSend2 size={"20px"} />,
      text: "Sent"
  },
  {
      icon: <MdOutlineDrafts size={"20px"} />,
      text: "Drafts"
  },
  {
    icon: <MdOutlineKeyboardArrowDown size={"20px"} />,
    text: "More"
  }
]

function Sidebar() {
  // const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className='w-[15%]'>
            <div className='p-3'>
                <button onClick={()=> dispatch(setOpen(true))} className='flex items-center gap-2  p-4 rounded-2xl bg-[#C2E7FF] hover:shadow-md'>
                    <LuPencil size={'24px'}/>
                    Compose
                    </button>
            </div>
            <div className='text-gray-500'>
              {
                sidebarItems.map((item, index) => {
                  return (
                    <div className='flex items-center gap-4 pl-6 py-1 rounded-r-full hover:cursor-pointer hover:bg-gray-200 my-2'>
                {item.icon}
                <p>{item.text}</p>
              </div>
                  )
                })



              }
              
              
            </div>
            </div>
  )
}

export default Sidebar