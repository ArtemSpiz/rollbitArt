import './Footer.css'

import twitter from '../../assets/twiter.png'
import telegram from '../../assets/telegram.png'

function Footer() {
	return (
		<div className='Footer'>
			<button
				className='footerBtn'
				onClick={() => (window.location.href = 'https://presale.hypeloot.com/')}
			>
				Enter Mission
			</button>
			<div className='footerSecure'>
				<div className='footerSecureTitle'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='9'
						height='8'
						viewBox='0 0 9 8'
						fill='none'
					>
						<circle cx='4.5' cy='4' r='4' fill='#E9EC5E' />
					</svg>
					Secure chanel active
				</div>

				<div className='footerLinks'>
					<div className='footerLinksTelegram'>
						<img src={telegram} alt='telegram' className='tgImg'></img>
						Comms chanel
					</div>
					<div className='footerLinksTelegram'>
						<img src={twitter} alt='twitter' className='tgImg'></img>
						Intel feed
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
