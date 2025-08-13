num1 = float(input("Give me your first number:"))
num2 = float(input("Give me your second number"))

print("1.Sum")
print("2.Subtraction")
print("3.Multiplication")
print("4.Division")

choice = input("Your choice (1/2/3/4)")

if choice == '1':
    result = num1 + num2
    print(f"Your answer is {num1} + {num2} = {result}")
elif choice == '2':
    result = num1 - num2
    print(f"Your answer is {num1} - {num2} = {result}")
elif choice =='3':
    result = num1 * num2
    print(f"Your answer is {num1} * {num2} = {result}")
elif choice =='4':
    if num2 !=0:
        result = num1 / num2
        print(f"Your answer is {num1} / {num2} = {result}")
    else:
        print(f"Oops the number can't divided byt zero")
else:
    print("Wrong choice.Choose between 1-4!.")

