FROM python:alpine3.7 
COPY . /app
WORKDIR /app
RUN pip3 install -r requirements.txt 
RUN pip3 install -r requirements1.txt 
EXPOSE 5001 
ENTRYPOINT [ "python" ] 
CMD [ "app.py" ] 