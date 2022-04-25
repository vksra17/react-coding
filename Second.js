import React, { useState } from "react";
import './First.css';

function Second() {
    const [data, setData] = useState(null)
    const [print, setPrint] = useState(false)
    function getData(val) {
        setData(val.target.value)
        setPrint(false)
        console.warn(val.target.value)
    }
    
    return (
        <div className="d">
            <div className="d0"> 
                <div className="d1">Expences Track
                    <div className="d2">
                        <h3>User:<span></span></h3>
                        <h3>Total:</h3>
                    </div>
                    <div className="d3">
                        <div><label>Amount
                            <input type="number" onChange={getData} /></label></div>
                        <div><label>Type
                            <select className="c4">
                                <option>Credit</option>
                                <option>Debit</option>
                            </select></label>
                        </div>
                        <div>
                            <label>Currency
                            <select className="c4">
                                <option>INR()</option>
                                <option>USD()</option>
                                <option>EUR()</option>
                            </select></label>
                    </div>
                    <div>
                        <label>Notes
                            <input type='text' onChange={getData}/></label>
                    </div>
                    <div>

                        <button onClick={() => setPrint(true)} className="bu1">save</button>
                    </div>
                </div>
                <div className="d4">
                    <table>
                        <tr>
                            <td>Id</td>
                            <td>Date</td>
                            <td>Amount  </td>
                            <td>Type</td>
                            <td>Notes</td>
                            <td>Actions</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            {
                                print ?
                                    (<td>{data}</td>)
                                    
                                    :null }
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>
                </div>
            </div>

        </div>
        </div >
    );
}
export default Second;
