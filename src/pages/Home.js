import Analyzing from '../components/Analyzing/Analyzing'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Missions from '../components/Missions/Missions'
import Operation from '../components/Operation/Operation'
import Status from '../components/Status/Status'
import './Home.css'

function Home() {
	return (
		<div className='Home'>
			<Header />
			<Analyzing />
			<Missions />
			<Status />
			<Operation />
			<Footer />
		</div>
	)
}

export default Home
