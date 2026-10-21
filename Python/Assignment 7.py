# =======================================
# Type 2: Basic While Loop Problems
# =======================================

# --------
#   21
# --------
n = int(input())
i = 1
while i <= n:
    print(i)
    i += 1
# --------
#   22
# --------
n = int(input())
while n >= 1:
    print(n)
    n -= 1 
# --------
#   23
# --------
n = int(input())
i = 2
while i <= n:
    print(i)
    i += 2 
# --------
#   24
# --------
n = int(input())
i = 1
while i <= n:
    print(i)
    i += 2
  
# --------
#   25
# --------
k = int(input())
n = int(input())
multiple = k
while multiple <= n:
    print(multiple)
    multiple += k
  
# --------
#   26
# --------

  n = int(input())
i = 1
while i <= 10:
    print(f"{n} x {i} = {n * i}")
    i += 1
  
# --------
#   27
# --------
start = int(input())
step = int(input())
i = 1
value = start
while i <= 5:
    print(value)
    value += step
    i += 1
  
# --------
#   28
# --------
n = int(input())
i = 1
total = 0
while i <= n:
    total += i
    i += 1
print(total)
  
# --------
#   29
# --------
n = int(input())
i = 2
total = 0
while i <= n:
    total += i
    i += 2
print(total)
  
# --------
#   30
# --------

n = int(input())
i = 1
total = 0
while i <= n:
    total += i
    i += 2
print(total)

# --------
#   31
# --------
price = int(input())
quantity = int(input())
i = 0
total = 0
while i < quantity:
    total += price
    i += 1
print(total)
  
# --------
#   32
# --------
daily_saving = int(input())
days = int(input())
i = 0
total = 0
while i < days:
    total += daily_saving
    i += 1
print(total)
  
# --------
#   33
# --------
base = int(input())
power = int(input())
i = 0
result = 1
while i < power:
    result *= base
    i += 1
print(result)
  
# --------
#   34
# --------
n = int(input())
i = 1
factorial = 1
while i <= n:
    factorial *= i
    i += 1
print(factorial)
  
# --------
#   35
# --------
start = int(input())
end = int(input())
total = 0
while start <= end:
    total += start
    start += 1
print(total)
  
# --------
#   36
# --------
n = int(input())
while n >= 2:
    print(n)
    n -= 2
  
# --------
#   37
# --------
n = int(input())
while n > 0:
    n //= 2
    print(n)
  
# --------
#   38
# --------
n = int(input())
steps = 0
while n > 0:
    n -= 3
    steps += 1
print(steps)
  
# --------
#   39
# --------
saved = int(input())
daily_amount = int(input())
target = int(input())
days = 0
while saved < target:
    saved += daily_amount
    days += 1
print(days)
  
# --------
#   40
# --------
start = int(input())
step = int(input())
while start >= 0:
    print(start)
    start -= step


# ============================================
# Type 3: Factorial and Number & Digit Logic
# ============================================
  
# --------
#   41
# --------
n = int(input())
count = 0
if n == 0:
    count = 1
while n > 0:
    count += 1
    n //= 10
print(count)
  
# --------
#   42
# --------
n = int(input())
total = 0
while n > 0:
    total += n % 10
    n //= 10
print(total)
  
# --------
#   43
# --------
n = int(input())
reversed_number = 0
while n > 0:
    digit = n % 10
    reversed_number = reversed_number * 10 + digit
    n //= 10
print(reversed_number)
# --------
#   44
# --------
n = int(input())
original = n
product = 1
while n > 0:
    product *= n % 10
    n //= 10
if original == 0:
    product = 0
print(product)
  
# --------
#   45
# --------
n = int(input())
if n == 0:
    print(0)
while n > 0:
    print(n % 10)
    n //= 10
  
# --------
#   46
# --------
n = int(input())
last_digit = n % 10
first_digit = n
while first_digit >= 10:
    first_digit //= 10
print(f"First digit: {first_digit}")
print(f"Last digit: {last_digit}")
  
# --------
#   47
# --------
n = int(input())
count = 0
if n == 0:
    count = 1
while n > 0:
    if (n % 10) % 2 == 0:
        count += 1
    n //= 10
print(count)
# --------
#   48
# --------
n = int(input())
count = 0
while n > 0:
    if (n % 10) % 2 == 1:
        count += 1
    n //= 10
