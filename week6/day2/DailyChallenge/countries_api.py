import requests
import random
from db import connect_to_db

# all_countries = requests.get('https://restcountries.com/v3.1/all').json()
# print(all_countries[0]['name']['common'])
def random_countries(num):
    all_countries = requests.get('https://restcountries.com/v3.1/all').json()

    #create db countries_api
    #connect db
    connection = connect_to_db()
    
    #create table
    query = '''CREATE TABLE IF NOT EXISTS country (
    name VARCHAR(100) NOT NULL,
    capital VARCHAR(100),
    flag TEXT,
    subregion VARCHAR(100),
    population INTEGER);'''

    cursor = connection.cursor()
    cursor.execute(query)
    

    for i in range(num):
        #generate idx
        idx = random.randrange(0, len(all_countries))
        
        #get country by idx
        country = all_countries[idx]

        #save  name, capital, flag, subregion, population in db
        query = f'''
        INSERT INTO country (name, capital, flag, subregion, population)
        VALUES ('{country['name']['common']}', '{country['capital'][0]}', '{country['flag']}', '{country['region']}', '{country['population']}')'''
        cursor.execute(query)

    connection.commit()
    cursor.close()
    connection.close()


random_countries(10)