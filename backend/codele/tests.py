from django.urls import reverse
from django.test import TestCase

from .word_list import words

# Create your tests here.
class RandomWordViewTestCase(TestCase):

    def test_random_word_view(self):
        # Call the view
        response = self.client.get(reverse('random_word'))

        # Check if the response is successful
        self.assertEqual(response.status_code, 200)

        # Check if the response contains a word in JSON format
        data = response.json()
        self.assertIn('word', data)
        self.assertIn(data['word'], words)