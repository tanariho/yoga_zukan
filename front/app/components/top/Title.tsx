import React from 'react';

const Title = () => {
	return (
		<div className="flex justify-center items-center">
				<div className="my-20 py-12 px-4 sm:px-6 lg:px-8">
					<div className="relative mx-auto max-w-[37.5rem] pt-20 text-center pb-20">
						<div className="flex items-center justify-center space-x-3">
							<h1 className="ml-5 text-6xl font-bold sm:text-7xl tracking-wide">
								ヨガ図鑑
							</h1>
						</div>
						<p className="mt-6 font-semibold text-2xl leading-7">
							ヨガのポーズの図鑑を完成させるアプリです
						</p>
						<p className="mt-1 font-semibold text-2xl leading-7">
							様々なヨガに関するコンテンツを体験して、楽しくヨガのポーズを集めて覚えましょう！
						</p>
					</div>
				</div>
		</div>
	);
};

export default Title;