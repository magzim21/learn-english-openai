import openai
import os
# Initialize the OpenAI API key
openai.api_key = os.getenv("APP_OPENAI_API_KEY")


def generate_sentence(prompt):
  completions = openai.Completion.create(
    engine="text-davinci-002",
    prompt=prompt,
    max_tokens=1024,
    n=1,
    stop=None,
    temperature=0.5,
  )
  message = completions.choices[0].text
  return message


input_list = ["deteriorate", "surge of energy",
              "compelling way", "audacity", "arid", "coastal"]






prompt = "Write a story with these words or phrases:"

for word in input_list:
    prompt += f" {word},"

sentence = generate_sentence(prompt)

print(sentence)
