import './App.css';
import { useState } from 'react';

function App() {
  // OPEN AND CLOSE BUTTON
  const [isOpen, setIsOpen] = useState(true)

  // function to toggle the isOpen state
  const openreadmore = function(){
    setIsOpen(!isOpen)
  }

  const[name,setName] = useState("")

  const capturename = function(e){
    setName(e.target.value)
  }

  const submitform = function(e){
    e.preventDefault()
    alert(`Your username is ${name} \nYour age is ${inputs.age}`)
  }

const handlechage = function(e){
  const name = e.target.name
  const value = e.target.value
  setInputs(values => ({...values, [name]:value}))
  
}


 return (
  <div className='App'>
    <h1>Ryan Mathews</h1>
    <div className='info'>
      <p><b>Cat (Felis catus)</b>, commonly reffered to as domestic catus</p>
      <button className='readmorebtn' onClick={openreadmore}>{isOpen ? "Hide" : "Read More"}</button>
    </div>
    <section>
      { 
      isOpen &&
        <div className='readmore'>
          <p>Felis catus, commonly known as the domestic cat, is a small carnivorous mammal that has been domesticated by humans for thousands of years. They are known for their independent nature, agility, and sharp hunting instincts, often preying on small animals like mice and birds. Domestic cats are popular pets worldwide, prized for their companionship and ability to control pests. They communicate through a range of vocalizations, body language, and scent marking, displaying a wide variety of personalities and behaviors.</p>
        </div>
      }
    </section>


    <form onSubmit={submitform}>
      <fieldset>
        <legend>User info</legend>
          <label for="username">Enter a name</label>
          <input 
          type='text' 
          id='username' 
          name='username'
          placeholder='Type your name' 
          value={inputs.name}
          onChange={handlechage}
          />
          <label for="age">Enter an age</label>
          <input
          type='number'
          name='age'
          id='age'
          value={inputs.age}
          onChange={handlechage}
          
          
          
          />

          <div>
            <input type='submit' />
          </div>
        
      </fieldset>
    </form>
  </div>

 )
}

export default App;
