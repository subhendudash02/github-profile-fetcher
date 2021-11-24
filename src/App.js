import React, {useState} from "react";
import './App.css';
import $ from "jquery";
import { FaMapMarkerAlt } from "react-icons/fa";

function App() {

    const [a, b] = useState([]);
    // const [c, d] = useState([]);
    // const githubUsername = func => {
    //     d(func.target.value);
    // };

    let link = "https://api.github.com/users/";
    // let name = "";
    // let username = "";

    $(function () {
        $("form").submit(function(e) {
            e.preventDefault();
            // username = $("#username").val();
            // fetch(link + username)
            // .then(res => res.json())
            // .then(json => {
            //     name = json.name;
            //     console.log(name);
            // });
            // return false;
        });
    });

    const loadUsers = async () => {
        let username = await document.getElementById("username").value;
        const apiLink = await fetch(link + username);
        let jsonFetch = await apiLink.json();
        jsonFetch = Array(jsonFetch);
        b(jsonFetch);
    };

    return (
        <React.Fragment>
            <h1 className="main-heading">GitHub Profile Fetcher</h1>
            <br />

            <form>
                <input id="username" name="name" placeholder="@github-username" autoComplete="off"></input><br />
                <input type="submit" value="Get My Card" onClick={loadUsers} id="fetch-button"></input>
            </form>

            <div>
                {a.map(({name, avatar_url, followers, following, bio, location})=>{
                    return (
                        <div className="card">
                            <div className="first">
                                <img src={avatar_url} alt="github-avatar"></img>
                            </div>
                            <div className="second">
                                <h1>{name}</h1>
                                <p><strong>Followers: </strong>{followers} &emsp; <strong>Following: </strong>{following}</p>
                                <p><FaMapMarkerAlt className = "icons" /> {location}</p>
                                <p>{bio}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

            <br />
        </React.Fragment>
    );
}

export default App;
