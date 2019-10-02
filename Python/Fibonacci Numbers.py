#https://www.hackerrank.com/challenges/ctci-fibonacci-numbers/problem

def fibonacci(n):
    if n == 1:
        return 1
    if n == 2:
        return 1
    elif n > 2:
        return fibonacci(n - 1) + fibonacci(n - 2)

n = int(input())
print(fibonacci(n))
