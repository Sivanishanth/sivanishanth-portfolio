import imgBlog from "../assets/images/blog-api.png"
import imgStudent from "../assets/images/student-api.png"
import imgPortfolio from "../assets/images/portfolioLogo.png"
const projects = [
    {
        id : 1,
        title : "Blog API with Authentication",
        description : "Full-featured blogging backend with JWT authentication, allowing users to create, edit, and delete posts with secure access control",
        image : imgBlog,
        tech : ["React" , "Node.js" ,"Express.js" ,"MongoDB" ,"JWT"],
        github : "https://github.com/Sivanishanth/blog-api",
        live : "https://sivablog.netlify.app/",
        feature : true
    },
    {
        id : 2,
        title : "Student Management REST API",
        description : "RESTful API for managing student records with CRUD operations and data validation",
        image : imgStudent,
        tech : ["Node.js" ,"Express.js","MongoDB","Mongoose"],
        github : "https://github.com/Sivanishanth/student-api",
        feature : true
    },
    {
        id : 3,
        title : " My Portfolio Website",
        description : "A responsive portfolio website showcasing my projects and skills.",
        image : imgPortfolio,
        tech : ["React" ,"HTML", "CSS" ,"JavaScript"],
        github : "https://github.com/Sivanishanth/myPortfolio",
        live : "sivaishanthportfolio.netlify.app",
        feature : true
    }
]

export default projects 