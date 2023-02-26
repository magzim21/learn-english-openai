import openai
import os
# Initialize the OpenAI API key
from markupsafe import escape

from flask import Flask
from flask import url_for, send_from_directory


app = Flask(__name__, static_folder='./learn-english-frontend/build/static/')



openai.api_key = os.getenv("APP_OPENAI_API_KEY")
# print(os.getenv("APP_OPENAI_API_KEY"))

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





# @app.route("/")
# def main():
#     input_list = ["deteriorate", "surge of energy",
#                   "compelling way", "audacity", "arid", "coastal"]
#     prompt = "Write a very short story with these words or phrases:"
#     for word in input_list:
#       prompt += f" {word},"


#     return f"<p>Hello, World!</p><p>{escape(generate_sentence(prompt))}</p>"


# # @app.route("/<path:subpath>")
# @app.route("/")
# def static():
#     return f'Subpath {escape(subpath)}'

@app.route("/")
def main():
   return send_from_directory('./learn-english-frontend/build', 'index.html')


@app.route('/<path:path>')
def send_static( path):
    # print(path)
    return send_from_directory('./learn-english-frontend/build', path)
