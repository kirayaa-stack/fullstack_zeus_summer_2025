# Object Oriented Programming in Python
# Python class
# attribute of class
# body - integer
# height - float
#  name - str
# skin_color - str
# is_single - boolean

class Human:
    body = 1
    height = 1.75
    eyes = 2
    name = 'Human'
    skin_color = 'biege'
    is_single = True

kira = Human()
print(kira)
print(kira.name)
kira.name = 'Kira'
print(kira.name)

# Init method
# class method = function


# Cat gedeg class uusged tuunii nas bolon species attributetai bolgo
class Cat:
    species = "Felis catuis"
    age = 1
    
english_fur = Cat()
egyptian_cat = Cat()
print(english_fur.age)
print(egyptian_cat.age)
english_fur.age = 3
egyptian_cat.age = 5
print(english_fur.age)
print(egyptian_cat.age)

# Car gedeg class uusged duguinii too,brand,engine,style etc..

class Car:
    wheels = 4
    brand = 'toyota'
    engine = 8
    style = 'red'
mercedes_benz = Car()
mercedes_benz.style = 'silver'
Lexus_570 = Car()
Lexus_570.wheels = 6
print(f'The car brand is {mercedes_benz.brand} and has the style of {mercedes_benz.style}')
print(Lexus_570.wheels)
Lexus_570.style = 'yellow reddish'
Lexus_570.wheels = 4
print(f'The car brand is {Lexus_570.brand} and has the style of {Lexus_570.style}')


# animal gedeg class uusgen tuun dee species = Animalus, age, is_mammal = False
# gedeg attribute bolgood constructor ashiglah deerh utgud der nemed
# heden hultei bas eats_plant gedg boolean utga
# gadnaas avdag bolooroi
# tged wolf, elephant gedeg 2 turlin object uusged zohih parametriig
#ugc uusgeerei.Hevlej utgudig harularai

class Animal:
    species = 'Animalus'
    is_mammal = False
    def __init__(self , age, legs, eats_plant):
        self.age = age
        self.eats_plant = eats_plant
        self.legs = legs
    def __str__(self):
        return f"""
    The animal is a mammal {self.is_mammal}, {self.age} y.o.It eats plant {self.eats_plant} and has {self.legs}
    """
trapped_wolf = Animal(5, False, 3)
trapped_wolf.is_mammal = True
print(trapped_wolf)

elephant = Animal(4, True , 4)
elephant.is_mammal = True
print(elephant)


# EX01 

class Book:
    def __init__(self, title, author,pages):
        self.title = title
        self.author = author
        self.pages = pages
    def __str__(self):
        return f"""
        This books is {self.title}, and the author is well known {self.author}.Also the book has {self.pages} pages.
        """
my_book = Book ("The Hobbit", "J.J.R Tolkien", 310)
print(my_book)

# EX02

class Student:
   student_count = 0
   def __init__(self, name ,grade):
       self.name = name 
       self.grade = grade
   def __str__(self):
    return f""" 
    The student name is {self.name} ,and their grade is {self.grade}
    """
student1 = Student("Alice", "10th")
student2 = Student("Bob", "11th")
student3 = Student("Charlie", "9th")
print(student1)
print(student2)
print(student3)

       