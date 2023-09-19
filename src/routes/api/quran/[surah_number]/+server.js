import { json, error } from '@sveltejs/kit';
import quranData from '/static/data/merged_data.json'; // Replace with the path to your merged data JSON file

//  Endpoint 2: Get Specific Surah Data
export async function GET({ params }) {
	try {
		const sura_number = params.surah_number;
		// console.log(parseInt(sura_number))
		if (isNaN(parseInt(sura_number))) {
			return error(404, 'Surah not found');
		}
		if (sura_number < 1 || sura_number > 114) {
			return error(404, 'Surah not found');
		}
		const surah = quranData.filter((s) => s.sura_no === parseInt(sura_number));
		if (!surah) {
			return error(404, 'Surah not found');
		}
		return json(surah);
	} catch (err) {
		return error(500, 'Internal Server Error');
	}
}
