# ASSIGNMENT 6 — PYTHON SOLUTIONS
# =========================
# PART 1 — PATTERNS
# =========================

# Q1. Solid Square
n = int(input())
for i in range(n):
    for j in range(n):
        print("*", end="")
    print()

# Q2. Solid Rectangle
rows = int(input())
cols = int(input())
for i in range(rows):
    for j in range(cols):
        print("*", end="")
    print()

# Q3. Increasing Star Triangle
n = int(input())
for i in range(1, n + 1):
    for j in range(i):
        print("*", end="")
    print()

# Q4. Increasing Number Triangle
n = int(input())
for i in range(1, n + 1):
    for j in range(1, i + 1):
        print(j, end="")
    print()

# Q5. Repeated Number Triangle
n = int(input())
for i in range(1, n + 1):
    for j in range(i):
        print(i, end="")
    print()

# Q6. Repeated Alphabet Triangle
n = int(input())
for i in range(n):
    for j in range(i + 1):
        print(chr(65 + i), end="")
    print()

# Q7. Alphabet Triangle
n = int(input())
for i in range(1, n + 1):
    for j in range(i):
        print(chr(65 + j), end="")
    print()

# Q8. Continuous Number Triangle
n = int(input())
num = 1
for i in range(1, n + 1):
    for j in range(i):
        print(num, end=" ")
        num += 1
    print()

# Q9. Alternating 0–1 Triangle
n = int(input())
for i in range(n):
    for j in range(i + 1):
        print((i + j + 1) % 2, end=" ")
    print()

# Q10. Decreasing Star Triangle
n = int(input())
for i in range(n, 0, -1):
    for j in range(i):
        print("*", end="")
    print()

# Q11. Decreasing Number Triangle
n = int(input())
for i in range(n, 0, -1):
    for j in range(1, i + 1):
        print(j, end="")
    print()

# Q12. Decreasing Alphabet Triangle
n = int(input())
for i in range(n, 0, -1):
    for j in range(i):
        print(chr(65 + j), end="")
    print()

# Q13. Right-Aligned Half Pyramid
n = int(input())
for i in range(1, n + 1):
    for j in range(n - i):
        print(" ", end="")
    for j in range(i):
        print("*", end="")
    print()

# Q14. Inverted Right-Aligned Half Pyramid
n = int(input())
for i in range(n, 0, -1):
    for j in range(n - i):
        print(" ", end="")
    for j in range(i):
        print("*", end="")
    print()

# Q15. Star Pyramid
n = int(input())
for i in range(1, n + 1):
    for j in range(n - i):
        print(" ", end="")
    for j in range(2 * i - 1):
        print("*", end="")
    print()

# Q16. Inverted Star Pyramid
n = int(input())
for i in range(n, 0, -1):
    for j in range(n - i):
        print(" ", end="")
    for j in range(2 * i - 1):
        print("*", end="")
    print()

# Q17. Solid Diamond
n = int(input())
for i in range(1, n + 1):
    for j in range(n - i):
        print(" ", end="")
    for j in range(2 * i - 1):
        print("*", end="")
    print()
for i in range(n - 1, 0, -1):
    for j in range(n - i):
        print(" ", end="")
    for j in range(2 * i - 1):
        print("*", end="")
    print()

# Q18. Rhombus
n = int(input())
for i in range(n):
    for j in range(n - i - 1):
        print(" ", end="")
    for j in range(n):
        print("*", end="")
    print()

# Q19. Mirrored Number Pattern
n = int(input())
for i in range(1, n + 1):
    for j in range(1, i + 1):
        print(j, end="")
    for j in range(2 * (n - i)):
        print(" ", end="")
    for j in range(i, 0, -1):
        print(j, end="")
    print()

# Q20. Centered Number Pyramid
n = int(input())
for i in range(1, n + 1):
    for j in range(n - i):
        print(" ", end="")
    for j in range(1, i + 1):
        print(j, end=" ")
    print()

