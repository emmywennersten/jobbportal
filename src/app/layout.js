import './globals.css';
import StoryblokProvider from '@/components/StoryblokProvider';
import { getStoryblokApi } from '@/lib/storyblok';
import { StoryblokServerComponent } from '@storyblok/react/rsc';

export const metadata = {
	title: 'Jobbportal',
	description: 'Hitta ditt nästa jobb',
};

export default async function RootLayout({ children }) {
	const storyblokApi = getStoryblokApi();

	const { data } = await storyblokApi.get('cdn/stories/config', {
		version: 'draft',
		resolve_links: 'url',
	});

	const config = data.story.content;
	const headerBlok = config.header?.[0];
	const footerBlok = config.footer?.[0];

	return (
		<StoryblokProvider>
			<html lang="sv">
				<body>
					{headerBlok && <StoryblokServerComponent blok={headerBlok} />}
					{children}
					{footerBlok && <StoryblokServerComponent blok={footerBlok} />}
				</body>
			</html>
		</StoryblokProvider>
	);
}