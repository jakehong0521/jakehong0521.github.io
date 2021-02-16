// component
import Spinner from 'react-bootstrap/Spinner'

export default function Loader(props) {
  return (
    <div className='align-items-center d-flex justify-content-center h-100'>
      <Spinner animation='border' />
    </div>
  )
}
