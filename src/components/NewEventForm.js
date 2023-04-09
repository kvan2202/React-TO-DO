import './NewEventForm.css'

export const NewEventForm = () => {
  const display = (e) => {
    console.log(e.target.value);
  }
  return(
    <>
      <form className='forms'>
          <label htmlFor='eventName'>Name </label>
          <input type='text' id='eventName' onChange={display}></input>
          <label htmlFor='eventDate'>DOB</label>
          <input type='Date' id='eventDate' onChange={display}></input>
          <button type='submit'>Submit</button>
      </form>
    </>
  )
}