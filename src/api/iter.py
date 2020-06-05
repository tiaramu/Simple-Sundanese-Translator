from txtSplitter import *
from bm import *

def iter(text, option):
    arrText = text.split()
    print(arrText)
    dictKamus = splitTxt(option)

    for i in range(len(arrText)):
        if (arrText[i] == "teh"):
            # arrText.remove(arrText[i])
            arrText[i] = ""
        else:
            for each in dictKamus:
                idx = bmMatch(each, arrText[i])
                if (idx != -1): # match 
                    if (arrText[i] == each):
                        print(each)
                        print(dictKamus[each])

                    # ubah
                        arrText[i] = dictKamus[each]
                # text.replace(each, dictKamus[each])
                # print(text)
                # idx = idx

        # else: # match not found
            # do nothing
    return arrText

def arrToString(arr):
    strink = ""

    for each in arr:
        if (each != ""):
            if (each == "saha"):
                strink += "teh "
            strink += (each + " ")
    print(strink)
    return strink

# def fin()

# print(iter("abdi teh ayeuna","sunda"))

# print(arrToString(iter("abdi Tiara bogoh ka anjeun","sunda")))