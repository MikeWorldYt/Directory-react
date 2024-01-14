
export default function modalTest({ isOpen, closeModal }) {
  if (!isOpen) return null;

  return (
    <div className='modal'>
      <div className='popup'>
        <button onClick={closeModal}>X</button>
        <h2>WeSorry</h2>
        <h4>This function has been disabled,<br></br>
        because its only a demo prototype for you to create your file manager.
        </h4>
      </div>
    </div>
  )
}