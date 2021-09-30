FROM python:3.9

WORKDIR /app
COPY chshGame/requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY chshGame .
EXPOSE 8000
CMD [ "python3", "manage.py", "runserver", "0.0.0.0:8000"]

