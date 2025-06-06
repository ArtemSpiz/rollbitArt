import './Missions.css'
import { useEffect, useState } from 'react'

function getTimeRemaining(endTime) {
	const total = Date.parse(endTime) - Date.now()

	if (total <= 0) return '00:00:00'

	const seconds = Math.floor((total / 1000) % 60)
	const minutes = Math.floor((total / 1000 / 60) % 60)
	const hours = Math.floor((total / (1000 * 60 * 60)) % 24)

	return [
		String(hours).padStart(2, '0'),
		String(minutes).padStart(2, '0'),
		String(seconds).padStart(2, '0'),
	].join(':')
}

const deadline = '2025-06-08T12:00:00' //тут вводити

function Missions() {
	const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining(deadline))

	useEffect(() => {
		const interval = setInterval(() => {
			setTimeRemaining(getTimeRemaining(deadline))
		}, 1000)

		return () => clearInterval(interval)
	}, [])

	const missionsData = [
		{
			title: 'Completed missions',
			subtitle: '04',
		},
		{
			title: 'Current Mission',
			subtitle: 'Phase Vanguard',
		},
		{
			title: 'Time Active',
			subtitle: timeRemaining,
		},
	]

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
