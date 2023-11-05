# wwww.sohaibbenbouzid.com V3: Production Grade

## Getting Started

The website is fully dockerized you can run it with or without Docker

### A [No Docker]: Run development

**Requirements**:

    - node

1- Install dependencies

```bash
    cd portfolio && yarn
```

2- Run server

```bash
cd portfolio && yarn dev
```

### B [Docker] : Run development

**Requirements**:

    - Docker
    - Docker compose

1- launch with docker compose

```bash
- cd portfolio && docker-compose up -d
```

### A [No Docker]: Run production

```bash
    cd portfolio # <---- change to main directory
```

```bash
    yarn build  # <---- build website assets
```

```bash
    yarn start # <--- serve website
```

### B [Docker] : Run production on localhost

```bash
    cd portfolio    # <---- change to main directory
```

```bash
    docker-compose -f ./docker-compose.prod.yml up  -p 3000:3000 -d  # <---- build and run on port 3000
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### B [Docker] : Serve production on a VPS with Nginx and LetsEncrypt Certbot

**Requirements**:

    - VPS with linux
    - Docker

1- Move deployment folder to your server /home/{USER}/deployment

```bash
    docker compose up
```

2- Generate a fake certificate for your **domain.com**

```bash
    openssl req -x509 -nodes -newkey rsa:4096 -days 1 -keyout 'privkey.pem' -out 'fullchain.pem' -subj '/CN=localhost'"
```

3- Move the fake certificate to /home/{USER}/deployment/certbot/conf/live/{domain.com}/

4- Update `/deployment/.env` with your

```bash
    DOCKER_HUB_REPOSITORY=
    CERTBOT_EMAIL=
    CERTBOT_DOMAIN=
```

5- Run the server with docker compose

```bash
    docker compose up
```

#### Setup CI / CD

in this section we will setup CI/CD on each commit on master to build and push our frontend image into our docker repository on DockerHub and deploy our server through ssh.

the script is available at `deployment.yml` we only need to set few things

**Requirements**:

    - Docker Hub account

1- Add the your docker hub username variables to your secrets in github secrets

```bash
    DOCKERHUB_USERNAME      # <----  docker hub username
    DOCKERHUB_TOKEN         # <----  docker hub token
    HOST                    # <----  VPS ip address
    USERNAME                # <----  VPS user eg: root, prod ...etc
    SSH_PRIVATE_KEY         # <----  VPS private key to access through ssh
```

2- On each commit to the master branch github actions will build and push the frontend and redeploy on the server.

### B [Docker] : Renew SSL certificate

1- On server run

```
    sudo certbot renew
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
