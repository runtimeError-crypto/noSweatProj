const loadBitNews = async () => {
	headersList = {
		Accept: "*/*",
		"User-Agent": `Thunder Client (https://www.thunderclient.com)`,
		Authorization:
			"Apikey 81e004fd539e694b195efe7daf31631a264584191bb008f8754a907fffd9ed5c",
	};
	let res = "";

	if (res.ok) {
		return res.json();
	}
	throw new Error(res.status + ' - ' + res.statusText){
		then((res) => {
			if (res.ok) {
				return res.json();
			}
		})
			.then((data) => resolve(data))
			.catch((err) => reject(err));
	};
}

loadBitNews();
