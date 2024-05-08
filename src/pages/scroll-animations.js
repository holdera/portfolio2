import React, { useState } from 'react';
import Layout from '@components/Layout/Layout';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

function ScrollAnimations() {
	const { scrollYProgress } = useScroll();

	const scaleX = useSpring(scrollYProgress);

	const background = useTransform(
		scrollYProgress,
		[0, 1],
		['rgb(86,1,245)', 'rgb(1, 45, 13)']
	);
	return (
		<Layout>
			<div>
				<motion.div
					style={{
						// scaleX: scrollYProgress,
						scaleX,
						// background: 'pink',
						background,
						transformOrigin: 'left',
						position: 'sticky',
						top: 0,
						width: '100%',
						height: '20px',
					}}
				/>
				<div
					style={{
						maxWidth: '750px',
						margin: 'auto',
						padding: '1.2rem',
					}}
				>
					<p>
						Muffin pudding chocolate bar cheesecake ice cream donut.
						Gingerbread shortbread candy oat cake halvah cotton
						candy oat cake tart candy. Icing tart candy muffin
						fruitcake topping halvah tootsie roll. Candy jelly beans
						biscuit gingerbread apple pie. Chocolate cake bonbon
						sugar plum icing jelly tart. Danish danish donut cookie
						bonbon fruitcake. Halvah halvah danish lollipop carrot
						cake donut toffee. Jujubes liquorice jelly oat cake
						powder tart. Sugar plum topping liquorice wafer dragée.
					</p>

					<p>
						Fruitcake cake carrot cake biscuit jelly-o lollipop
						cupcake halvah cake. Marshmallow dessert macaroon
						fruitcake gummies caramels. Cotton candy chupa chups
						icing gummi bears biscuit sweet roll lemon drops. Muffin
						cookie biscuit bear claw chocolate bar jelly beans
						cookie topping cotton candy. Topping chupa chups chupa
						chups cookie biscuit. Topping gingerbread candy canes
						tootsie roll cupcake. Icing apple pie cheesecake tart
						wafer. Oat cake chupa chups caramels candy macaroon
						sweet dragée.
					</p>

					<p>
						Chocolate bar fruitcake caramels fruitcake cotton candy
						jelly danish liquorice jelly-o. Bonbon croissant candy
						danish chocolate liquorice pastry biscuit bonbon.
						Chocolate cake chocolate bar bear claw powder lemon
						drops candy canes biscuit. Muffin carrot cake
						gingerbread apple pie candy gingerbread chupa chups
						soufflé. Cupcake pastry cheesecake gummi bears macaroon
						shortbread oat cake. Bear claw cake chocolate cake pie
						pie chocolate cake tootsie roll macaroon. Sesame snaps
						sweet roll brownie soufflé macaroon lemon drops cupcake
						icing.
					</p>

					<p>
						Cupcake apple pie carrot cake cupcake soufflé cookie.
						Cotton candy croissant tiramisu marzipan candy canes
						liquorice sugar plum. Liquorice pudding sugar plum
						topping jelly-o. Cheesecake sugar plum jelly beans
						croissant pastry shortbread sesame snaps. Caramels
						bonbon liquorice soufflé gummi bears shortbread marzipan
						lollipop marzipan. Shortbread jelly-o ice cream cookie
						lollipop candy. Fruitcake cheesecake fruitcake cupcake
						jelly powder ice cream. Apple pie caramels carrot cake
						sweet wafer. Marzipan oat cake caramels jujubes biscuit.
						Bear claw dragée cheesecake pie macaroon.
					</p>

					<p>
						Muffin pudding chocolate bar cheesecake ice cream donut.
						Gingerbread shortbread candy oat cake halvah cotton
						candy oat cake tart candy. Icing tart candy muffin
						fruitcake topping halvah tootsie roll. Candy jelly beans
						biscuit gingerbread apple pie. Chocolate cake bonbon
						sugar plum icing jelly tart. Danish danish donut cookie
						bonbon fruitcake. Halvah halvah danish lollipop carrot
						cake donut toffee. Jujubes liquorice jelly oat cake
						powder tart. Sugar plum topping liquorice wafer dragée.
					</p>

					<p>
						Fruitcake cake carrot cake biscuit jelly-o lollipop
						cupcake halvah cake. Marshmallow dessert macaroon
						fruitcake gummies caramels. Cotton candy chupa chups
						icing gummi bears biscuit sweet roll lemon drops. Muffin
						cookie biscuit bear claw chocolate bar jelly beans
						cookie topping cotton candy. Topping chupa chups chupa
						chups cookie biscuit. Topping gingerbread candy canes
						tootsie roll cupcake. Icing apple pie cheesecake tart
						wafer. Oat cake chupa chups caramels candy macaroon
						sweet dragée.
					</p>

					<p>
						Chocolate bar fruitcake caramels fruitcake cotton candy
						jelly danish liquorice jelly-o. Bonbon croissant candy
						danish chocolate liquorice pastry biscuit bonbon.
						Chocolate cake chocolate bar bear claw powder lemon
						drops candy canes biscuit. Muffin carrot cake
						gingerbread apple pie candy gingerbread chupa chups
						soufflé. Cupcake pastry cheesecake gummi bears macaroon
						shortbread oat cake. Bear claw cake chocolate cake pie
						pie chocolate cake tootsie roll macaroon. Sesame snaps
						sweet roll brownie soufflé macaroon lemon drops cupcake
						icing.
					</p>

					<p>
						Cupcake apple pie carrot cake cupcake soufflé cookie.
						Cotton candy croissant tiramisu marzipan candy canes
						liquorice sugar plum. Liquorice pudding sugar plum
						topping jelly-o. Cheesecake sugar plum jelly beans
						croissant pastry shortbread sesame snaps. Caramels
						bonbon liquorice soufflé gummi bears shortbread marzipan
						lollipop marzipan. Shortbread jelly-o ice cream cookie
						lollipop candy. Fruitcake cheesecake fruitcake cupcake
						jelly powder ice cream. Apple pie caramels carrot cake
						sweet wafer. Marzipan oat cake caramels jujubes biscuit.
						Bear claw dragée cheesecake pie macaroon.
					</p>

					<p>
						Chocolate bar fruitcake caramels fruitcake cotton candy
						jelly danish liquorice jelly-o. Bonbon croissant candy
						danish chocolate liquorice pastry biscuit bonbon.
						Chocolate cake chocolate bar bear claw powder lemon
						drops candy canes biscuit. Muffin carrot cake
						gingerbread apple pie candy gingerbread chupa chups
						soufflé. Cupcake pastry cheesecake gummi bears macaroon
						shortbread oat cake. Bear claw cake chocolate cake pie
						pie chocolate cake tootsie roll macaroon. Sesame snaps
						sweet roll brownie soufflé macaroon lemon drops cupcake
						icing.
					</p>

					<p>
						Cupcake apple pie carrot cake cupcake soufflé cookie.
						Cotton candy croissant tiramisu marzipan candy canes
						liquorice sugar plum. Liquorice pudding sugar plum
						topping jelly-o. Cheesecake sugar plum jelly beans
						croissant pastry shortbread sesame snaps. Caramels
						bonbon liquorice soufflé gummi bears shortbread marzipan
						lollipop marzipan. Shortbread jelly-o ice cream cookie
						lollipop candy. Fruitcake cheesecake fruitcake cupcake
						jelly powder ice cream. Apple pie caramels carrot cake
						sweet wafer. Marzipan oat cake caramels jujubes biscuit.
						Bear claw dragée cheesecake pie macaroon.
					</p>

					<p>
						Chocolate bar fruitcake caramels fruitcake cotton candy
						jelly danish liquorice jelly-o. Bonbon croissant candy
						danish chocolate liquorice pastry biscuit bonbon.
						Chocolate cake chocolate bar bear claw powder lemon
						drops candy canes biscuit. Muffin carrot cake
						gingerbread apple pie candy gingerbread chupa chups
						soufflé. Cupcake pastry cheesecake gummi bears macaroon
						shortbread oat cake. Bear claw cake chocolate cake pie
						pie chocolate cake tootsie roll macaroon. Sesame snaps
						sweet roll brownie soufflé macaroon lemon drops cupcake
						icing.
					</p>

					<p>
						Cupcake apple pie carrot cake cupcake soufflé cookie.
						Cotton candy croissant tiramisu marzipan candy canes
						liquorice sugar plum. Liquorice pudding sugar plum
						topping jelly-o. Cheesecake sugar plum jelly beans
						croissant pastry shortbread sesame snaps. Caramels
						bonbon liquorice soufflé gummi bears shortbread marzipan
						lollipop marzipan. Shortbread jelly-o ice cream cookie
						lollipop candy. Fruitcake cheesecake fruitcake cupcake
						jelly powder ice cream. Apple pie caramels carrot cake
						sweet wafer. Marzipan oat cake caramels jujubes biscuit.
						Bear claw dragée cheesecake pie macaroon.
					</p>

					<p>
						Chocolate bar fruitcake caramels fruitcake cotton candy
						jelly danish liquorice jelly-o. Bonbon croissant candy
						danish chocolate liquorice pastry biscuit bonbon.
						Chocolate cake chocolate bar bear claw powder lemon
						drops candy canes biscuit. Muffin carrot cake
						gingerbread apple pie candy gingerbread chupa chups
						soufflé. Cupcake pastry cheesecake gummi bears macaroon
						shortbread oat cake. Bear claw cake chocolate cake pie
						pie chocolate cake tootsie roll macaroon. Sesame snaps
						sweet roll brownie soufflé macaroon lemon drops cupcake
						icing.
					</p>

					<p>
						Cupcake apple pie carrot cake cupcake soufflé cookie.
						Cotton candy croissant tiramisu marzipan candy canes
						liquorice sugar plum. Liquorice pudding sugar plum
						topping jelly-o. Cheesecake sugar plum jelly beans
						croissant pastry shortbread sesame snaps. Caramels
						bonbon liquorice soufflé gummi bears shortbread marzipan
						lollipop marzipan. Shortbread jelly-o ice cream cookie
						lollipop candy. Fruitcake cheesecake fruitcake cupcake
						jelly powder ice cream. Apple pie caramels carrot cake
						sweet wafer. Marzipan oat cake caramels jujubes biscuit.
						Bear claw dragée cheesecake pie macaroon.
					</p>

					<p>
						Chocolate bar fruitcake caramels fruitcake cotton candy
						jelly danish liquorice jelly-o. Bonbon croissant candy
						danish chocolate liquorice pastry biscuit bonbon.
						Chocolate cake chocolate bar bear claw powder lemon
						drops candy canes biscuit. Muffin carrot cake
						gingerbread apple pie candy gingerbread chupa chups
						soufflé. Cupcake pastry cheesecake gummi bears macaroon
						shortbread oat cake. Bear claw cake chocolate cake pie
						pie chocolate cake tootsie roll macaroon. Sesame snaps
						sweet roll brownie soufflé macaroon lemon drops cupcake
						icing.
					</p>

					<p>
						Cupcake apple pie carrot cake cupcake soufflé cookie.
						Cotton candy croissant tiramisu marzipan candy canes
						liquorice sugar plum. Liquorice pudding sugar plum
						topping jelly-o. Cheesecake sugar plum jelly beans
						croissant pastry shortbread sesame snaps. Caramels
						bonbon liquorice soufflé gummi bears shortbread marzipan
						lollipop marzipan. Shortbread jelly-o ice cream cookie
						lollipop candy. Fruitcake cheesecake fruitcake cupcake
						jelly powder ice cream. Apple pie caramels carrot cake
						sweet wafer. Marzipan oat cake caramels jujubes biscuit.
						Bear claw dragée cheesecake pie macaroon.
					</p>
				</div>
			</div>
		</Layout>
	);
}

export default ScrollAnimations;
