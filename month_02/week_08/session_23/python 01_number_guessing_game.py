import random
print("Hello Player! Welcome to your number guessing game.")
def play_game():
    """This is the general function of number guessing game"""
    print("1.Easy (1-10)")
    print("2.Medium (1-50)")
    print("3.Hard (1-100)")
    print("4.Extreme (1-500)") 
    while True:
        difficulty = input("""Please choose your difficulty!.""").lower() 
        if difficulty == '1':
            max_number = 10
            max_guess = 5
            break
        elif difficulty == '2':
            max_number = 50
            max_guess = 10
            break
        elif difficulty == "3":
            max_number = 100
            max_guess = 20
            break
        elif difficulty == "4":
            max_number = 500
            max_guess = 50
            break
        else:
            print("Invalid number.")
    
    secret_number = random.randint (1, max_number)
    guess_count = 0
    print(f"\n I thought about number between 1-{max_number}.")
    print(f"\n You have {max_guess} left.Use it wisely!")
    while True:
        guess = input("Enter your guess:")
        guess = int(guess)
        guess_count += 1
        guesses_left = max_guess - guess_count

