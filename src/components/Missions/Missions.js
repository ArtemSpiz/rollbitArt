import './Missions.css'
import missionsData from '../../data/missionsData'

function Missions() {
	return (
		<div className='Missions'>
			{missionsData.map((mission, index) => (
				<div className='missionsCard' key={index}>
					<div className='missionsBorder'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='18'
							height='18'
							viewBox='0 0 18 18'
							fill='none'
						>
							<path
								d='M1 18L1 1L18 1'
								stroke='#64657D'
								stroke-width='2'
								stroke-linejoin='bevel'
							/>
						</svg>

						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='18'
							height='18'
							viewBox='0 0 18 18'
							fill='none'
						>
							<path
								d='M18 17L1 17L1 -1.54579e-06'
								stroke='#64657D'
								stroke-width='2'
								stroke-linejoin='bevel'
							/>
						</svg>
					</div>

					<div className='missionsCardTexts'>
						<div className='missionsCardTitle'>{mission.title}</div>
						<div className='missionsCardSubtitle'>{mission.subtitle}</div>
					</div>

					<div className='missionsBorderRight'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='18'
							height='18'
							viewBox='0 0 18 18'
							fill='none'
						>
							<path
								d='M1 18L1 1L18 1'
								stroke='#64657D'
								stroke-width='2'
								stroke-linejoin='bevel'
							/>
						</svg>

						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='18'
							height='18'
							viewBox='0 0 18 18'
							fill='none'
						>
							<path
								d='M18 17L1 17L1 -1.54579e-06'
								stroke='#64657D'
								stroke-width='2'
								stroke-linejoin='bevel'
							/>
						</svg>
					</div>
				</div>
			))}
		</div>
	)
}

export default Missions
