import { json, error } from '@sveltejs/kit';
import quranData from '/static/data/merged_data.json'; // Replace with the path to your merged data JSON file

// Endpoint 3: Get Specific Ayah Data
export async function GET({ params }) {
	try {
		const sura_no = params.surah_number;
		const aya_no = params.aya_number;
		const surah = quranData.filter((s) => s.sura_no === parseInt(sura_no));
		if (!surah) {
			return error(404, 'Surah not found');
		}
		const ayah = surah.find((a) => a.aya_no === parseInt(aya_no));
		if (!ayah) {
			return error(404, 'Ayah not found');
		}
		return json({ ayah });
	} catch (err) {
		return error(500, 'Internal Server Error');
	}
}
