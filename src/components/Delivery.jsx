import React from "react";

const Delivery = () => {
	return (
		<div className="w-full bg-white px-4 py-16 ">
			<h3 className=" text-orange-500 font-bold text-2xl text-center">
				Quick Delivery App
			</h3>
			<div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2">
				<img
					className="w-[550px] mx-auto my-4"
					src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp"
					alt="quick delivery image"
				/>
				<div className="flex flex-col justify-center">
					<p className="text-[#00df9a] font-bold">Get The App </p>
					<h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
						Limitless Convenience on-demand
					</h1>
					<p className="text-justify overflow-hidden">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
						molestiae delectus culpa hic assumenda, voluptate reprehenderit
						dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
						eveniet ex deserunt fuga? Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Voluptatum molestiae delectus culpa hic assumenda,
						voluptate reprehenderit dolore autem cum ullam sed odit
						perspiciatis. Doloribus quos velit, eveniet ex deserunt fuga? Lorem
						ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
						molestiae delectus culpa hic assumenda, voluptate reprehenderit
						dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
						eveniet ex deserunt fuga?
					</p>
					<button className="text-[#00df9a] bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
						Get Started
					</button>
				</div>
			</div>
		</div>
	);
};

export default Delivery;
