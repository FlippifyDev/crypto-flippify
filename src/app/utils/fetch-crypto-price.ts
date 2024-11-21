import axios from 'axios';

/*
 * Fetches the current price of a cryptocurrency in the specified currency from the CoinGecko API.
 * 
 * @param ids - The cryptocurrency ID(s) (e.g., "solana", "bitcoin").
 * @param vs_currencies - The target currency/currencies (e.g., "usd", "eur").
 * @returns The current price(s) in the specified currency/currencies or null if there's an error.
 */
const fetchCryptoPrice = async (ids: string, vs_currencies: string): Promise<number | null> => {
	try {
		const response = await axios.get(
			`https://api.coingecko.com/api/v3/simple/price`,
			{
				params: {
					ids,
					vs_currencies,
				},
			}
		);
		return response.data[ids][vs_currencies];
	} catch (error) {
		console.error(`Error fetching price for ${ids} in ${vs_currencies}:`, error);
		return null;
	}
};

export default fetchCryptoPrice;
