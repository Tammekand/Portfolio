import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
	return [
		{ title: 'Portfolio' },
		{ name: 'description', content: "Hello! This is Axel's Portfolio!" },
	];
};

export default function Index() {
	return (
		<div className="flex h-screen items-center justify-center">
			<div className="flex flex-col items-center gap-16">
				<header className="flex flex-col items-center gap-9">
					<h1 className="leading text-9xl font-bold text-gray-800 dark:text-gray-100">
						Hello!
					</h1>
					<p className="text-gray-600 dark:text-gray-400 text-3xl">
						This is Axel's Portfolio
					</p>
					<p className="text-gray-600 dark:text-gray-400 text-xs">
						This is work in progress, so please be patient
					</p>
				</header>
			</div>
		</div>
	);
}
