import { Link } from "react-router-dom"



const Navbar = () => {
    return (
        <nav className="main-task ">
            <Link to="/" className="">All </Link>
            <Link to="/?todos=active" className="">Active </Link>
            <Link to="/?todos=completed" className="">Completed </Link>
        </nav>
    )
}

export default Navbar;
