
# Q1. Display a Welcome Message

def display_welcome():
    print("================================")
    print("   Welcome to Python Programming")
    print("       Let's learn Functions!")
    print("================================")

display_welcome()
display_welcome()
display_welcome()


# Q2. Student Introduction Card

def display_student_card(name, age, course):
    print("+--------------------------------+")
    print("|         STUDENT CARD           |")
    print("+--------------------------------+")
    print("| Name  :", name)
    print("| Age   :", age)
    print("| Course:", course)
    print("+--------------------------------+")

display_student_card("Rahul", 18, "B.Tech")
display_student_card("Priya", 19, "BCA")
display_student_card("Aman", 20, "B.Sc")


# Q3. Square, Cube, and Double

def calculate_square(number):
    print("Square:", number * number)

def calculate_cube(number):
    print("Cube:", number * number * number)

def calculate_double(number):
    print("Double:", number * 2)

calculate_square(4)
calculate_cube(4)
calculate_double(4)


# Q4. Simple Interest Calculator

def calculate_simple_interest(principal, rate, time):
    si = (principal * rate * time) / 100
    amount = principal + si

    print("Principal:", principal)
    print("Rate:", str(rate) + "%")
    print("Time:", time, "years")
    print("Simple Interest:", si)
    print("Total Amount:", amount)

calculate_simple_interest(5000, 5, 2)


# Q5. Even or Odd Checker

def check_even_odd(number):
    if number % 2 == 0:
        print(number, "is an Even number.")
    else:
        print(number, "is an Odd number.")

check_even_odd(12)
check_even_odd(7)
check_even_odd(0)
check_even_odd(-5)


# Q6. Find the Larger Number

def find_largest(number_1, number_2):
    if number_1 > number_2:
        return number_1
    else:
        return number_2

result = find_largest(25, 40)
print("Largest number:", result)


# Q7. Temperature Converter

def celsius_to_fahrenheit(celsius):
    return (9 / 5) * celsius + 32

def fahrenheit_to_celsius(fahrenheit):
    return (5 / 9) * (fahrenheit - 32)

fahrenheit = celsius_to_fahrenheit(0)
print(fahrenheit)

celsius = fahrenheit_to_celsius(98.6)
print(celsius)


# Q8. Difference Between print() and return

def calculate_sum_1(a, b):
    print(a + b)

def calculate_sum_2(a, b):
    return a + b

result_1 = calculate_sum_1(10, 20)
result_2 = calculate_sum_2(10, 20)

print("Result from first function:", result_1)
print("Result from second function:", result_2)

# The second function returns a value.
# The first variable contains None because print() only displays a value.
# The value displayed by print() cannot be directly stored as the return value.


# Q9. Total Marks and Percentage

def calculate_result(mark_1, mark_2, mark_3, mark_4, mark_5):
    total = mark_1 + mark_2 + mark_3 + mark_4 + mark_5
    percentage = (total / 500) * 100
    return total, percentage

total, percentage = calculate_result(75, 80, 65, 90, 70)

print("Total Marks:", total)
print("Percentage:", percentage, "%")


# Q10. Rectangle Area and Perimeter

def rectangle_details(length, breadth):
    area = length * breadth
    perimeter = 2 * (length + breadth)
    return area, perimeter

area, perimeter = rectangle_details(10, 5)

print("Area:", area)
print("Perimeter:", perimeter)


# Q11. Personalized Greeting

def greet_user(name, message="Welcome to Python!"):
    print("Hello", name + "!")
    print(message)
    print()

greet_user("Rahul", "Good Morning!")
greet_user("Priya")
greet_user("Aman", message="Keep Learning!")
greet_user("Neha")


# Q12. Electricity Bill Calculator

def calculate_electricity_bill(units, rate=7):
    bill = units * rate
    return bill

bill_1 = calculate_electricity_bill(100)
bill_2 = calculate_electricity_bill(100, 8)
bill_3 = calculate_electricity_bill(rate=6, units=100)

print("Bill 1:", bill_1)
print("Bill 2:", bill_2)
print("Bill 3:", bill_3)


# Q13. Employee Salary Calculator

def calculate_salary(basic_salary, bonus=2000, deduction=500):
    final_salary = basic_salary + bonus - deduction
    return final_salary

salary_1 = calculate_salary(25000)
salary_2 = calculate_salary(25000, 3000)
salary_3 = calculate_salary(25000, 3000, 1000)
salary_4 = calculate_salary(basic_salary=25000, deduction=800, bonus=4000)

print(salary_1)
print(salary_2)
print(salary_3)
print(salary_4)

# Default parameters must be placed after parameters without default values.


# Q14. Number Digit Counter

def count_digits(number):
    number = abs(number)
    count = 0

    if number == 0:
        return 1

    while number > 0:
        number = number // 10
        count += 1

    return count

count = count_digits(4826)
print("Total digits:", count)


# Q15. Sum of Digits

def sum_of_digits(number):
    number = abs(number)
    total = 0

    while number > 0:
        digit = number % 10
        total += digit
        number = number // 10

    return total

result = sum_of_digits(482)
print("Sum of digits:", result)


# Q16. Reverse a Number

def reverse_number(number):
    number = abs(number)
    reverse = 0

    while number > 0:
        digit = number % 10
        reverse = reverse * 10 + digit
        number = number // 10

    return reverse

result = reverse_number(4826)
print("Reversed number:", result)


# Q17. Palindrome Number Checker

def is_palindrome(number):
    if number < 0:
        return False

    original = number
    reverse = 0

    while number > 0:
        digit = number % 10
        reverse = reverse * 10 + digit
        number = number // 10

    return original == reverse

result = is_palindrome(121)
print(result)


# Q18. Prime Number Checker

def is_prime(number):
    if number <= 1:
        return False

    for i in range(2, number):
        if number % i == 0:
            return False

    return True

result = is_prime(17)
print(result)


# Q19. Display Prime Numbers in a Range

def display_primes(start, end):
    count = 0

    print("Prime numbers:", end=" ")

    for number in range(start, end + 1):
        if number > 1:
            prime = True

            for i in range(2, number):
                if number % i == 0:
                    prime = False
                    break

            if prime:
                print(number, end=" ")
                count += 1

    if count == 0:
        print("No prime numbers", end="")

    print()
    print("Total prime numbers:", count)

display_primes(10, 30)


# Q20. Student Result Report

def display_student_report(name, mark_1, mark_2, mark_3):
    total = mark_1 + mark_2 + mark_3
    percentage = (total / 300) * 100

    if percentage >= 40:
        result = "PASS"
    else:
        result = "FAIL"

    print("================================")
    print("         STUDENT REPORT")
    print("================================")
    print("Name       :", name)
    print("Subject 1  :", mark_1)
    print("Subject 2  :", mark_2)
    print("Subject 3  :", mark_3)
    print("--------------------------------")
    print("Total      :", total, "/ 300")
    print("Percentage :", round(percentage, 2), "%")
    print("Result     :", result)
    print("================================")

display_student_report("Rahul", 75, 80, 65)
display_student_report("Priya", 35, 45, 40)
display_student_report("Aman", 20, 30, 25)
display_student_report("Neha", 100, 100, 100)
