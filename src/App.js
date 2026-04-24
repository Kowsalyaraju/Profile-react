
import Search from "./Components/Search";
import Profileone, { Proto } from "./Components/Profile";

function App()
{
    return(
        <div>
    <Search></Search>
    {
      Proto.map(function(item,index)
    {
      return(<Profileone Myname = {item.Myname} srcs = {item.srcs} syn = {item.syntax} tym = {item.time}></Profileone>)
    })
    }
    </div>
    )
}

export default App