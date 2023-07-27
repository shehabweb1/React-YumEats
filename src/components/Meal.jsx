import React, { useState } from "react";
import { mealData } from "../data/data";

const Meal = () => {
	const [foods, setFoods] = useState(mealData);
	const filteredCat = (category) => {
		setFoods(
			mealData.filter((item) => {
				return item.category === category;
			})
		);
	};

	return (
		<div className="max-w-[1500px] m-auto px-4 py-12">
			<h1 className="text-orange-500 font-bold text-2xl text-center py-2">
				Our Meal
			</h1>
			<div className="flex flex-col lg:flex-row justify-center pb-4">
				<div className="flex justify-center">
					<button
						onClick={() => setFoods(mealData)}
						className="m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 "
					>
						All
					</button>
					<button
						onClick={() => filteredCat("pizza")}
						className="m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 "
					>
						Pizza
					</button>
					<button
						onClick={() => filteredCat("chicken")}
						className="m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 "
					>
						Chicken
					</button>
					<button
						onClick={() => filteredCat("salad")}
						className="m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 "
					>
						Salad
					</button>
				</div>
			</div>
			<div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6">
				{foods.map((item) => (
					<div
						key={item.id}
						className="border-none hover:scale-105 duration-300"
					>
						<img
							src={item.image}
							alt={item.name}
							className="w-full h-[200px] object-cover rounded-lg"
						/>
						<div className="flex justify-between py-2 px-2">
							<p className="font-bold">{item.name}</p>
							<p className="bg-orange-500 rounded-full -mt-10 text-white py-4 px-2 border-8">
								{item.price}
							</p>
						</div>
						<div className="pl-2 py-4 -mt-7">
							<p className="flex items-center text-indigo-600 cursor-pointer">
								View More
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-5 ml-2 "
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
									/>
								</svg>
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Meal;
