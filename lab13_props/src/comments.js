import React from "react";
import './index'

const User = function(props){
    return(
        <>
            <section className="card">
                <a> <img src={props.images}/> </a>
                <div className="content">
                    <a className="author">{props.name}</a>
                </div>
                <div className="metadata">
                    <p>Posted on <span className="data"></span></p>
                </div>
                <div className="comment">
                    <p>" - "</p>
                </div>
            </section>
        
        
        </>
    )
}
export default User;