import React from 'react';
import ReactDOM from 'react-dom/client';

// import all images
import avataruser1 from './images/batman.png'
import avataruser2 from './images/batman2.png'
import avataruser3 from './images/batman3.png'

//import JS files
import User_feedback from './user_feedback';
import './index.css';
import User from './comments'

const App = function(){
  return(
    <>
    <h1 style={{textAlign:"center"}}>Ryan Mathews</h1>
    <section className='container'>
    
      {/* User 1 */}
    <User_feedback username="Batman"><User images={avataruser1} date= "11/12/24" msg="I am Batman"/></User_feedback>

      {/* User 2 */}
      <User_feedback username="Peter"> <User images={avataruser2} date= "11/12/24" msg="Need more rest!"/></User_feedback>

       {/* User 3 */}
       <User_feedback username="Jessica"><User images={avataruser3} date= "11/12/24" msg="Great job!"/> </User_feedback>
      </section>

    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);