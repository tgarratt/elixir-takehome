import unittest

from unittest.mock import patch

from codele.utils import check_word
from codele.word_list import set_word


class TestCheckWord(unittest.TestCase):

    @patch('codele.word_list.get_word')
    def test_check_word_all_true_for_matching(self, mock_get_word):
        set_word('react')
        mock_get_word.return_value = 'react'
        guess = 'react'
        result = check_word(guess)
        self.assertEqual(result, [1, 1, 1, 1, 1])

    @patch('codele.word_list.get_word')
    def test_check_word_all_false_for_non_matching(self, mock_get_word):
        set_word('chart')
        mock_get_word.return_value = 'chart'
        guess = 'embed'
        result = check_word(guess)
        self.assertEqual(result, [0, 0, 0, 0, 0])

    @patch('codele.word_list.get_word')
    def test_check_word_partial_matching(self, mock_get_word):
        set_word('react')
        mock_get_word.return_value = 'react'
        guess = 'input'
        result = check_word(guess)
        self.assertEqual(result, [0, 0, 0, 0, 1])

    @patch('codele.word_list.get_word')
    def test_check_word_correct_letter_wrong_location(self, mock_get_word):
        set_word('react')
        mock_get_word.return_value = 'react'
        guess = 'merge'
        result = check_word(guess)
        self.assertEqual(result, [0, 1, 2, 0, 2])

if __name__ == '__main__':
    unittest.main()
