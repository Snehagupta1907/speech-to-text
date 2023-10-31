import {AiOutlineHome,AiOutlineSave} from "react-icons/ai"
import {FiSettings,FiHelpCircle,FiTrash2} from "react-icons/fi"
export const NavData = [
  {
    id: 1,
    name: "Home",
    icon: <AiOutlineHome size={25} />,
  },
  {
    id: 2,
    name: "All Files",
    icon: <AiOutlineHome size={25}/>,
  },
  {
    id: 3,
    name: "Saved",
    icon:<AiOutlineSave size={25}/>,
  },
  {
    id: 4,
    name: "Integrations",
    icon: <AiOutlineHome size={25}/>,
  },
  {
    id: 5,
    name: "Trash",
    icon: <FiTrash2 size={25}/>,
  },
  {
    id: 6,
    name: "Settings",
    icon: <FiSettings size={25}/>,
  },
  {
    id: 7,
    name: "Help And Support",
    icon: <FiHelpCircle size={25}/>,
  },
];