import './Operation.css'
import operationBtn from '../../assets/operationBtn.png'
import operationData from '../../data/operationData'
import operationCardBtn from '../../assets/Polygon.png'
import { useState } from 'react'

function Operation() {
	const [openIndexes, setOpenIndexes] = useState([])
	const [isOperationOpen, setIsOperationOpen] = useState(true)

	const toggleCard = index => {
		setOpenIndexes(prev =>
			prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
		)
	}

	const toggleOperation = () => {
		setIsOperationOpen(prev => {
			if (prev) setOpenIndexes([])
			return !prev
		})
	}

	return (
		<div className={`Operation ${isOperationOpen ? 'open' : ''}`}>
			<div className='operationTitle' onClick={toggleOperation}>
				Mission log
				<img
					className={`operationBtn ${isOperationOpen ? 'rotated' : ''}`}
					alt='operationBtn'
					src={operationBtn}
				/>
			</div>

			<div
				className={`operationCardsWrapper ${isOperationOpen ? '' : 'closed'}`}
			>
				<div className='operationCards'>
					{operationData.map((operation, index) => {
						const isOpen = openIndexes.includes(index)
						return (
							<div className='operationCard' key={index}>
								<div
									className='operationCardTop'
									onClick={() => toggleCard(index)}
								>
									<div className='operationCardTitles'>
										<div className='operationCardTitle'>{operation.title}</div>
										<div className='operationCardSubtitle'>
											{operation.subtitle}
										</div>
									</div>

									<img
										className={`operationCardBtn ${isOpen ? 'rotated' : ''}`}
										alt='operationCardBtn'
										src={operationCardBtn}
									/>
								</div>

								<div className={`operationCardText ${isOpen ? 'open' : ''}`}>
									{operation.text}
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default Operation
