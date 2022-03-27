import './Icons.css'
import { IconContext } from 'react-icons'

function LogoProvider({ children }) {
	return (
		<button className='react-icon-buttons'>
			<IconContext.Provider value={children.props.value}>
				{children}
			</IconContext.Provider>
		</button>
	)
}

export { LogoProvider }
