import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

function Register(props) {

    const [categoryList, setCategoryList] = useState([]);
    const [consoleList, setConsoleList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState({
        firstName : "",
        lastName : "",
        email : "",
        password : "",
        phone : "",
        town : "",
        country : "",
        console : "",
        registrationDate : Date.now(),
        favouriteCategories : [
            {
                name : ""
            }
        ]
    })

    useEffect(() => {
        axios.get(`https://api.rawg.io/api/genres?key=d124f7e507b7487ba9faa3cc51bfaabf`)
            .then(response => {
                setCategoryList(response.data.results)
                setIsLoading(false);
            })
        axios.get(`https://api.rawg.io/api/platforms?key=d124f7e507b7487ba9faa3cc51bfaabf`)
            .then(response => {
                setConsoleList(response.data.results);
                setIsLoading(false);
            })
    }, [isLoading])


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`/api/add-user/`, user)
            .then(() => {
                alert("Registration successfully !");
                window.location.href = "http://localhost:3000/";
            })

    }

    return (
        <div>
            <div className="d-flex justify-content-center">
                <div>
                <div style={{"backgroundColor" : "#e8f2f6", "padding" : "20px", "marginTop" : "75px", "borderRadius" : "10px"}}>
                <form action="" onSubmit={handleSubmit}>
                    <h1 style={{"marginTop" : "15px", "fontFamily" : "'Source Serif Pro', serif", "fontSize" : "30px"}}>User Register</h1>
{/*USER FAVOURITE CATEGORY*/}
                    <div className="input-group mb-3" style={{"marginTop" : "15px"}}>
                        <select className="custom-select" id="inputGroupSelect01" required onChange={e => {
                            const s = {...user};
                            s.favouriteCategories[0].name = e.target.value;
                            setUser(s);
                        }}>
                            <option defaultValue="">Select favourite genre...</option>
                            {categoryList.map((genre, index) => {
                                return <option key={index} value={genre.name}>{genre.name}</option>
                            })}
                        </select>
                    </div>
{/*USER FAVOURITE CONSOLE*/}
                    <div className="input-group mb-3" style={{"marginTop" : "15px"}}>
                        <select className="custom-select" id="inputGroupSelect01" required onChange={e => {
                            const s = {...user};
                            s.console = e.target.value;
                            setUser(s);
                        }}>
                            <option  defaultValue="">Select favourite console...</option>
                            {consoleList.map((console, index) => {
                                return <option key={index} value={console.name}>{console.name}</option>
                            })}
                        </select>
                    </div>
{/*USER FIRST NAME*/}
                    <div>
                        <input type="text" name="firstName" value={user.firstName} required style={{"marginTop" : "3px", "width" : "226px"}} placeholder="First Name"
                               onChange={e => {
                                   const s = {...user};
                                   s.firstName = e.target.value;
                                   setUser(s);
                               }}/>
                    </div>
{/*USER LAST NAME*/}
                    <div>
                        <input type="text" name="lastName" value={user.lastName} required style={{"marginTop" : "15px", "width" : "226px"}} placeholder="Last Name"
                               onChange={e => {
                                   const s = {...user};
                                   s.lastName = e.target.value;
                                   setUser(s);
                               }}/>
                    </div>
{/*USER PHONE*/}
                    <div>
                        <input type="text" name="phone" value={user.phone} required style={{"marginTop" : "15px", "width" : "226px"}} placeholder="Phone"
                               onChange={e => {
                                   const s = {...user};
                                   s.phone = e.target.value;
                                   setUser(s);
                               }}/>
                    </div>
{/*USER TOWN*/}
                    <div>
                        <input type="text" name="town" value={user.town} required style={{"marginTop" : "15px", "width" : "226px"}} placeholder="Town"
                               onChange={e => {
                                   const s = {...user};
                                   s.town = e.target.value;
                                   setUser(s);
                               }}/>
                    </div>
{/*USER COUNTRY*/}
                    <div>
                        <input type="text" name="country" value={user.country} required style={{"marginTop" : "15px", "width" : "226px"}} placeholder="Country"
                               onChange={e => {
                                   const s = {...user};
                                   s.country = e.target.value;
                                   setUser(s);
                               }}/>
                    </div>

{/*USER EMAIL*/}
                    <div>
                        <input type="text" name="email" value={user.email} required style={{"marginTop" : "15px", "width" : "226px"}} placeholder="Email"
                               onChange={e => {
                                   const s = {...user};
                                   s.email = e.target.value;
                                   setUser(s);
                               }}/>
                    </div>
{/*USER PASSWORD*/}
                    <div>
                        <input type="text" name="password" value={user.password} required style={{"marginTop" : "15px", "width" : "226px"}} placeholder="Password"
                               onChange={e => {
                                   const s = {...user};
                                   s.password = e.target.value;
                                   setUser(s);
                               }}/>
                    </div>

                    <Link to="/"><button style={{"marginTop" : "15px", "float" : "right"}} type="submit" className="btn btn-outline-primary">Back</button></Link>
                    <button style={{"marginTop" : "15px"}} type="submit" className="btn btn-outline-primary">Submit</button>

                </form>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Register;