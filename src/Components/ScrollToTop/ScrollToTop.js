import { Fragment, useEffect } from 'react'

import { useLocation } from 'react-router-dom'

export const ScrollToTop = ({ children }) => {
	const { pathname } = useLocation()
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])
	return <Fragment>{children}</Fragment>
}