# Q21. Palindromic Number Pyramid
n = int(input())
for i in range(1, n + 1):
    for j in range(n - i):
        print(" ", end="")
    for j in range(1, i + 1):
        print(j, end="")
    for j in range(i - 1, 0, -1):
        print(j, end="")
    print()

# Q22. Alphabet Palindrome Pyramid
n = int(input())
for i in range(1, n + 1):
    for j in range(n - i):
        print(" ", end="")
    for j in range(i):
        print(chr(64 + j + 1), end="")
    for j in range(i - 1, 0, -1):
        print(chr(64 + j), end="")
    print()

# Q23. Reverse-Starting Alphabet Triangle
n = int(input())
for i in range(n):
    for j in range(i, n):
        print(chr(65 + j), end=" ")
    print()

# Q24. Increasing and Decreasing Star Triangle
n = int(input())
for i in range(1, n + 1):
    for j in range(i):
        print("*", end="")
    print()
for i in range(n - 1, 0, -1):
    for j in range(i):
        print("*", end="")
    print()

# Q25. Number Hourglass
n = int(input())
for i in range(n, 0, -1):
    for j in range(1, i + 1):
        print(j, end="")
    print()
for i in range(2, n + 1):
    for j in range(1, i + 1):
        print(j, end="")
    print()

# Q26. Alphabet Hourglass
n = int(input())
for i in range(n, 0, -1):
    for j in range(i):
        print(chr(65 + j), end="")
    print()
for i in range(2, n + 1):
    for j in range(i):
        print(chr(65 + j), end="")
    print()

# Q27. Alternating Star and Hash Grid
n = int(input())
for i in range(n):
    for j in range(n):
        if (i + j) % 2 == 0:
            print("*", end="")
        else:
            print("#", end="")
    print()

# Q28. Binary Checkerboard
n = int(input())
for i in range(n):
    for j in range(n):
        print(1 if (i + j) % 2 == 0 else 0, end="")
    print()

# Q29. Multiplication Grid
n = int(input())
for i in range(1, n + 1):
    for j in range(1, n + 1):
        print(i * j, end=" ")
    print()

# Q30. Alternating-Direction Rows
n = int(input())
for i in range(1, n + 1):
    if i % 2 == 1:
        for j in range(1, i + 1):
            print(j, end="")
    else:
        for j in range(i, 0, -1):
            print(j, end="")
    print()

# Q31. Number Diamond
n = int(input())
for i in range(1, n + 1):
    for j in range(n - i):
        print(" ", end="")
    for j in range(1, i + 1):
        print(j, end="")
    for j in range(i - 1, 0, -1):
        print(j, end="")
    print()
for i in range(n - 1, 0, -1):
    for j in range(n - i):
        print(" ", end="")
    for j in range(1, i + 1):
        print(j, end="")
    for j in range(i - 1, 0, -1):
        print(j, end="")
    print()

# Q32. Concentric Number Square
n = int(input())
size = 2 * n - 1
for i in range(size):
    for j in range(size):
        value = max(abs(i - n + 1), abs(j - n + 1)) + 1
        print(value, end=" ")
    print()

# Q33. Hollow Square
n = int(input())
for i in range(n):
    for j in range(n):
        if i == 0 or i == n - 1 or j == 0 or j == n - 1:
            print("*", end="")
        else:
            print(" ", end="")
    print()

# Q34. Hollow Rectangle
rows = int(input())
cols = int(input())
for i in range(rows):
    for j in range(cols):
        if i == 0 or i == rows - 1 or j == 0 or j == cols - 1:
            print("*", end="")
        else:
            print(" ", end="")
    print()

# Q35. Hollow Number Square
n = int(input())
for i in range(n):
    for j in range(n):
        if i == 0 or i == n - 1 or j == 0 or j == n - 1:
            print("1", end="")
        else:
            print("0", end="")
    print()

