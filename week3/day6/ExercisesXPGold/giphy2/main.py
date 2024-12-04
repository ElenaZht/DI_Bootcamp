# Our API KEY is hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My

#enter search term
#get term from giphy
#if not found get trending gif and message
import requests 

def giphy_getter(term):
    api_key = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'
    limit = 5
    url = f'https://api.giphy.com/v1/gifs/search?q={term}&api_key={api_key}&limit={limit}'
    response = requests.get(url)

    if response.status_code != 200:
        print("sorry, there is an error")
        return []

    data = response.json()['data']

    if len(data) > 0:  #data has content
        print(f'this is what i found by term {term}:\n')
        for res in data:
            print(res['images']['downsized_large']['url'])

        return data

    else:                #nothibg was found, data == []
        limit = 10
        url = f'https://api.giphy.com/v1/gifs/trending?&api_key={api_key}&limit={limit}'

        response = requests.get(url)
        
        if response.status_code != 200:
            print("sorry, there is an error")
            return []
        
        data = response.json()['data']
        print(f'nothing found on term {term}, but here are 10 trending today:\n')
        if data == []:
            print("no trending for today")
            return []

        for res in data:
            print(res['images']['downsized_large']['url'])
        
        return data

        


def main():
    term = input("enter a search term: ")
    giphy_getter(term)


main()
