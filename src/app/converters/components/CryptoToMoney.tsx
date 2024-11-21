"use client";

import React, { useEffect, useState } from 'react';
import fetchCryptoPrice from '@/app/utils/fetch-crypto-price';
import DropDown from './DropDown';
import NumberInput from './NumberInput';

const CryptoToMoney = () => {
	const [price, setPrice] = useState<number | null>(null);
	const [amountCrypto, setAmountCrypto] = useState<string>('1');
	const [amountFiat, setAmountFiat] = useState<string>('1');

	// State for selected cryptocurrency and currency
	const [crypto, setCrypto] = useState<string>('solana'); // Internal value is in lowercase (for API)
	const [currency, setCurrency] = useState<string>('usd'); // Internal value is in lowercase (for API)

	// Supported cryptocurrencies with param (lowercase for API) and label (for display)
	const supportedCryptos = [
		{ param: 'Solana', ticker: 'SOL', sub_label: 'Solana' },
		{ param: 'Ethereum', ticker: 'ETH', sub_label: 'Ethereum' },
		{ param: 'Bitcoin', ticker: 'BTC', sub_label: 'Bitcoin' },
		{ param: 'Dogecoin', ticker: 'DOGE', sub_label: 'Dogecoin' }
	];

	// Supported currencies with param (lowercase for API) and label (for display)
	const supportedCurrencies = [
		{ param: 'USD', sub_label: 'US Dollar' },
		{ param: 'EUR', sub_label: 'Euro' },
		{ param: 'GBP', sub_label: 'British Pound' },
		{ param: 'INR', sub_label: 'Indian Rupee' }
	];


	// When either crypto or fiat amount changes, we calculate the other value
	useEffect(() => {
		// Fetch the price from the API
		const fetchPrice = async () => {
			const fetchedPrice = await fetchCryptoPrice(crypto, currency);
			setPrice(fetchedPrice);
		};

		fetchPrice()
	}, [crypto, currency]);

	// Recalculate the fiat value when the price updates (but don't affect the crypto value)
	useEffect(() => {
		if (price !== null) {
			// Recalculate the fiat value based on the crypto amount when the price is updated
			const newFiatAmount = (parseFloat(amountCrypto) * price).toFixed(2);
			setAmountFiat(newFiatAmount);
		}
	}, [price, amountCrypto]);

	// Function to handle changes in the amount of crypto
	const handleCryptoChange = (value: string) => {
		setAmountCrypto(value);
		if (price !== null) {
			// Calculate fiat amount from crypto
			const fiatAmount = (parseFloat(value) * price).toFixed(2);
			setAmountFiat(fiatAmount);
		}
	};

	// Function to handle changes in the amount of fiat
	const handleFiatChange = (value: string) => {
		setAmountFiat(value);
		if (price !== null) {
			// Calculate crypto amount from fiat
			const cryptoAmount = (parseFloat(value) / price).toFixed(4);
			setAmountCrypto(cryptoAmount);
		}
	};

	return (
		<div className="p-4 rounded-lg shadow-md bg-darkBlue bg-opacity-75 w-max-xl">
			<h1 className="text-xl font-semibold mb-4 text-neonGreen">Crypto Conversion</h1>

			<div className="flex lg:flex-row flex-col items-center justify-between gap-4">
				{/* Crypto Amount Input */}
				<div className='flex sm:flex-row flex-col gap-4 w-full'>
					<NumberInput
						label={crypto}
						value={amountCrypto}
						onChange={handleCryptoChange}
					/>

					{/* Cryptocurrency Dropdown */}
					<DropDown
						options={supportedCryptos.map(crypto => ({
							label: `${crypto.ticker}`,
							param: crypto.param,
							sub_label: crypto.sub_label
						}))}
						value={crypto}
						onChange={setCrypto}
					/>
				</div>

				<div className='flex sm:flex-row flex-col gap-4 w-full'>
					{/* Fiat Amount Input */}
					<NumberInput
						label={currency}
						value={amountFiat}
						onChange={handleFiatChange}
					/>

					{/* Currency Dropdown */}
					<DropDown
						options={supportedCurrencies.map(currency => ({
							label: `${currency.param}`,
							param: currency.param,
							sub_label: currency.sub_label
						}))}
						value={currency}
						onChange={setCurrency}
					/>
				</div>
			</div>
		</div>
	);
};

export default CryptoToMoney;
