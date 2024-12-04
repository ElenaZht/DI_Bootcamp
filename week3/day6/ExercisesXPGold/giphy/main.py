# Our API KEY is hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
# Fetch the giphs from the Gif URL provided above.

# Use f-strings and variables to build the URL string we’re using for the fetch.
# If the status code is 200 return the result as a JSON object.
# Only return gifs which have a height bigger then 100.
# Return the length of the object you received in the previous question.
# Only return the first 10 gifs. Hint: In the Giphy Documentation, 
# check out the relevant Request Parameters.
import requests 

def bring_gifs(api_key, search_term):
    url = f'https://api.giphy.com/v1/gifs/search?q={search_term}&api_key={api_key}&limit=10'
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        gifs = data['data']
    
        # result = [x for x in gifs if int(x['images']['downsized_large']['height']) > 100]
        result = gifs[0:10]
        return result

    else:
        print(f'Error: {response.status_code}')
        return []


api_key = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'
search_term = 'hilarious'
gifs = bring_gifs(api_key, search_term)
print(len(gifs))







