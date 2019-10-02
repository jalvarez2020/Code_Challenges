#https://www.hackerrank.com/challenges/diagonal-difference/problem

#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'diagonalDifference' function below.
#
# The function is expected to return an INTEGER.
# The function accepts 2D_INTEGER_ARRAY arr as parameter.
#

def diagonalDifference(arr):
    left = []
    right = []
    sumLtIndex = 0
    sumRtIndex = 0
    rowIndex = 0
    rtIndex = len(arr[0]) - 1
    
    while rowIndex != len(arr):
        left.append(arr[rowIndex][rowIndex])
        right.append(arr[rowIndex][rtIndex])
        sumLtIndex += left[rowIndex]
        sumRtIndex += right[rowIndex]
        rowIndex += 1
        rtIndex -= 1
    diff = abs(sumRtIndex - sumLtIndex)     
    return diff

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input().strip())

    arr = []

    for _ in range(n):
        arr.append(list(map(int, input().rstrip().split())))

    result = diagonalDifference(arr)

    fptr.write(str(result) + '\n')

    fptr.close()
