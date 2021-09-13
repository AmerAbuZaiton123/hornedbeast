import React,{Component} from "react"

class  HornedBeast  extends Component
{
    render()
    {
        return
        (
           <div>
               <h4>{this.props.Name}</h4>
               <img src={this.props.imgSrc} alt={this.props.alt}/>
               <p>
                   {this.props.Discr}
                </p> 
           </div>
        )
    }

}
export default HornedBeast