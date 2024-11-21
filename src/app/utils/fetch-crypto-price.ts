// In-memory cache to store fetched prices
const priceCache: Record<string, Record<string, number>> = {};

/*
 * Fetches the current price of a cryptocurrency in the specified currency from the CoinGecko API.
 * 
 * @param ids - The cryptocurrency ID(s) (e.g., "solana", "bitcoin").
 * @param vs_currencies - The target currency/currencies (e.g., "usd", "eur").
 * @returns The current price(s) in the specified currency/currencies or null if there's an error.
 */
const fetchCryptoPrice = async (ids: string, vs_currencies: string): Promise<number | null> => {
	// Check if the price is already in the cache#
	console.log(priceCache)
	if (priceCache[ids]?.[vs_currencies]) {
		console.log(`Cache hit for ${ids} in ${vs_currencies}`);
		return priceCache[ids][vs_currencies];
	}

	try {
		// Fetch the price from the CoinGecko API
		const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=${vs_currencies}`, {
				method: "GET",
				headers: {
					"X-Requested-With": "XMLHttpRequest",
					"Content-Type": "application/json",
				}
			}
		);

		// Ensure the response is OK
		if (!response.ok) {
			return null;
		}

		// Parse the response data
		const data = await response.json();

		// Cache the result
		if (!priceCache[ids]) {
			priceCache[ids] = {};
		}
		priceCache[ids][vs_currencies] = data[ids][vs_currencies];

		return data[ids][vs_currencies];
	} catch (error) {

		console.error(`Error fetching price for ${ids} in ${vs_currencies}:`, error);
		return null;
	}
};


export { fetchCryptoPrice };