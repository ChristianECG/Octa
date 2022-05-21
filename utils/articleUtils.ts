type ArticleDescription = {
	title: string,
	date: string,
	file: string,
	permalink: string,
}

export function slugToArticle (slug: string): ArticleDescription {
	const permalink = slug.slice(9, -3)
	const title = titleConverter(permalink)
	const date = dateConverter(slug.slice(0, 8))
	const file = `./articles/${slug}`

	return {
		title,
		date,
		file,
		permalink,
	}
}

function dateConverter (date: string): string {
	type monthsType = {
		[key: string]: string
	}

	const months: monthsType = {
		'01': 'enero',
		'02': 'febrero',
		'03': 'marzo',
		'04': 'abril',
		'05': 'mayo',
		'06': 'junio',
		'07': 'julio',
		'08': 'agosto',
		'09': 'septiembre',
		'10': 'octubre',
		'11': 'noviembre',
		'12': 'diciembre',
	}

	const year: string = date.slice(0, 4)
	const month: string = date.slice(4, 6)
	const day: string = date.slice(6, 8)

	return `${day} de ${months[month]} de ${year}`
}

function titleConverter (title: string): string {
	const _title = title.replaceAll('_', ' ')
	return _title.charAt(0).toUpperCase() + _title.slice(1)
}