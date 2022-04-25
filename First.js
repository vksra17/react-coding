import React, { } from "react";
import './First.css';
import { Link } from 'react-router-dom';

class First extends React.Component() {
    state = {
        Ip1
    }
    updateIp1 = (event)=>{
        this.setstate({Ip1: event.target.value})
        console.log(Ip1)
    }    
    render() {
        return (
            <>
                <div className="c1"  >
                    <div className="c2"> Expences Tracker
                        <div className="c3">
                            <label>Name
                                <input type="text"
                                    id="name"
                                    name="name"
                                    value={this.state.Ip1}
                                    onChange={this.updateIp1}
                                    required="required"></input>
                            </label>
                            <label>Currency
                                <select className="c4" required>
                                    <option >INR()</option>
                                    <option >USD()</option>
                                    <option >EUR()</option>
                                </select>
                            </label>
                            <label>Mobile
                                <select className="c7" required>
                                    <option type="tel">+91</option>
                                    <option>+1</option>
                                </select>
                                <input type="number" required></input>
                            </label>
                            <label>Email
                                <input type="email" required></input>
                            </label>
                            <div>
                                <Link to='/transactions'>
                                    <button className="c6" >login</button>
                                </Link>
                                <button className="c6">Update</button>
                                <button className="c6">Logout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default First;