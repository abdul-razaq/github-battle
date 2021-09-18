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

/**
 * fetch a particular github user's details
 * @param {string} username user's github username
 * @returns object of user details
 */
export async function fetchUser(username) {
	const endpoint = `https://api.github.com/users/${username}`;
	const user = await (await fetch(endpoint)).json();
	if (!user) {
		throw new Error("user does not exist");
	}
	return user;
}
