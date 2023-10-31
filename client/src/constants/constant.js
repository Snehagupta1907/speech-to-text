import {AiOutlineHome,AiOutlineSave} from "react-icons/ai"
import {FiSettings,FiHelpCircle,FiTrash2} from "react-icons/fi"
export const languages=[
  {
    name:"Global English",
    code:"en"
  },{
    name:"Australian English",
    code:"en_au"
  },{
    name:"British English",
    code:"en_uk"
  },{
    name:"Us English",
    code:"en_us"
  },{
    name:"Spanish",
    code:"es"
  },{
    name:"French",
    code:"fr"
  },{
    name:"German",
    code:"de"
  },{
    name:"Italian",
    code:"it"
  },{
    name:"Hindi",
    code:"hi"
  }
]
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