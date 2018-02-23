import Dashboard from '../views/Dashboard/Dashboard';
import Icons from '../views/Icons/Icons';

const appRoutes = [
    { 
    	path: "/dashboard", 
    	name: "Dashboard", 
    	icon: "fa fa-dashboard", 
    	content: Dashboard 
    },
    { 
    	path: "/icons", 
    	name: "Icons", 
    	icon: "fa fa-key", 
    	content: Icons 
    },
    { 
    	redirect: true, 
    	path:"/", 
    	to:"/dashboard", 
    	name: "Dashboard" 
    }
];

export default appRoutes;
