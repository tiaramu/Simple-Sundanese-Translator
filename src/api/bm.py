def preLO(text, length, pattern): # return an array
    # fill the value of Last Occurrence in loArray
    # for all the text's characters 
    # that occur in the pattern
    # has -1 value if not occur

    # assumption no character occurs
    loDict = {}

    # run through the string
    # updates the loArray value of a character
    # everytime the character was found
    x = 0
    while (x < length):
        loDict[text[x]] = x
        x += 1
    
    return loDict

def bmMatch(text, pattern): # return int
    # find the index of the first appearence
    # of the pattern found in text
    # using Boyer-Moore algorithm
    # if not found, return -1

    lengthOfText = len(text)
    lengthOfPattern = len(pattern)

    # define the last occurence of the pattern's characters
    # the index defines the character
    # the value defines the last occurence
    loDict = preLO(text, lengthOfText, pattern)

    # index of the text that match with the pattern
    # if pattern not found, the return value is -1
    idx = -1
    i = lengthOfPattern - 1 # index of the text
    j = lengthOfPattern - 1 # index of the pattern
    found = False # match found/no

    while ((i < lengthOfText) and not(found)):
        # decrease the i and j value until mismatch
        # or until pattern found its match 
        if (text[i] == pattern[j]):
            # j reach the beginning of pattern
            # match found
            if (j == 0):
                idx = i
                found = True

            # characters match
            else:
                i -= 1
                j -= 1

        # mismatch found
        else:
            # find the text[i] last occurence
            if text[i] in loDict:
                lastOcc = loDict[text[i]] # DI SINI
            else:
                lastOcc = -1

            # change i value
            # 1st case:
            # x appears before pattern[j]
            # i = i + lengthOfPattern - (lastOcc + 1)
            # 2st case:
            # x appears after pattern[j]
            # i = i + lengthOfPattern - j
            # 3st case:
            # x doesnt appear in pattern
            # i = i + lengthOfPattern
            # (lastOcc + 1 = -1 + 1 = 0)
            i += (lengthOfPattern - min(j, lastOcc + 1))

            # change j value
            # repeat from the end of the pattern
            j = lengthOfPattern - 1

    return idx