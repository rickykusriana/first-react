import Dashboard from '../views/Dashboard/Dashboard';
import Portfolio from '../views/Portfolio/Portfolio';
import Blog from '../views/Blog/Blog';
import Contact from '../views/Contact/Contact';

const appRoutes = [
    { 
    	path: "/dashboard", 
    	name: "Dashboard", 
    	icon: "fa fa-tachometer-alt", 
    	content: Dashboard 
    },
    {
    	path: "/portfolio", 
    	name: "Portfolio", 
    	icon: "fa fa-star",
    	content: Portfolio 
    },
    {
        path: "/blog", 
        name: "Blog", 
        icon: "fa fa-newspaper",
        content: Blog 
    },
    { 
        path: "/contact",
        name: "Contact",
        icon: "fa fa-phone",
        content: Contact
    },
    { 
    	redirect: true, 
    	path:"/", 
    	to:"/dashboard", 
    	name: "Dashboard" 
    }
];

export default appRoutes;
