module.exports = function () {
	return [
		{
			type: 'text',
			name: 'title',
			message: 'How is the title of the page?'
		},{
			type: 'text',
			name: 'navigationLink',
			message: 'How is the navigation link text of the page?'
		},
		{
			type: 'list',
			name: 'sitemap',
			message: 'In which sitemap do you want to save it?',
			choices: [
				{
					name: 'Docs',
					value: 'Docs'
				},
				{
					name: 'Examples',
					value: 'Examples'
				},
				{
					name: 'Tutorials',
					value: 'tutorials'
				},
				{
					name: 'Custom',
					value: 'custom'
				}
			],
			default: 'Docs'
		},
		{
			type: 'text',
			name: 'category',
			message: 'In which category section do you want to save it?',
			default: 'Getting Started'
		},
		{
			type: 'text',
			name: 'category',
			message: 'In which category section do you want to save it?',
			default: 'Methodology'
		}
	]
};
