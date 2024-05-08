import React from 'react';
import AboutMe from '@components/Sections/AboutMe';
import Basics from '@components/Sections/Basics';
import Contact from '@components/Sections/Contact';
import WorkExperience from '@components/Sections/WorkExperience';
import Skillset from '@components/Sections/Skillset';
import Layout from '@components/Layout/Layout';

export default function Index() {
	return (
		<Layout>
			<AboutMe />
			<WorkExperience />
			<Skillset />
			<Contact />
		</Layout>
	);
}

export const Head = () => (
	<>
		<html lang='en' />
		<title>Alannah Holder's Portfolio Site</title>
		<meta
			name='description'
			content="A site showcasing a brief glimpse of Alannah Holder's skillset."
		/>
	</>
);
