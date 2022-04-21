import './CartScreen.css'

import { ProductCard } from '../../Components/ProductCard/ProductCard'

import { MdiTagOutline } from '../../assets/Icons/Logo'

import { useWishList } from '../../actionProviders/wishListAction'

import { useCart } from '../../actionProviders/cartActions'

const CartScreen = () => {
	const { toggleWishListAction, wishList } = useWishList()

	const { addtoCartAction, cartItems, removeFromCartAction } =
		useCart()

	const totalItems =
		cartItems && cartItems.length > 0
			? cartItems.reduce((sum, cv) => sum + cv.qty, 0)
			: 0

	const totalPrice =
		cartItems && cartItems.length > 0
			? cartItems.reduce((sum, cv) => sum + cv.price * cv.qty, 0)
			: 0

	const updateWishList = pro => {
		removeFromCartAction(pro._id)
		toggleWishListAction(pro)
	}

	return (
		<section>
			<div className='wish-screen'>
				{cartItems &&
					cartItems.length > 0 &&
					cartItems.map(p => (
						<ProductCard
							product={p}
							key={p._id}
							_id={p._id}
							addtoCartAction={addtoCartAction}
							image={p.image}
							title={p.title}
							price={p.price}
							rating={p.rating}
							cartItems={cartItems}
							wishList={wishList}
							toggleWishListAction={updateWishList}
						/>
					))}
			</div>
			<div className='cart-summary'>
				<p className='subtotal fs-600 '>
					SUBTOTAL ({totalItems}) Items :{' '}
				</p>
				<span className='apply-cupons'>
					Apply Cupons
					<MdiTagOutline width='1.25rem' height='1.25rem' />
				</span>
				<p className='checkout-price'>Pay : {totalPrice} </p>
			</div>
		</section>
	)
}

export default CartScreen
