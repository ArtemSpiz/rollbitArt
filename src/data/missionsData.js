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

const deadline = '2025-06-08T12:00:00'

const getMissionsData = () => [
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
		subtitle: getTimeRemaining(deadline),
	},
]

export default getMissionsData
