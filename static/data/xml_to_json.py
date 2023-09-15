import xmltodict
import json

# Specify the input and output file paths
input_xml_file = "en.sahih.xml"  # Replace with your XML file's path
output_json_file = "en.sahih.json"  # Replace with your desired JSON file's path
#print(input_xml_file, output_json_file)

# Read XML data from the input file
with open(input_xml_file, 'r') as xml_file:
    xml_data = xml_file.read()

# Convert XML to JSON
json_data = json.dumps(xmltodict.parse(xml_data), indent=4)

# Write the JSON data to the output file
with open(output_json_file, 'w') as json_file:
    json_file.write(json_data)

print("Conversion complete. JSON data saved to", output_json_file)

