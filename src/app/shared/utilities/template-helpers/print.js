module.exports.register = function (handlebars) {
	handlebars.registerHelper('print', function (block) {
		// return `${message} ${block.data.root.servermode}`;

		let sortBy = block.hash.sortBy;
		let collectionName = block.hash.collection;
		let collectionPages = block.data.root.pages;
		let collections = block.data.root.collections;
		let collectionItem = collections[ collectionName ];
		let pages = Object.keys(collectionPages).filter((page) => {
			return collectionPages[ page ].parsed.data[ collectionName ];
		});
		let listTpl = function (categoryName, pages) {
			return `
			<div class="sitemap__overview">
				<h3 class="sitemap__headline">${categoryName.toUpperCase()}</h3>
				<ol class="sitemap__list">
					${listElTpl(pages)}
				</ol>
			</div>
		`};
		let listElTpl = function (pages) {
			let listEls = '';

			pages.forEach((page) => {
				let currentPageObj = collectionPages[page];

				listEls += `
					<li class="sitemap__list-item">
						<a href="/" class="sitemap__list-item-link">
							${currentPageObj.parsed.data.navigationLink}
						</a>
					</li>
					`
			});

			return listEls;


		};
		let list = '';

		for (let categoryName in collectionItem) {
			let catPages = pages.sort(page => parseInt(collectionPages[ page ].parsed.data[ sortBy ], 10)).filter((page) => collectionPages[ page ].parsed.data[ collectionName ] === categoryName)
			list += listTpl(categoryName, catPages);
		}

		return list;
	});
};