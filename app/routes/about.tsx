import type { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';

export const meta: MetaFunction = () => {
	return [
		{ title: 'Portfolio' },
		{ name: 'description', content: "Hello! This is Axel's Portfolio!" },
	];
};

function underline(text: string) {
	return (
		<span className="underline decoration-green-light dark:decoration-green-dark">
			{text}
		</span>
	);
}
function highlight(text: string, link?: string, linkExternal?: boolean) {
	if (link) {
		if (!linkExternal) {
			return (
				<Link
					to={link}
					className="text-green-light dark:text-green-dark"
				>
					{text}
				</Link>
			);
		} else {
			return (
				<Link
					to={link}
					className="text-green-light dark:text-green-dark"
					target="_blank"
					rel="noopener noreferrer"
				>
					{text}
				</Link>
			);
		}
	} else {
		return (
			<span className="text-green-light dark:text-green-dark">
				{text}
			</span>
		);
	}
}

export default function Index() {
	return (
		<div className="flex h-screen items-center justify-center">
			<div className="flex flex-col items-center gap-16">
				<header className="flex flex-col items-center gap-9">
					<div className="text-gray-600 dark:text-gray-400 text-xl mx-12 w-full max-w-screen-lg">
						<Link to={`/`}>
							<h1 className="leading text-9xl font-bold text-green-light dark:text-green-dark mb-8">
								About me
							</h1>
						</Link>
						<p className="mb-8">
							Hi! I'm {highlight('Axel-Martin Tammekand', '/')}, a
							passionate {underline('software developer')}{' '}
							currently studying at{' '}
							{highlight(
								'Tartu Vocational College',
								'https://voco.ee/',
								true
							)}{' '}
							in Estonia. I specialize in{' '}
							{underline('backend development')}, with a strong
							focus on {underline('Python')} and{' '}
							{underline('FastAPI')}. I enjoy building{' '}
							{underline('robust')}, {underline('scalable')}{' '}
							systems that{' '}
							{underline('solve real-world problems')} and are
							built to last.
						</p>
						<p className="mb-8">
							My journey into software development has been driven
							by my{' '}
							{underline('desire to write clean, efficient code')}
							. I'm always focused on delivering quality solutions
							while keeping things as simple and maintainable as
							possible. As a {underline('quick learner')}, I'm
							always eager to dive into new technologies and
							expand my toolkit. I enjoy working with various
							frameworks and am also{' '}
							{underline('familiar with .NET')}, which adds
							versatility to my development approach.
						</p>
						<p className="mb-8">
							Some of my proudest moments so far include placing
							third in a regional competition between three major
							vocational schools in Estonia - Tartu VOCO, Tallinna
							Polütehnikum, and Ida-Virumaa Kutsehariduskeskus -
							and completing an {underline('internship')} at the{' '}
							{highlight(
								'Estonian Information System Authority (RIA)',
								'https://www.ria.ee/en/',
								true
							)}
							. These experiences have given me valuable insight
							into real-world software development and helped me
							hone my technical and teamwork skills.
						</p>
						<p className="mb-8">
							I'm excited to{' '}
							{underline('continue growing as a developer')} and
							to contribute to meaningful projects in a
							professional setting. I'm particularly interested in
							roles that allow me to work with backend
							technologies, {underline('solve complex problems')},
							and contribute to impactful software solutions.
						</p>
						<p className="mb-8">
							If you're looking for{' '}
							{underline(
								'a dedicated, quick-to-learn developer with a strong work ethic'
							)}
							, I'd love to {highlight('Connect', '/contact')}!
						</p>
					</div>
				</header>
			</div>
		</div>
	);
}
