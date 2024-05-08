import React, { useState } from 'react';
import TabButton from './TabButton';
import { tabData } from '../../data';

export default function Tabs() {
	const [selectTab, setSelectTab] = useState('');

	function handleTabButton(selected) {
		setSelectTab(selected);
	}

	if (selectTab === '') {
		setSelectTab(tabData[0].title);
	}
	const tabContent = tabData.map((tab, i) => (
		<div
			key={`tab-content-${i}`}
			className={`text-left ${
				selectTab.title === tab.title || selectTab === tab.title
					? 'block'
					: 'hidden'
			} mt-0 pt-5 px-5 pb-7 text-dark bg-white rounded-b-xl rounded-tr-xl`}
			aria-labelledby={`tab-${tab.title
				.toLowerCase()
				.split(' ')
				.join('-')}`}
			id={tab.title.toLowerCase().split(' ').join('-')}
			role='tabpanel'
		>
			<h2 className='font-bold mb-4'>{tab.title}</h2>
			{tab.content}
		</div>
	));
	return (
		<div id='tabs'>
			<ul className='flex flex-col md:gap-2 md:flex-row'>
				{tabData.map((tab, i) => (
					<TabButton
						key={`tabs-key-${i}`}
						isSelected={selectTab.title === tab.title}
						onSelect={() => handleTabButton(tab)}
						selectedTab={tab.title
							.toLowerCase()
							.split(' ')
							.join('-')}
					>
						{tab.title}
					</TabButton>
				))}
			</ul>
			{tabContent}
		</div>
	);
}
