// src/routes/api/quran/+server.js

import { json, error } from '@sveltejs/kit';
import quranData from '../../../static/data/merged_data.json'; // Replace with the path to your merged data JSON file

// Endpoint 1: Get the Whole Quran Data
export async function GET() {
	try {
		const { quran } = quranData;
		return json({ quran });
	} catch (err) {
		return error(500, 'Internal Server Error');
	}
}

// Endpoint 2: Get Specific Surah Data
export async function get({ params }) {
	try {
		const { sura_no } = params;
		const surah = quranData.quran.find((s) => s.sura_no === parseInt(sura_no));
		if (!surah) {
			return error(404, 'Surah not found');
		}
		return json({ surah });
	} catch (err) {
		return error(500, 'Internal Server Error');
	}
}

// Endpoint 3: Get Specific Ayah Data
export async function getSpecificAyah({ params }) {
	try {
		const { sura_no, aya_no } = params;
		const surah = quranData.quran.find((s) => s.sura_no === parseInt(sura_no));
		if (!surah) {
			return error(404, 'Surah not found');
		}
		const ayah = surah.ayahs.find((a) => a.aya_no === parseInt(aya_no));
		if (!ayah) {
			return error(404, 'Ayah not found');
		}
		return json({ ayah });
	} catch (err) {
		return error(500, 'Internal Server Error');
	}
}
