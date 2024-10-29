import type { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';

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
					<Link to={`/`}>
						<h1 className="leading text-9xl font-bold text-green-light dark:text-green-dark">
							About page
						</h1>
					</Link>
				</header>
			</div>
		</div>
	);
}
