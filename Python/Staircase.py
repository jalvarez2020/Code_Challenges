#https://www.hackerrank.com/challenges/staircase/problem

import os
import sys

#
# Complete the staircase function below.
#
def staircase(n):
    hashbrown = "#"
    for i in range(1, n + 1):
        print(( hashbrown * i).rjust(n))
    #
    # Write your code here.
    #

if __name__ == '__main__':
    n = int(input())

    staircase(n)

