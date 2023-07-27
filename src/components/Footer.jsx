import React from "react";
import {
	FaDribbbleSquare,
	FaFacebookSquare,
	FaGithubSquare,
	FaInstagram,
	FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
	return (
		<div className="max-w-[1500px] m-auto px-4 bg-[#24262b]">
			<div className="py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
				<div>
					<h1 className="w-full text-3xl font-bold text-orange-500">YumEats</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime eum
						doloremque perspiciatis cupiditate natus expedita odio dolorum
						repellendus iusto quia.
					</p>
					<div className="flex justify-between md:w-[75%] my-6">
						<FaFacebookSquare size={30} />
						<FaInstagram size={30} />
						<FaTwitterSquare size={30} />
						<FaGithubSquare size={30} />
						<FaDribbbleSquare size={30} />
					</div>
				</div>
				<div className="lg:col-span-2 flex justify-between mt-6">
					<div>
						<h6 className="font-medium text-[#9b9b9b]">Top Picks</h6>
						<ul>
							<li className="py-2 text-sm">Shawarma</li>
							<li className="py-2 text-sm">Juice</li>
							<li className="py-2 text-sm">Fish</li>
							<li className="py-2 text-sm">Rice</li>
						</ul>
					</div>
					<div>
						<h6 className="font-medium text-[#9b9b9b]">Top Meals</h6>
						<ul>
							<li className="py-2 text-sm">Pizza</li>
							<li className="py-2 text-sm">Burger</li>
							<li className="py-2 text-sm">Chicken</li>
							<li className="py-2 text-sm">Salad</li>
						</ul>
					</div>
					<div>
						<h6 className="font-medium text-[#9b9b9b]">Categories</h6>
						<ul>
							<li className="py-2 text-sm">Vegetable</li>
							<li className="py-2 text-sm">Wings</li>
							<li className="py-2 text-sm">Cake</li>
							<li className="py-2 text-sm">Ice-Cream</li>
						</ul>
					</div>
					<div>
						<h6 className="font-medium text-[#9b9b9b]">Location</h6>
						<ul>
							<li className="py-2 text-sm">New York</li>
							<li className="py-2 text-sm">London</li>
							<li className="py-2 text-sm">Dubai</li>
							<li className="py-2 text-sm">Mumbai</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
