import { json, error } from '@sveltejs/kit';
import quranData from '/static/data/merged_data.json'; // Replace with the path to your merged data JSON file

// Endpoint 1: Get the Whole Quran Data
export async function GET() {
	try {
		return json(quranData);
	} catch (err) {
		return error(500, 'Internal Server Error');
	}
}
