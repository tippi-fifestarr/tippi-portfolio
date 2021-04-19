// es9 (ES2018) - async

// #2 finally, after .catch(), will be called regardless of if.then or.catch resolve

const urls = [
  'http://swapi.dev/api/people/1',
  'http://swapi.dev/api/people/2',
  'http://swapi.dev/api/people/3',
  'http://swapi.dev/api/people/4'
]

Promise.all(urls.map(url => {
	return fetch(url).then(resp=> resp.json())
})).then(results => {
	console.log(results[0])
	console.log(results[1])
	console.log(results[2])
	console.log(results[3])
}).catch(err => console.log('error', err))
	.finally(() => console.log('extra'));

	//for await of

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData1 = async function () {
  try {
    const [users, posts, albums] = await Promise.all(
    // my answer urls.map((url) => {
      urls.map(async function (url) {  //real answer
      const resp = await fetch(url);
      return resp.json();
     }),
    )
    console.log("users", users);
    console.log("posts", posts);
    console.log("albums", albums);
    } catch (err) {
    console.log ('eroor', err, 'err')
  }
}

const loopThroughUrls = url => {
	for (url of urls) {
		console.log(url)
	}
}

const getData2 = async function() {
	// create array of fetch promises
	const arrayOfPromises = urls.map(url => fetch(url));
	for await (let req of arrayOfPromises) {
		const data = await req.json();
		// remember! CRUCIAL: await anything that is promise, 
		console.log("data identifiers, word.", data)
	}
}

// allows you to loop through just like sync

