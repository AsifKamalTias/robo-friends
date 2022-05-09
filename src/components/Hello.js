import React  from "react";
import './Hello.css';

// class Hello extends Component{
//     render(){
//         return(
//             <div className="large">
//                 <h1>{this.props.greeting}</h1>
//                 <p>Welcome to React</p>
//             </div>
//         );
//     }
// }

const Hello  = (props) => {
    return(
        <div className="f1 tc">
            <h1>{props.greeting}</h1>
            <p>Welcome to React</p>
        </div>
    );
}

export default Hello;