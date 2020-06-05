def splitTxt(init):
    # is: bahasa asal (sunda/indo)
    # fs: dictionary kamus bahasa asal
    filename = ""
    if (init == "sunda"):
        filename = "../../../doc/sunda.txt"
    else: # init == "indo"
        filename = "../../../doc/indonesia.txt"
    file = open(filename,"r")
    arrOfSentences = {}
    for line in file:
        perline = line.split("=")

        arrOfSentences[perline[0].strip()] = perline[1].strip()
    return arrOfSentences