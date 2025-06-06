import './Analyzing.css'
import analyzingImg from '../../assets/analizingImg.png'

function Analyzing() {
	return (
		<div className='Analyzing'>
			<div className='AnalyzingImages'>
				<div className='AnalyzingArrowLeft'>
					{[...Array(3)].map((_, i) => (
						<svg
							key={i}
							xmlns='http://www.w3.org/2000/svg'
							width='52'
							height='92'
							viewBox='0 0 52 92'
							fill='none'
						>
							<path
								d='M48.4082 88L3.40821 46L48.4082 4'
								stroke='#292A3F'
								strokeWidth='10.0078'
								strokeLinejoin='bevel'
							/>
						</svg>
					))}
				</div>

				<img
					src={analyzingImg}
					className='analyzingImg'
					alt='analyzingImg'
				></img>

				<div className='AnalyzingArrowRight'>
					{[...Array(3)].map((_, i) => (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='52'
							height='92'
							viewBox='0 0 52 92'
							fill='none'
						>
							<path
								d='M3.5918 4L48.5918 46L3.5918 88'
								stroke='#292A3F'
								stroke-width='10.0078'
								stroke-linejoin='bevel'
							/>
						</svg>
					))}
				</div>
			</div>

			<div className='AnalyzingText'> Analyzing targets</div>
		</div>
	)
}

export default Analyzing
