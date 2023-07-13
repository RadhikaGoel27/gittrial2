import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    const onClick=()=>{
        console.log('click')
    }
  return (
    <header className='header'>
        <h1> hello</h1>
        <Button color='green' text='Add' onClick={onClick}/>
       
    </header>
  )
}
Header.defaultProps={
    title:'task tracker'
}
Header.PropTypesropTypes={
    title:PropTypes.string.isRequired,
}

export default Header