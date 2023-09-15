import { json, error } from '@sveltejs/kit';
import quranData from '/static/data/merged_data.json'; // Replace with the path to your merged data JSON file

//  Endpoint 2: Get Specific Surah Data
export async function GET({ params }) {
	try {
		const sura_number = params.surah_number;
		const surah = quranData.filter((s) => s.sura_no === parseInt(sura_number));
		if (!surah) {
			return error(404, 'Surah not found');
		}
		return json(surah);
	} catch (err) {
		return error(500, 'Internal Server Error');
	}
}