# Q36. Hollow Right-Angled Triangle
n = int(input())
for i in range(1, n + 1):
    for j in range(i):
        if i == n or j == 0 or j == i - 1:
            print("*", end="")
        else:
            print(" ", end="")
    print()

# Q37. Hollow Inverted Triangle
n = int(input())
for i in range(n, 0, -1):
    for j in range(i):
        if i == n or j == 0 or j == i - 1:
            print("*", end="")
        else:
            print(" ", end="")
    print()

# Q38. Hollow Pyramid
n = int(input())
for i in range(1, n + 1):
    for j in range(n - i):
        print(" ", end="")
    for j in range(2 * i - 1):
        if i == n or j == 0 or j == 2 * i - 2:
            print("*", end="")
        else:
            print(" ", end="")
    print()

# Q39. Hollow Diamond
n = int(input())
for i in range(1, n + 1):
    for j in range(n - i):
        print(" ", end="")
    for j in range(2 * i - 1):
        if j == 0 or j == 2 * i - 2:
            print("*", end="")
        else:
            print(" ", end="")
    print()
for i in range(n - 1, 0, -1):
    for j in range(n - i):
        print(" ", end="")
    for j in range(2 * i - 1):
        if j == 0 or j == 2 * i - 2:
            print("*", end="")
        else:
            print(" ", end="")
    print()

# Q40. X Pattern
n = int(input())
for i in range(n):
    for j in range(n):
        if i == j or i + j == n - 1:
            print("*", end="")
        else:
            print(" ", end="")
    print()

# Q41. Cross Pattern
n = int(input())
for i in range(n):
    for j in range(n):
        if i == j or i + j == n - 1 or i == n // 2:
            print("*", end="")
        else:
            print(" ", end="")
    print()

# Q42. Star Cross with Four Arms
n = int(input())
for i in range(n):
    for j in range(n):
        if i == j or i + j == n - 1:
            print("*", end="")
        else:
            print(" ", end="")
    print()

# Q43. Butterfly Pattern
n = int(input())
for i in range(1, n + 1):
    for j in range(i):
        print("*", end="")
    for j in range(2 * (n - i)):
        print(" ", end="")
    for j in range(i):
        print("*", end="")
    print()
for i in range(n - 1, 0, -1):
    for j in range(i):
        print("*", end="")
    for j in range(2 * (n - i)):
        print(" ", end="")
    for j in range(i):
        print("*", end="")
    print()

# Q44. Hollow Hourglass
n = int(input())
for i in range(n, 0, -1):
    for j in range(n - i):
        print(" ", end="")
    for j in range(2 * i - 1):
        if i == n or j == 0 or j == 2 * i - 2:
            print("*", end="")
        else:
            print(" ", end="")
    print()
for i in range(2, n + 1):
    for j in range(n - i):
        print(" ", end="")
    for j in range(2 * i - 1):
        if i == n or j == 0 or j == 2 * i - 2:
            print("*", end="")
        else:
            print(" ", end="")
    print()

# Q45. Alphabet Diamond
n = int(input())
for i in range(1, n + 1):
    for j in range(n - i):
        print(" ", end="")
    for j in range(i):
        print(chr(65 + j), end="")
    for j in range(i - 2, -1, -1):
        print(chr(65 + j), end="")
    print()
for i in range(n - 1, 0, -1):
    for j in range(n - i):
        print(" ", end="")
    for j in range(i):
        print(chr(65 + j), end="")
    for j in range(i - 2, -1, -1):
        print(chr(65 + j), end="")
    print()

# Q46. Pascal's Triangle
n = int(input())
for i in range(n):
    for j in range(n - i - 1):
        print(" ", end="")
    value = 1
    for j in range(i + 1):
        print(value, end=" ")
        value = value * (i - j) // (j + 1) if j < i else value
    print()

