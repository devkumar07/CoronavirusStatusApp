imageName=covid-19latest1
containerName=covid-19latest
all:
	docker build -t $(imageName) -f Dockerfile  .

	echo Delete old container...
	docker rm -f $(containerName)

	echo Run new container...
	docker run -d -p 5000:5000 --name $(containerName) $(imageName)