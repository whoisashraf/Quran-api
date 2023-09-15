import json

# Load the data from hafsData_v2-0.json
with open("hafsData_v2-0.json", "r", encoding="utf-8") as hafs_file:
    hafs_data = json.load(hafs_file)

# Load the data from en.sahih.json
with open("en.sahih.json", "r", encoding="utf-8") as sahih_file:
    sahih_data = json.load(sahih_file)

# Create a dictionary to map ayahs in sahih_data by sura and aya number
sahih_ayah_map = {}
for sura in sahih_data["quran"]["sura"]:
    sura_no = int(sura["index"])
    for ayah in sura["aya"]:
        aya_no = int(ayah["index"])
        sahih_ayah_map[(sura_no, aya_no)] = ayah["text"]

# Merge the data, replacing "aya_text_emlaey" with "aya_text_en"
merged_data = []
for hafs_aya in hafs_data:
    sura_no = int(hafs_aya["sura_no"])
    aya_no = int(hafs_aya["aya_no"])
    aya_text_ar = hafs_aya["aya_text"]
    aya_text_en = sahih_ayah_map.get((sura_no, aya_no), "")

    # Create a new dictionary with both "aya_text_ar" and "aya_text_en"
    merged_aya = {
        "id": hafs_aya["id"],
        "jozz": hafs_aya["jozz"],
        "page": hafs_aya["page"],
        "sura_no": hafs_aya["sura_no"],
        "sura_name_en": hafs_aya["sura_name_en"],
        "sura_name_ar": hafs_aya["sura_name_ar"],
        "line_start": hafs_aya["line_start"],
        "line_end": hafs_aya["line_end"],
        "aya_no": hafs_aya["aya_no"],
        "aya_text_ar": aya_text_ar,
        "aya_text_en": aya_text_en,
    }

    merged_data.append(merged_aya)

# Save the merged data to a new file
with open("merged_data.json", "w", encoding="utf-8") as merged_file:
    json.dump(merged_data, merged_file, ensure_ascii=False, indent=4)

print("Merged data saved to merged_data.json")

