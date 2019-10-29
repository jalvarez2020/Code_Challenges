#!/bin/python3
#https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
import math
import os
import random
import re
import sys

# Complete the sockMerchant function below.
def sockMerchant(n, ar):
    sock_drawer = set()
    counter = 0
    for i in range(n):
        if ar[i] in sock_drawer:
            sock_drawer.remove(ar[i])
            counter += 1
        else:
            sock_drawer.add(ar[i])
    return counter

    
        
            

