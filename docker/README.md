# Docker's Kata

### Steps

	- Install docker.
```sh
# curl -fsSL https://get.docker.com/ | sh
```
	- Get an example image
```sh
# docker pull httpd
```
	- Run your first instance
```sh
# docker run -it --rm --name my-apache-app -v "$PWD":/usr/local/apache2/htdocs/ httpd
```

### Exercises

	* Try to install the PHP image and connect it with your apache2 instance.
	* Create an example index.php and use your containers for view it.
	* Install mysql using the same launch process.

### Bonus

	* Install a hello world proyect using a CMS or a framework.