# Q47. Heart Pattern
n = int(input())
for i in range(n // 2, n + 1, 2):
    for j in range(n - i):
        print(" ", end="")
    for j in range(i):
        print("*", end="")
    for j in range(n - i):
        print(" ", end="")
    for j in range(i):
        print("*", end="")
    print()
for i in range(n, 0, -1):
    for j in range(n - i):
        print(" ", end="")
    for j in range(2 * i - 1):
        print("*", end="")
    print()

# Q48. Hollow Heart
n = int(input())
for i in range(n // 2, n + 1, 2):
    for j in range(n - i):
        print(" ", end="")
    for j in range(i):
        if j == 0 or j == i - 1:
            print("*", end="")
        else:
            print(" ", end="")
    for j in range(n - i):
        print(" ", end="")
    for j in range(i):
        if j == 0 or j == i - 1:
            print("*", end="")
        else:
            print(" ", end="")
    print()
for i in range(n, 0, -1):
    for j in range(n - i):
        print(" ", end="")
    for j in range(2 * i - 1):
        if j == 0 or j == 2 * i - 2:
            print("*", end="")
        else:
            print(" ", end="")
    print()

# Q49. Star-and-Space Center Pattern
n = int(input())
for i in range(n):
    for j in range(n):
        if i == j or i + j == n - 1 or i == n // 2:
            print("*", end="")
        else:
            print(" ", end="")
    print()

# Q50. Custom Symbol Square
n = int(input())
symbol = input()
for i in range(n):
    for j in range(n):
        print(symbol, end="")
    print()

# Q51. User-Sized Hollow Rectangle
rows = int(input())
cols = int(input())
for i in range(rows):
    for j in range(cols):
        if i == 0 or i == rows - 1 or j == 0 or j == cols - 1:
            print("*", end="")
        else:
            print(" ", end="")
    print()

# Q52. Create Your Own Pattern
n = int(input())
for i in range(1, n + 1):
    for j in range(i):
        print("#", end="")
    print()

# Q53. Number Increasing Reverse Pyramid
n = int(input())
for i in range(n, 0, -1):
    for j in range(1, i + 1):
        print(j, end=" ")
    print()

# Q54. Square Fill Pattern
n = int(input())
for i in range(n):
    for j in range(n):
        print("*", end=" ")
    print()

# Q55. Left Half Pyramid
n = int(input())
for i in range(1, n + 1):
    for j in range(n - i):
        print(" ", end="")
    for j in range(2 * i - 1):
        print("*", end="")
    print()

# Q56. Reverse Right Half Pyramid
n = int(input())
for i in range(n, 0, -1):
    for j in range(i):
        print("*", end="")
    print()

# Q57. Left Half Pyramid — Increasing
n = int(input())
for i in range(1, n + 1):
    for j in range(i):
        print("*", end="")
    print()

# Q58. Reverse Left Half Pyramid
n = int(input())
for i in range(n, 0, -1):
    for j in range(n - i):
        print(" ", end="")
    for j in range(i):
        print("*", end="")
    print()

# Q59. Triangle Star Pattern
n = int(input())
for i in range(1, n + 1):
    for j in range(n - i):
        print(" ", end="")
    for j in range(i):
        print("*", end="")
    print()

# Q60. Mirror-Image Number Triangle
n = int(input())
for i in range(1, n + 1):
    for j in range(i - 1):
        print(" ", end="")
    for j in range(i, n + 1):
        print(j, end=" ")
    print()

# Q61. Hollow Reverse Triangle
n = int(input())
for i in range(n):
    for j in range(i):
        print(" ", end="")
    for j in range(n - i):
        if i == 0 or j == 0 or j == n - i - 1:
            print("*", end="")
        else:
            print(" ", end="")
    print()

# Q62. Hollow Diamond Pyramid
n = int(input())
for i in range(1, n + 1):
    for j in range(n - i):
        print(" ", end="")
    for j in range(2 * i - 1):
        if j == 0 or j == 2 * i - 2:
            print("*", end="")
        else:
            print(" ", end="")
    print()
for i in range(n - 1, 0, -1):
    for j in range(n - i):
        print(" ", end="")
    for j in range(2 * i - 1):
        if j == 0 or j == 2 * i - 2:
            print("*", end="")
        else:
            print(" ", end="")
    print()

# Q63. Hollow Hourglass Pattern
n = int(input())
for i in range(n):
    for j in range(i):
        print(" ", end="")
    for j in range(2 * (n - i) - 1):
        if j == 0 or j == 2 * (n - i) - 2:
            print("*", end="")
        else:
            print(" ", end="")
    print()
for i in range(1, n):
    for j in range(n - i - 1):
        print(" ", end="")
    for j in range(2 * i + 1):
        if j == 0 or j == 2 * i:
            print("*", end="")
        else:
            print(" ", end="")
    print()

# Q64. Right Pascal's Triangle
n = int(input())
for i in range(1, n + 1):
    for j in range(i):
        print("*", end="")
    print()
for i in range(n - 1, 0, -1):
    for j in range(i):
        print("*", end="")
    print()

# Q65. Pattern Size Challenge
for n in (3, 5, 7):
    print("Pattern for N =", n)
    for i in range(1, n + 1):
        for j in range(i):
            print("*", end="")
        print()


# =========================
# PART 2 — NUMBER AND STRING LOGIC
# =========================

# Q66. Count Digits
n = abs(int(input()))
count = 0
if n == 0:
    count = 1
while n > 0:
    count += 1
    n //= 10
print(count)

# Q67. Sum of Digits
n = abs(int(input()))
total = 0
while n > 0:
    total += n % 10
    n //= 10
print(total)

# Q68. Product of Digits
n = abs(int(input()))
product = 1
if n == 0:
    product = 0
while n > 0:
    product *= n % 10
    n //= 10
print(product)

# Q69. Reverse a Number
n = int(input())
sign = -1 if n < 0 else 1
n = abs(n)
reverse = 0
while n > 0:
    reverse = reverse * 10 + n % 10
    n //= 10
print(sign * reverse)

# Q70. Palindrome Number
n = int(input())
original = n
n = abs(n)
reverse = 0
while n > 0:
    reverse = reverse * 10 + n % 10
    n //= 10
print(original >= 0 and original == reverse)

# Q71. Prime Number
n = int(input())
prime = True
if n < 2:
    prime = False
for i in range(2, n):
    if n % i == 0:
        prime = False
        break
print(prime)

# Q72. Primes from 1 to N
n = int(input())
for i in range(2, n + 1):
    prime = True
    for j in range(2, i):
        if i % j == 0:
            prime = False
            break
    if prime:
        print(i, end=" ")

# Q73. First N Fibonacci Numbers
n = int(input())
a = 0
b = 1
for i in range(n):
    print(a, end=" ")
    a, b = b, a + b

# Q74. GCD of Two Numbers
a = int(input())
b = int(input())
gcd = 1
for i in range(1, min(a, b) + 1):
    if a % i == 0 and b % i == 0:
        gcd = i
print(gcd)

# Q75. LCM of Two Numbers
a = int(input())
b = int(input())
larger = max(a, b)
while True:
    if larger % a == 0 and larger % b == 0:
        print(larger)
        break
    larger += 1

# Q76. Length of a String
s = input()
count = 0
for ch in s:
    count += 1
print(count)

# Q77. Print Each Character
s = input()
for ch in s:
    print(ch)

# Q78. Count Vowels
s = input()
count = 0
for ch in s:
    if ch in "aeiouAEIOU":
        count += 1
print(count)

# Q79. Count Consonants
s = input()
count = 0
for ch in s:
    if ch.isalpha() and ch not in "aeiouAEIOU":
        count += 1
print(count)

# Q80. Convert to Uppercase
s = input()
print(s.upper())

# Q81. Convert to Lowercase
s = input()
print(s.lower())

# Q82. Reverse a String
s = input()
reverse = ""
for ch in s:
    reverse = ch + reverse
print(reverse)

# Q83. Palindrome String
s = input()
reverse = ""
for ch in s:
    reverse = ch + reverse
print(s == reverse)

# Q84. Count a Specific Character
s = input()
count = 0
for ch in s:
    if ch == "a" or ch == "A":
        count += 1
print(count)

# Q85. Remove All Spaces
s = input()
result = ""
for ch in s:
    if ch != " ":
        result += ch
print(result)

# Q86. Count Words
s = input()
words = s.split()
print(len(words))

# Q87. Replace All 'a' with 'e'
s = input()
result = ""
for ch in s:
    if ch == "a":
        result += "e"
    else:
        result += ch
print(result)

# Q88. Check for a Character
s = input()
ch = input()
found = False
for c in s:
    if c == ch:
        found = True
        break
print(found)

# Q89. Compare Two Strings
s1 = input()
s2 = input()
print(s1 == s2)

# Q90. Count Digits in a String
s = input()
count = 0
for ch in s:
    if ch >= "0" and ch <= "9":
        count += 1
print(count)

# Q91. Count Uppercase Letters
s = input()
count = 0
for ch in s:
    if ch >= "A" and ch <= "Z":
        count += 1
print(count)

# Q92. Count Lowercase Letters
s = input()
count = 0
for ch in s:
    if ch >= "a" and ch <= "z":
        count += 1
print(count)

# Q93. Remove All Vowels
s = input()
result = ""
for ch in s:
    if ch not in "aeiouAEIOU":
        result += ch
print(result)

# Q94. Remove All Digits
s = input()
result = ""
for ch in s:
    if not (ch >= "0" and ch <= "9"):
        result += ch
print(result)

# Q95. Toggle Character Case
s = input()
result = ""
for ch in s:
    if ch.islower():
        result += ch.upper()
    elif ch.isupper():
        result += ch.lower()
    else:
        result += ch
print(result)


# =========================
# PART 3 — NESTED-LOOP LOGIC
# =========================

# Q96. Multiplication Tables from 1 to N
n = int(input())
k = int(input())
for i in range(1, n + 1):
    for j in range(1, k + 1):
        print(i, "x", j, "=", i * j)

# Q97. Number and Its Divisors
n = int(input())
for i in range(1, n + 1):
    print(i, end=": ")
    for j in range(1, i + 1):
        if i % j == 0:
            print(j, end=" ")
    print()

# Q98. Count Divisors for Every Number
n = int(input())
for i in range(1, n + 1):
    count = 0
    for j in range(1, i + 1):
        if i % j == 0:
            count += 1
    print(i, ":", count)

# Q99. Perfect Numbers in a Range
n = int(input())
for i in range(2, n + 1):
    total = 0
    for j in range(1, i):
        if i % j == 0:
            total += j
    if total == i:
        print(i)

# Q100. Prime Numbers in a Range
n = int(input())
for i in range(2, n + 1):
    prime = True
    for j in range(2, i):
        if i % j == 0:
            prime = False
            break
    if prime:
        print(i, end=" ")

# Q101. Pairs of Digits with a Target Sum
number = input()
target = int(input())
for i in range(len(number)):
    for j in range(i + 1, len(number)):
        a = int(number[i])
        b = int(number[j])
        if a + b == target:
            print(a, b)

# Q102. Digit Pairs with a Fixed Difference
number = input()
d = int(input())
for i in range(len(number)):
    for j in range(i + 1, len(number)):
        a = int(number[i])
        b = int(number[j])
        if abs(a - b) == d:
            print(a, b)

# Q103. Repeated Digits in a Number
number = input()
for i in range(len(number)):
    repeated = False
    appeared_before = False
    for j in range(i):
        if number[i] == number[j]:
            appeared_before = True
            break
    if not appeared_before:
        for j in range(i + 1, len(number)):
            if number[i] == number[j]:
                repeated = True
                break
    if repeated:
        print(number[i])

# Q104. Count Equal Digit Pairs
number = input()
count = 0
for i in range(len(number)):
    for j in range(i + 1, len(number)):
        if number[i] == number[j]:
            count += 1
print(count)

# Q105. Common Characters in Two Strings
first = input()
second = input()
for i in range(len(first)):
    found = False
    appeared_before = False
    for j in range(i):
        if first[i] == first[j]:
            appeared_before = True
            break
    if not appeared_before:
        for j in range(len(second)):
            if first[i] == second[j]:
                found = True
                break
    if found:
        print(first[i])

# Q106. Check Whether Two Strings Share a Character
first = input()
second = input()
found = False
for i in range(len(first)):
    for j in range(len(second)):
        if first[i] == second[j]:
            found = True
            break
    if found:
        break
print(found)

# Q107. Seating Plan
rows = int(input())
seats = int(input())
for i in range(1, rows + 1):
    print("Row", i, end=": ")
    for j in range(1, seats + 1):
        print(j, end=" ")
    print()

# Q108. Student Marks and Class Total
students = int(input())
tests = int(input())
class_total = 0
for i in range(1, students + 1):
    student_total = 0
    for j in range(1, tests + 1):
        marks = int(input())
        student_total += marks
    print("Student", i, "total:", student_total)
    class_total += student_total
print("Class total:", class_total)

# Q109. Daily Rainfall Summary
days = int(input())
stations = int(input())
for i in range(1, days + 1):
    total = 0
    for j in range(stations):
        rainfall = int(input())
        total += rainfall
    print("Day", i, "total:", total)

# Q110. Largest of Several Numbers in Each Group
groups = int(input())
k = int(input())
for i in range(groups):
    largest = int(input())
    for j in range(k - 1):
        num = int(input())
        if num > largest:
            largest = num
    print(largest)

# Q111. Sum of Numbers by Group and Position
p11 = int(input())
p12 = int(input())
p13 = int(input())
p21 = int(input())
p22 = int(input())
p23 = int(input())
print("Group sums:", p11 + p12 + p13, p21 + p22 + p23)
print("Position sums:", p11 + p21, p12 + p22, p13 + p23)

# Q112. Number Pair Comparison Table
n = int(input())
for i in range(1, n + 1):
    for j in range(1, n + 1):
        print(i + j, end=" ")
    print()

# Q113. Count Zeroes in a Number Sequence
n = int(input())
count = 0
for i in range(n):
    num = int(input())
    if num == 0:
        count += 1
print(count)

# Q114. Print Row and Column Coordinates
r = int(input())
c = int(input())
for i in range(r):
    for j in range(c):
        print("(", i, ", ", j, ")", sep="", end=" ")
    print()

# Q115. Find Every Occurrence of a Substring
text = input()
pattern = input()
for i in range(len(text) - len(pattern) + 1):
    match = True
    for j in range(len(pattern)):
        if text[i + j] != pattern[j]:
            match = False
            break
    if match:
        print(i, end=" ")

# Q116. Count Matching Character Pairs
s = input()
count = 0
for i in range(len(s)):
    for j in range(i + 1, len(s)):
        if s[i] == s[j]:
            count += 1
print(count)

# Q117. Check Whether Two Strings Are Anagrams
first = input()
second = input()
anagram = True
if len(first) != len(second):
    anagram = False
else:
    for i in range(len(first)):
        count1 = 0
        count2 = 0
        for j in range(len(first)):
            if first[i] == first[j]:
                count1 += 1
            if first[i] == second[j]:
                count2 += 1
        if count1 != count2:
            anagram = False
            break
print(anagram)

# Q118. Print Character Frequency Without a Dictionary
s = input()
for i in range(len(s)):
    appeared_before = False
    for j in range(i):
        if s[i] == s[j]:
            appeared_before = True
            break
    if not appeared_before:
        count = 0
        for j in range(len(s)):
            if s[i] == s[j]:
                count += 1
        print(s[i] + ":", count)

# Q119. Find Repeated Adjacent Characters
s = input()
i = 0
while i < len(s):
    count = 1
    while i + count < len(s) and s[i] == s[i + count]:
        count += 1
    if count >= 2:
        print(s[i] + ":", count)
    i += count

# Q120. Compare Two Words Position by Position
first = input()
second = input()
count = 0
for i in range(len(first)):
    if first[i] != second[i]:
        count += 1
print(count)

# Q121. Print All Pythagorean Triples up to N
n = int(input())
for a in range(1, n + 1):
    for b in range(a + 1, n + 1):
        for c in range(b + 1, n + 1):
            if a * a + b * b == c * c:
                print(a, b, c)

# Q122. Find Numbers Equal to the Sum of Their Proper Divisors
n = int(input())
for i in range(2, n + 1):
    total = 0
    for j in range(1, i):
        if i % j == 0:
            total += j
    if total == i:
        print(i)

# Q123. Print Unique Products in Increasing Factor Order
n = int(input())
for i in range(1, n + 1):
    for j in range(i, n + 1):
        product = i * j
        appeared_before = False
        for a in range(1, n + 1):
            for b in range(a, n + 1):
                if a == i and b == j:
                    break
                if a * b == product:
                    appeared_before = True
                    break
            if appeared_before or a == i:
                break
        if not appeared_before:
            print(product, end=" ")

# Q124. Find All Pairs of Prime Numbers with a Given Sum
n = int(input())
for i in range(2, n // 2 + 1):
    prime1 = True
    prime2 = True
    for j in range(2, i):
        if i % j == 0:
            prime1 = False
            break
    other = n - i
    for j in range(2, other):
        if other % j == 0:
            prime2 = False
            break
    if prime1 and prime2:
        print(i, other)

# Q125. Check a Magic-Sum Pattern
n = int(input())
row_total = 0
for i in range(1, n + 1):
    row_sum = 0
    for j in range(1, n + 1):
        value = i + j
        print(value, end=" ")
        row_sum += value
    print()
    if i == 1:
        print("Row sums:", end=" ")
    print(row_sum, end=" ")

# Q126. Count Peaks in a Number Sequence
n = int(input())
count = 0
if n >= 3:
    previous = int(input())
    current = int(input())
    for i in range(n - 2):
        next_num = int(input())
        if current > previous and current > next_num:
            count += 1
        previous = current
        current = next_num
else:
    for i in range(n):
        num = int(input())
print(count)

# Q127. Find Repeated Digit Sums
number = input()
repeated = False
for i in range(len(number)):
    for j in range(i + 1, len(number)):
        first_sum = int(number[i]) + int(number[j])
        for a in range(len(number)):
            for b in range(a + 1, len(number)):
                if a == i and b == j:
                    continue
                if first_sum == int(number[a]) + int(number[b]):
                    repeated = True
                    break
            if repeated:
                break
        if repeated:
            break
    if repeated:
        break
if repeated:
    print("Repeated pair sums exist")
else:
    print("No repeated pair sums")

# Q128. Number Pattern from Row and Column
n = int(input())
for i in range(1, n + 1):
    for j in range(1, n + 1):
        print(abs(i - j), end=" ")
    print()

# Q129. Compare Digits with Their Neighbours
number = input()
count = 0
for i in range(1, len(number) - 1):
    if number[i] > number[i - 1] and number[i] > number[i + 1]:
        count += 1
print(count)

# Q130. Count Increasing Digit Pairs
number = input()
count = 0
for i in range(len(number)):
    for j in range(i + 1, len(number)):
        if number[i] < number[j]:
            count += 1
print(count)

# Q131. Character Frequency Compression Without a Dictionary
s = input()
result = ""
for i in range(len(s)):
    appeared_before = False
    for j in range(i):
        if s[i] == s[j]:
            appeared_before = True
            break
    if not appeared_before:
        count = 0
        for j in range(len(s)):
            if s[i] == s[j]:
                count += 1
        result += s[i] + str(count)
print(result)
