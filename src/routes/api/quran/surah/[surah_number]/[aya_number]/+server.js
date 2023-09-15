import { json, error } from '@sveltejs/kit';
import quranData from '/static/data/merged_data.json'; // Replace with the path to your merged data JSON file

//  Endpoint 2: Get Specific Surah aya
// export async function GET({ params }) {
// 	try {
// 		const aya_number = params.aya_number;
// 		const aya = quranData.filter((s) => s.aya_no === parseInt(aya_number));
// 		if (!aya) {
// 			return error(404, 'Surah not found');
// 		}
// 		return json(aya);
// 	} catch (err) {
// 		return error(500, 'Internal Server Error');
// 	}
// }

// Endpoint 3: Get Specific Ayah Data
export async function GET({ params }) {
	try {
		// const { sura_no, aya_no } = params;
		const sura_no = params.surah_number;
		const aya_no = params.aya_number;
		console.log(params);
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
