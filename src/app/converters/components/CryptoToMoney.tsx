"use client";

import React, { useEffect, useState } from "react";
import { fetchCryptoPrice } from "@/app/utils/fetch-crypto-price";
import { IoMdSwap } from "react-icons/io";
import NumberInput from "./NumberInput";
import DropDown from "./DropDown";

const CryptoToMoney = () => {
	const [price, setPrice] = useState<number | null>(null);
	const [amountCrypto, setAmountCrypto] = useState<string>("1");
	const [amountFiat, setAmountFiat] = useState<string>("1");

	// State for selected cryptocurrency and currency
	const [crypto, setCrypto] = useState<string>("solana"); // Internal value is in lowercase (for API)
	const [currency, setCurrency] = useState<string>("usd"); // Internal value is in lowercase (for API)

	// State to manage the swapping of inputs
	const [isSwapped, setIsSwapped] = useState(false);

	// Supported cryptocurrencies with param (lowercase for API) and label (for display)
	const supportedCryptos = [
		{ param: "Solana", ticker: "SOL", sub_label: "Solana" },
		{ param: "Ethereum", ticker: "ETH", sub_label: "Ethereum" },
		{ param: "Bitcoin", ticker: "BTC", sub_label: "Bitcoin" },
		{ param: "Dogecoin", ticker: "DOGE", sub_label: "Dogecoin" },
	];

	// Supported currencies with param (lowercase for API) and label (for display)
	const supportedCurrencies = [
		{ param: "USD", sub_label: "US Dollar" },
		{ param: "EUR", sub_label: "Euro" },
		{ param: "GBP", sub_label: "British Pound" },
	];

	// Fetch price on initial render and whenever the crypto/currency changes
	useEffect(() => {
		const fetchPrice = async () => {
			const fetchedPrice = await fetchCryptoPrice(crypto, currency);
			if (fetchedPrice !== null) {
				setPrice(fetchedPrice);
			}
		};

		fetchPrice();
	}, [crypto, currency]);

	// Update fiat value when price or crypto amount changes
	useEffect(() => {
		if (price !== null && !isSwapped) {
			const newFiatAmount = (parseFloat(amountCrypto) * price).toFixed(2);
			setAmountFiat(newFiatAmount);
		}
	}, [price, amountCrypto, isSwapped]);

	useEffect(() => {
		if (price !== null && isSwapped) {
			const newCryptoAmount = (parseFloat(amountFiat) / price).toFixed(4);
			setAmountCrypto(newCryptoAmount);
		}
	}, [price, amountFiat, isSwapped]);

	// Handle changes in the crypto amount
	const handleCryptoChange = (value: string) => {
		setAmountCrypto(value);
		if (price !== null) {
			const fiatAmount = (parseFloat(value) * price).toFixed(2);
			setAmountFiat(fiatAmount);
		}
	};

	// Handle changes in the fiat amount
	const handleFiatChange = (value: string) => {
		setAmountFiat(value);
		if (price !== null) {
			const cryptoAmount = (parseFloat(value) / price).toFixed(4);
			setAmountCrypto(cryptoAmount);
		}
	};

	// Swap the inputs and maintain the correct values
	const handleSwap = async () => {
		// Toggle the swap state
		setIsSwapped((prev) => !prev);
	};

	return (
		<div className="p-4 rounded-lg shadow-md bg-darkBlue bg-opacity-75 w-max-xl">
			<h1 className="text-xl font-semibold mb-4 text-neonGreen">Crypto Conversion</h1>

			<div className="flex lg:flex-row flex-col items-center justify-between gap-4">
				{/* Crypto or Fiat Input + Dropdown */}
				<div className="flex sm:flex-row flex-col gap-4 w-full">
					{!isSwapped ? (
						<>
							<NumberInput
								label={crypto.toUpperCase()}
								value={amountCrypto}
								onChange={handleCryptoChange}
							/>
							<DropDown
								options={supportedCryptos.map((crypto) => ({
									label: `${crypto.ticker}`,
									param: crypto.param,
									sub_label: crypto.sub_label,
								}))}
								value={crypto}
								onChange={setCrypto}
							/>
						</>
					) : (
						<>
							<NumberInput
								label={currency.toUpperCase()}
								value={amountFiat}
								onChange={handleFiatChange}
							/>
							<DropDown
								options={supportedCurrencies.map((currency) => ({
									label: `${currency.param}`,
									param: currency.param,
									sub_label: currency.sub_label,
								}))}
								value={currency}
								onChange={setCurrency}
							/>
						</>
					)}
				</div>

				{/* Swap Button */}
				<div
					className="rounded-full border-2 p-3 hover:bg-gray-900 active:scale-95 cursor-pointer"
					onClick={handleSwap}
				>
					<IoMdSwap className="text-xl" />
				</div>

				{/* Fiat or Crypto Input + Dropdown */}
				<div className="flex sm:flex-row flex-col gap-4 w-full">
					{!isSwapped ? (
						<>
							<NumberInput
								label={currency.toUpperCase()}
								value={amountFiat}
								onChange={handleFiatChange}
							/>
							<DropDown
								options={supportedCurrencies.map((currency) => ({
									label: `${currency.param}`,
									param: currency.param,
									sub_label: currency.sub_label,
								}))}
								value={currency}
								onChange={setCurrency}
							/>
						</>
					) : (
						<>
							<NumberInput
								label={crypto.toUpperCase()}
								value={amountCrypto}
								onChange={handleCryptoChange}
							/>
							<DropDown
								options={supportedCryptos.map((crypto) => ({
									label: `${crypto.ticker}`,
									param: crypto.param,
									sub_label: crypto.sub_label,
								}))}
								value={crypto}
								onChange={setCrypto}
							/>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default CryptoToMoney;
