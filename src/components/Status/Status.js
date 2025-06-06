import './Status.css'
import statusCardImg from '../../assets/statusCardImg.png'

import statusDiamond from '../../assets/statusDiamond.png'

function Status() {
	return (
		<div className='Status'>
			<div className='statusCard diamondCard'>
				<div className='statusTextTop'>
					<div>LVL 01</div>
					<div>ID: 10253</div>
				</div>
				<img
					className='statusDiamond'
					alt='statusDiamond'
					src={statusDiamond}
				></img>
				<div className='statusTextDown'>
					SYNC: 98%
					<img
						className='statusCardImg'
						alt='statusCardImg'
						src={statusCardImg}
					></img>
				</div>
			</div>

			<div className='statusCard'>
				<div className='statusCardTexts'>
					<div className='statusCardTitle'>Hey!</div>
					<div className='statusCardSubtitle'>Status report</div>
				</div>

				<button
					onClick={() =>
						(window.location.href = 'https://presale.hypeloot.com/')
					}
					className='statusBtn'
				>
					Next
				</button>
			</div>
		</div>
	)
}

export default Status