print(count)
# --------
#   49
# --------
n = int(input())
total = 0
while n > 0:
    digit = n % 10
    if digit % 2 == 0:
        total += digit
    n //= 10
print(total)
  
# --------
#   50
# --------
n = int(input())
largest = 0
while n > 0:
    digit = n % 10
    if digit > largest:
        largest = digit
    n //= 10
print(largest)
  
# --------
#   51
# --------
n = int(input())
smallest = 9
if n == 0:
    smallest = 0
while n > 0:
    digit = n % 10
    if digit < smallest:
        smallest = digit
    n //= 10
print(smallest)
# --------
#   52
# --------
n = int(input())
original = n
reversed_number = 0
while n > 0:
    reversed_number = reversed_number * 10 + n % 10
    n //= 10
if original == reversed_number:
    print("Palindrome")
else:
    print("Not Palindrome")
  
# --------
#   53
# --------
n = int(input())
d = int(input())
count = 0
if n == 0 and d == 0:
    count = 1
while n > 0:
    if n % 10 == d:
        count += 1
    n //= 10
print(count)
  
# --------
#   54
# --------
n = int(input())
last_digit = n % 10
all_same = True
while n > 0:
    if n % 10 != last_digit:
        all_same = False
    n //= 10
if all_same:
    print("Yes")
else:
    print("No")
# --------
#   55
# --------
n = int(input())
last_digit = n % 10
first_digit = 0
digit_sum = 0
while n > 0:
    digit = n % 10
    digit_sum += digit
    first_digit = digit
    n //= 10
first_last_sum = first_digit + last_digit
middle_sum = digit_sum - first_last_sum
print(f"First and last digits sum: {first_last_sum}")
print(f"Middle digits sum: {middle_sum}")
  
# --------
#   56
# --------
n = int(input())
i = 1
factorial = 1
while i <= n:
    factorial *= i
    print(factorial)
    i += 1
  
# --------
#   57
# --------
n = int(input())
i = 1
factorial = 1
while factorial < n:
    i += 1
    factorial *= i
if factorial == n:
    print("Yes")
else:
    print("No")
# --------
#   58
# --------
n = int(input())
i = 1
factorial = 1
largest = 1
while factorial <= n:
    largest = factorial
    i += 1
    factorial *= i
print(largest)

#====================================================================
# Type 4: Output Guessing — Nested while Loops, break, and continue
#====================================================================


# --------
#   59
# --------
# 1 1
# 1 2
# 1 3
# 2 1
# 2 2
# 2 3

# --------
# 60
# --------
# 1 2 
# 1 2 
# 1 2 

# --------
# 61
# --------

# * 
# * * 
# * * * 

# --------
# 62
# --------

# 1 2 3 
# 2 3 
# 3 

# --------
# 63
# --------

# 1 2 End
# 1 2 End
# 1 2 End

# --------
# 64
# --------

# 2
# 3
# 3
# 4
# Finished

# --------
# 65
# --------

# A 1
# A 2
# B 1
# B 2
# B 3

# --------
# 66
# --------

# 1 1
# 1 2

# --------
# 67
# --------

# 11
# 33

# --------
# 68
# --------

# X
# 1 X
# 1 2 X

# --------
# 69
# --------

# 1 1
# 1 2
# 2 1
# 2 2
# 3 1
# 3 2

# --------
# 70
# --------

# 1 2 |
# 1 2 |

# --------
# 71
# --------

# 1 1
# 1 2
# 2 1
# 2 2

# --------
# 72
# --------

# 1 1
# Next row
# 2 1
# Next row
# 3 1
# Next row

# --------
# 73
# --------

# 1 1
# 1 3
# 1 4
# 2 1
# 2 3
# 2 4

# --------
# 74
# --------

# 2 4 5 6 

# --------
# 75
# --------

# 1 3 Row
# 1 3 Row
# 1 3 Row

# --------
# 76
# --------

# 1 2
# 1 3
# 2 1
# 2 3
# 3 1
# 3 2

# --------
# 77
# --------

# 1 1
# 1 3
# 2 1
# 2 3

# --------
# 78
# --------

# 1 3 4 End
# 2 6 8 End
# 3 9 End
# Done
