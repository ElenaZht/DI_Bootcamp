#Using the requests and time modules, create a function 
# which returns the amount of time it takes a webpage 
# to load (how long it takes for a complete response to a request).
# Test your code with multiple sites such as google, ynet, imdb, et
import requests
import time

def request_handler(url):
    result = requests.get(url, timeout=5)
    return result

def request_timer(url):
    star_time = time.time()
    request_handler(url)
    end_time = time.time()
    return round((end_time - star_time), 2)


def main():
    sites = {
        'google': 'https://www.google.com',
        'ynet': 'https://www.ynet.co.il',
        'stack': ' https://stackoverflow.com',
        'reddit': 'https://www.reddit.com', 
        'amazone': 'https://www.amazon.com'
        }
    main_results = {}
    
    for site in sites:
        try:
            time = request_timer(sites[site])
            main_results[site] = time

        except requests.exceptions.Timeout:
            print("The request timed out")
        
    for res in main_results.keys():
        print(f"for {res} it took {main_results[res]}sec to responce")

main()