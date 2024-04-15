'use client' 
import React from 'react'
import {products} from '@/dummyData'

const ProductsGrid = () => {
	return (
		<>
			<div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:col-span-3 lg:gap-x-8">
				{
				products.map((product) => (
					<a key={
							product.id
						}
						href={
							product.href
						}
						className="group text-sm">
						<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
							<img src={
									product.imageSrc
								}
								alt={
									product.imageAlt
								}
								className="h-full w-full object-cover object-center"/>
						</div>
						<h3 className="mt-4 font-medium text-gray-900">
							{
							product.name
						}</h3>
						<p className="italic text-gray-500">
							{
							product.availability
						}</p>
						<p className="mt-2 font-medium text-gray-900">
							{
							product.price
						}</p>
					</a>
				))
			} </div>
		</>
	)
}

export default ProductsGrid
