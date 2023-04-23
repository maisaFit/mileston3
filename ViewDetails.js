import {Link} from "react-router-dom";
const Nav=()=> {
    return(
        <div><header>
        <nav>
            
                <Link to="/"> My To-Do-List <br/>
                </Link>
                <Link to="ContactUs"> contact us <br/>
                </Link>
                <Link to="ViewDetails"> View the Details of the task <br/>
                </Link>
                <Link to="CreatTask"> Creat a new Task <br/>
                 </Link>
            </nav>
        </header>
        </div>
    );
};
export default Nav;
     
# mileston3
