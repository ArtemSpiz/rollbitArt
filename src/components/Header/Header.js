import './Header.css'
import logo from '../../assets/logo.png'
import headerDiamond from '../../assets/headerDiamond.png'

function Header() {
	return (
		<div className='Header'>
			<img src={logo} alt='logo' className='logo'></img>
			<div className='header-title'>hypeloot Command center</div>
			<div className='diamonds'>
				<img src={headerDiamond} alt='diamond' className='header-diamond'></img>
				9999
			</div>
		</div>
	)
}

export default Header
