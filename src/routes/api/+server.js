// Simulated data (structured to match merged_data.json format)
const mergedData = require('./merged_data.json'); // Replace with your actual data source

// Endpoint for the whole Quran
export async function GET() {
	return {
		body: mergedData
	};
}

// Endpoint for individual surahs in Arabic
export async function GET({ params }) {
	const { surahNumber } = params;

	// Simulated data retrieval for a specific surah (replace with your data source)
	const surahData = mergedData.quran.sura.find((sura) => sura['sura_no'] === surahNumber);

	if (!surahData) {
		return {
			status: 404,
			body: { error: 'Surah not found' }
		};
	}

	return {
		body: surahData
	};
}

// Endpoint for individual surahs in English translation
export async function GET({ params }) {
	const { surahNumber } = params;

	// Simulated data retrieval for a specific surah's English translation (replace with your data source)
	const surahData = mergedData.quran.sura_en.find((sura) => sura['sura_no'] === surahNumber);

	if (!surahData) {
		return {
			status: 404,
			body: { error: 'Surah not found' }
		};
	}

	return {
		body: surahData
	};
}
