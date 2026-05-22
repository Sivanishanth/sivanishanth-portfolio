import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub
} from "react-icons/fa";

import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiJsonwebtokens,
  SiRender
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";
import '../styles/Skills.css'
const skills = {

    frontend : [

        {
            name:"HTML",
            icon:<FaHtml5/>
        },

        {
            name:"CSS",
            icon:<FaCss3Alt/>
        },

        {
            name:"JavaScript",
            icon:<SiJavascript/>
        },

        {
            name:"React",
            icon:<FaReact/>
        }
    ],

    backend : [

        {
            name:"Node.js",
            icon:<FaNodeJs/>
        },

        {
            name:"Express.js",
            icon:<SiExpress/>
        },

        {
            name:"Python",
            icon:"🐍"
        }
    ],

    database : [

        {
            name:"MongoDB",
            icon:<SiMongodb/>
        },

        {
            name:"MySQL",
            icon:<SiMysql/>
        }
    ],

    versionControl : [

        {
            name:"Git",
            icon:<FaGitAlt/>
        },

        {
            name:"GitHub",
            icon:<FaGithub/>
        }
    ],

    authSecurity : [

        {
            name:"JWT",
            icon:<SiJsonwebtokens/>
        },

        {
            name:"Bcrypt",
            icon:"🔐"
        }
    ],

    tools : [

        {
            name:"VS Code",
            icon:<VscVscode/>
        },

        {
            name:"Thunder Client",
            icon:"⚡"
        },

        {
            name:"Render",
            icon:<SiRender/>
        }
    ]
}

export default skills