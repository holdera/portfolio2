import React from 'react';
import AboutMe from '@components/Sections/AboutMe';
import WorkExperience from '@components/Sections/WorkExperience';
import SkillSet from '@components/Sections/SkillSet';
import TechSpecs from '@components/Sections/TechSpecs';
import Layout from '@components/Layout/Layout';

export default function Index() {
	return (
		<Layout>
			<AboutMe />
			<WorkExperience />
			<TechSpecs />
			<SkillSet />
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
