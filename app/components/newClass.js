import React from "react"

// import Teacher from "./Teacher.js"

export default class Main extends React.Component {




  render (){
    return(
      <div>

        <nav className="navbar navbar-fixed-top">
               <div className="container-fluid">

                <div className="collapse navbar-collapse" id="myNavbar">
                  <ul className="nav navbar-nav navbar-right">
                    <li><a href="#myPage">HOME</a></li>
                    <li><a href="#band">BAND</a></li>
                    <li><a href="#tour">TOUR</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                    <li className="dropdown">
                      <a className="dropdown-toggle" data-toggle="dropdown" href="#">MORE
                      <span className="caret"></span></a>
                      <ul className="dropdown-menu">
                        <li><a href="#">Merchandise</a></li>
                        <li><a href="#">Extras</a></li>
                        <li><a href="#">Media</a></li>
                      </ul>
                    </li>
                    <li><a href="#"><span className="glyphicon glyphicon-search"></span></a></li>
                  </ul>
                </div>
              </div>
            </nav>


<div>


  <img src = "/image/schoolEmblem.jpg" height="175" width="175"/>
</div>



<div>

<p>Here.</p>

</div>





      </div>

    )
  }
}
