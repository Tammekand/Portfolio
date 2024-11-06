import type { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';

export const meta: MetaFunction = () => {
	return [
		{ title: 'Axel-Martin Tammekand | Portfolio' },
		{ name: 'description', content: "Hello! This is Axel's Portfolio!" },
	];
};

function linkButton(text: string, link: string) {
	return (
		<Link
			className="
				text-green-light
				dark:text-green-dark
				bg-light
				dark:bg-dark
				hover:dark:bg-green-dark
				hover:dark:text-dark
				hover:bg-green-light
				hover:text-light
				font-bold
				py-2
				px-2
				rounded
				transition
				duration-200
				transform
				hover:scale-105
			"
			to={link}
		>
			{text}
		</Link>
	);
}

export default function Index() {
	return (
		<div className="flex h-screen items-center justify-center">
			<div className="flex flex-col items-center gap-16">
				<header className="flex flex-col items-center gap-9">
					<h1 className="leading text-9xl font-bold text-green-light dark:text-green-dark">
						Hey!
					</h1>
					<div className="text-gray-600 dark:text-gray-400 text-3xl mx-12">
						<p>
							I'm{' '}
							<span className="text-green-light dark:text-green-dark">
								Axel
							</span>
							, a{' '}
							<span className="underline text-green-light dark:text-green-dark">
								Software Developer
							</span>
							, and this is my Portfolio.
						</p>
						{'\n'}
						<p>Feel free to look around!</p>
					</div>

					<ul>
						<li>{linkButton('About Me', '/about')}</li>
					</ul>
					<p className="text-gray-600 dark:text-gray-400 text-xs">
						This is work in progress, so please be patient
					</p>
				</header>
			</div>
		</div>
	);
}
