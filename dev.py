# program to print yes if number of consecutive 1's is odd and number of consecutive 0's is even else print no


def check(num):
    count1 = 0
    count0 = 0
    for i in num:
        if i == "1":

            if count0 % 2 != 0:
                return "no"
            else:
                count0 = 0

            count1 += 1
        else:

            if count1 % 2 == 0 and count1 != 0:
                return "no"
            else:
                count1 = 0

            count0 += 1

    if count1 % 2 == 0 and count1 != 0:
        return "no"

    if count0 % 2 != 0:
        return "no"

    return "yes"


i = input()
print(check(i))