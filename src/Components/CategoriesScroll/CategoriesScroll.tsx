import { useScroll } from '../../Hooks/useScroll'

import {
	MaterialSymbolsArrowBackIosRounded,
	MaterialSymbolsArrowForwardIosRounded,
} from '../../assets/Logo'

import { useProducts } from '../../Providers'

import { useNavigate } from 'react-router-dom'

export const CategoriesScroll = () => {
	const navigate = useNavigate()

	const [sliderBtn, scroll] = useScroll()

	const { categories, handleCategories, state } = useProducts()

	const gotoProducts = (name: string, checked: Boolean) => {
		handleCategories(name, checked)
		setTimeout(() => navigate('/products'), 500)
	}


	return (
		<div>
			<div className='categories p-relative'>
				<button
					onClick={() => scroll(-900)}
					className='scroll-btn left-scroll-btn'>
					<MaterialSymbolsArrowBackIosRounded
						className='left-scroll-icon'
						width='4rem'
						height='4rem'
					/>
				</button>

				<div className='category-wrapper' ref={sliderBtn}>
					{categories &&
						categories.length > 0 &&
						categories.map((cat, idx) => (
							<div
								key={idx}
								className='grid grid-stacked homepage-images-wrapper'>
								<input
									id={cat.categoryName}
									type='image'
									className='homepage-images'
									src={cat.image}
									alt={cat.categoryName}
									name={cat.categoryName}
									//@ts-ignore
									checked={state && !state.name}
									readOnly
									onClick={e =>
										gotoProducts((e.target as HTMLInputElement).name, (e.target as HTMLInputElement).checked)
									}
								/>
								<span
									className='categories-name uppercase fs-500 text-dark  letter-spacing-4'
									key={idx}>
									{cat.categoryName}
								</span>
							</div>
						))}
				</div>
				<button
					onClick={() => scroll(+900)}
					className='scroll-btn right-scroll-btn'>
					<MaterialSymbolsArrowForwardIosRounded
						className='right-scroll-icon'
						width='4rem'
						height='4rem'
					/>
				</button>
			</div>
		</div>
	)
}

export default CategoriesScroll
