/**
 * fetches popular repositories from the github API on a particular programming language.
 * @param {string} language language to fetch popular repos for.
 * @returns Array of popular languages.
 */
export async function fetchPopularRepos(language) {
	const endpoint = window.encodeURI(
		`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
	);
	try {
		const items = await (await fetch(endpoint)).json();
		return items;
	} catch (error) {
		throw error;
	}
}
