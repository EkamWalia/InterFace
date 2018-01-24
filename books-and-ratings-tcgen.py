from random import *

def write_testcase(inputfile , outputfile , x , y):
    input_cases = []
    output_cases = []

    m = randint(1 , x)
    print("Numbers of books " , m)

    if m%6 == 0:
        ratings = [str(randint(-y , 0)) for i in range(m)]
    else:
        ratings = [str(randint(-y , y)) for i in range(m)]
    input_cases.append(str(m) + '\n' + ' '.join(ratings) + '\n')

    sum = 0
    pos = []
    for i in range(0 , len(ratings)):
        j = int(ratings[i])
        if j > 0:
             sum += j
             pos.append(str(i))

    if len(pos) == 0:
        output_cases.append("-1\n")
    else:
        output_cases.append(str(sum) + '\n' + ' '.join(pos))
    inputfile.writelines(input_cases)
    outputfile.writelines(output_cases)

def generator():
    c = [ 1000 , 10000 , 100000 ]
    d = [ 1000 , 100000 , 10000000 ]
    count = 0
    i = 0
    b = [6 , 5 , 5]
    for i in range(3):
            for z in range(b[i]):
                print("Generatingg case: " , count)
                inputfilename = "input" + str(count) + ".txt"
                outputfilename = "output" + str(count) + ".txt"
                inputfile = open(inputfilename , "w")
                outputfile = open(outputfilename , "w")

                write_testcase(inputfile , outputfile, c[i] , d[i])

                inputfile.close()
                outputfile.close()
                count += 1

if __name__ == "__main__":
    generator()
