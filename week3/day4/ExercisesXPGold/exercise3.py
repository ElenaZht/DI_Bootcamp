# Use the regular expression module to extract 
# numbers from a string.
import re

def extract_num(string):
    pattern = r"-?\d+(?:\.\d+)?"
    nums = re.findall(pattern, string)
    return nums


print(extract_num('fhdioo 0 gkjh2 jfj 6'))
print(extract_num('fh4.5dioo -10gkjh2 jfj 6'))