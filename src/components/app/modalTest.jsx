
export default function modalTest({ isOpen, closeModal }) {
  if (!isOpen) return null;

  return (
    <div className='modal'>
      <p>modalTest</p>
      <button onClick={closeModal}>X</button>
    </div>
  )
}