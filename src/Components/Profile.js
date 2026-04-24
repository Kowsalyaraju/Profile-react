
import one from "../assets/images/pic1.png"
import two from "../assets/images/pic2.jfif"
import three from "../assets/images/pic3.jfif"
import four from "../assets/images/pic4.jfif"


function Profileone(props)
{
      return(
        <div className="main">

          <div className="container__one">
            <img src={props.srcs} alt="profile" />
          </div>

          <div className="container__two">
            <h2>{props.Myname}</h2>
            <p>{props.syn}</p>
          </div>

          <div className="container__three" >
            <p>{props.tym}</p>
            <p>⭐</p>
          </div>

        </div>
      )
}


var Proto = [
  {
      Myname :"Jessica Koel",
      srcs :one,
      syntax :"Hey joel, I am here t help you",
      time:"11:26"
},

 {
      Myname :"Komeial Bolger",
      srcs :two,
      syntax :"I will send you all doccuments as soon as possible",
      time:"12:26"
},

 {
      Myname :"Tamaara Suiale",
      srcs :three,
      syntax :"Are you going to business trip next week",
      time:"08:26"
},

 {
      Myname :"Sam Nielson",
      srcs :four,
      syntax :"I suggest to start a new business soon",
      time:"07:26"
},

]


export { Proto };
export default Profileone