from .word_list import get_word


def check_word(guess: str) -> list[int]:
    word = get_word()
    result = []

    # map over gussed word 
    for index, letter in enumerate(guess):
        # if right letter and place then return 1
        if word[index] == letter:
            result.append(1)
        # if right letter wrong place then return 2
        elif letter in word:
            result.append(2)
        else:
        # if none of the above then return 0
            result.append(0)
    return result
