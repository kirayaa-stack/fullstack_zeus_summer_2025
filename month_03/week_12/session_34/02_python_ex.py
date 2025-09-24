#ex1
def add_numbers(a,b):
    return a + b
result = add_numbers(10, 5)
print(f"Result is: {result}")

#ex2
my_list = [1, 9, 3, 22, 15]
print(f"Жагсаалтын хамгийн их утга:: {max(my_list)}")

#############

def find_max(my_list):
    max_value = my_list[0]
    for num in my_list:
        if num > max_value:
            max_value = num
    return max_value
my_list = [1, 9, 3, 22, 15]
max_value = find_max(my_list)
print(f"Жагсаалтын хамгийн их утга: {max_value}")

#ex3
def get_string_length(a):
    return len(a)

length = get_string_length("Сайн байна уу?")
print(f"The length is: {length}")

#ex4
def filter_even_numbers(numbers):
    even_numbers = []
    for num in numbers:
        if num % 2 == 0:
            even_numbers.append(num)
    return even_numbers
original_list = [1, 2, 3, 4, 5, 6, 7, 8]
evens = filter_even_numbers(original_list)
print(f"Тэгш тоонууд: {evens}")

#ex5
def total_characters(string_list):
    total_count = 0
    for string in string_list:
        total_count += len(string)
    return total_count
words = ["Python", "бол", "хялбар"]
total_len = total_characters(words)
print(f"Нийт тэмдэгтийн тоо: {total_len}")

#ex6

#ex7
def find_movies_by_year(movies: list[dict], year: int) -> list[str]:
    return [movie['title'] for movie in movies if movie.get('year') == year]

movie_list = [
{'title': 'Inception', 'year': 2010},
{'title': 'The Dark Knight', 'year': 2008},
{'title': 'Interstellar', 'year': 2014},
{'title': 'The Prestige', 'year': 2006}
]
movies_2010 = find_movies_by_year(movie_list, 2010)
print(f"2010 онд гарсан кинонууд: {movies_2010}")


#ex8
def calculate_average(scores):
    return sum(scores) / len(scores)

scores = [80, 95, 88, 79, 92]
average_score = calculate_average(scores)
print(f"Дундаж оноо: {average_score}")

#ex9
def count_word_frequency(text):
    words = text.split()
    word_counts = {}
    for word in words:
        if word in word_counts:
            word_counts[word] += 1
        else:
            word_counts[word] = 1
    return word_counts
text = "Энэ бол дасгал мөн энэ бол сайн дасгал"
word_counts = count_word_frequency(text)
print(f"Үгийн давтамж: {word_counts}")