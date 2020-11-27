import React from 'react';
import './notfound.css'

const notfound = ()=>{
    return(
        <main className="notfoundTemplate">
            <div className="top">
                <div className="title">
                    Error!
                </div>
                <section className="form-wrapper">
                    <div>
                        <h1>http 404</h1>
                    </div>
                </section>
            </div>
            <section className="notfound-wrapper">
                <div>
                    404 notfound
                </div>   
            </section>
        </main>
    )
}
export default notfound;