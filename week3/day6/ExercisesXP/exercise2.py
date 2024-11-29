# Access the nested “salary” key from the JSON-string above.
# Add a key called “birth_date” to the JSON-string at the same 
# level as the “name” key.
# Save the dictionary as JSON to a file.

import json
sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

dict = json.loads(sampleJson)
print('salary is ', dict['company']['employee']['payable']['salary'])
dict['company']['employee']['birthday'] = '5th of october 1995'
print(dict)
json_data = json.dumps(dict, indent=3)
with open('data.json', 'w') as json_file:
    json_file.write(json_data)