export function getTitle(title: string = '') {
	const appName = 'Jozi.me'
	return title ? `${title} | ${appName}` : appName
}
