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
	if (user.message) {
		throw new Error(getErrorMessage(user.message, username));
	}
	return user;
}

async function fetchUserRepos(username) {
	const endpoint = `https://api.github.com/users/${username}/repos?per_page=100`;
	const repos = await(await fetch(endpoint)).json();

	if (repos.message) {
		throw new Error(getErrorMessage(repos.message, username));
	}
	return repos;
}

async function getUserData(player) {
	const [profile, repos] = await Promise.all([
		fetchUser(player),
		fetchUserRepos(player),
	]);
	return {
		profile,
		score: calculateScore(profile.followers, repos),
	};
}

export async function battle(players) {
	const results = await Promise.all([
		getUserData(players[0]),
		getUserData(players[1]),
	]);
	return sortPlayers(results);
}

function sortPlayers(players) {
	return players.sort((a, b) => b.score - a.score);
}

function getStarCount(repos) {
	return repos.reduce(
		(count, { stargazers_count }) => count + stargazers_count,
		0
	);
}

function calculateScore(followers, repos) {
	return followers * 3 + getStarCount(repos);
}

function getErrorMessage(message, username) {
	if (message === "NOT FOUND") {
		return `user with username of ${username} does not exist.`;
	}
	return message;
}
