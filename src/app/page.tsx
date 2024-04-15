"use client"
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

import TopNavigation from './components/Common/TopNavigation'
import HeroSection from './components/Home/HeroSection'
import MobileMenu from './components/Home/MobileMenu'
import CategorySection from './components/Home/CategorySection'
import FeatureSection from './components/Home/FeatureSection'
import CtaSection from './components/Home/CtaSection'
import FavoriteSection from './components/Home/FavoriteSection'
import FooterNavigation from './components/Common/FooterNavigation'
import TrendingProducts from './components/Home/TrendingProducts'

export default function Example() {


	return (
		<div className="bg-white">
			<MobileMenu/>

			<header className="relative overflow-hidden">
				<TopNavigation/>
				<HeroSection/>
			</header>

			<main>
				<CategorySection/>
				<FeatureSection/>
				<FavoriteSection/>
				<TrendingProducts/>
				<CtaSection/>
			</main>

			<FooterNavigation/>
		</div>
	)
}
