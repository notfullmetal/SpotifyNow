FROM python:3.8-slim-bullseye

WORKDIR /app

COPY requirements.txt ./
RUN python3 -m pip install -r requirements.txt --no-cache-dir

COPY . .

CMD [ "python3","spotifynow.py" ]