
# def my_func(a, b):
#     a = a+1
#     b = b+1
#     return a + b

# print(my_func(2, 2))

# print(type(1) == "<class 'int'>")
# print(print)

# name = input('Input here: ')

# print(name)


# print('anton'.upper())

# def my_func(str):
#     print(str)


# my_func('Anton')

# my_func = 10

# print(id(my_func))


# a = 10
# b = a
# print(id(a) == id(b))

# a = 12

# print(id(a))

# a = """
# 1asda
# 2asda
# 3asdasda
# """
# print(type(a))
# print(id(a))


# str = "Anton"

# print(len(str))
# print(str[0])
# print(str[1])
# print(str[2])
# print(str[3])
# print(str[4])
# print(str[0:3])
# print(str[2:])
# print(str[:4])

# str = "Anton likes playing football"
# str = "Anton"

# print(str.count(''))
# print(len(str))


# a = "22a"
# b = int(a)

# print(type(b))


# print(10 + 4.5)
# list = [1, 'abc', True, 7.5, {'a': 13}]

# del list[2]

# print(list)
# print(len(list))

# list.reverse()
# print(list)

# list2 = [13, 2.5]

# list.extend(list2)
# print(list)


# list1 = [1, 'abc', True, 7.5, {'a': 13}]
# list2 = [13, 2.5]

# list_common = list1 + list2
# list_common2 = list1.__add__(list2)
# print(list_common)
# print(list_common2)

# dic = {'a': 1, 'b': 2}

# dic['c'] = 'Anton'
# del dic['b']

# key = 'c'

# print(dic[key])

# print(dic.get('b'))

# if dic.get('c'):
#     print("Ok!")
# else:
#     print('None key')

# a = None

# print(type(a))


# dic = {}

# i = 1
# while i <= 3:
#     print('_' + str(i) + "_")
#     key = input("key: ")
#     val = input("val: ")
#     dic[key] = val
#     i += 1

# tup1 = (1, 2, 3, 4)
# tup2 = (5, 6, 7)

# tup = tup1 + tup2

# print(tup)

# my_set = {1, 2, 3, 4, 5, 6, 7, 8, 9}
# my_set2 = {2, 3, 4, 5}

# # my_set.add(4)
# # all_sets = my_set.union(my_set2)
# all_sets = my_set | my_set2

# # print(all_sets)
# # print(my_set)


# # intr = my_set.intersection(my_set2)
# intr = my_set & my_set2
# # print(intr)
# res = my_set2.issubset(my_set)
# print(res)

# set1 = {1, 2, 3, 4}

# set1.add(5)

# set2 = {3, 4, 5, 6, 7}

# new_set = set1 & set2

# new_list = list(new_set)

# print(new_list)


# my_range = range(10, 20, 2)

# print(list(my_range))


# dic = {
#     'a': 1,
#     'b': 'Anton',
#     'arr': ['Anton']
# }

# dic2 = dic.copy()

# dic2['arr'].append("Lex")

# print(dic)

# dic2 = dic

# dic['c'] = 13

# print(dic)
# print(id(dic))
# print(id(dic2))

def merge_list_to_dict(list1, list2):
    return dict(zip(list1, list2))


list1 = ['a', 'b', 'c']
list2 = [1, 2, 3]


res = merge_list_to_dict(list1, list2)
print(res)
