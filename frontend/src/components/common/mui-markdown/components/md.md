#### Deploy a Strapi Backend integrated with Cloudinary as an image provider and PostgreSql database

in this article we will deploy production readey backend using Strapi as our headless CMS in 5 mins. yes you read it right in less then 5mins.
before we start you will need to install the following requirements

###### Requirements

download and install each of these

- [Nodejs](https://nodejs.org/en/download/) runtime
- [yarn](https://classic.yarnpkg.com/) package manager
- [heroku CLI](https://wwww.heroku.com/)

you will also need

- [cloudinary account](https://cloudinary.com/)
- [heroku account](https://wwww.heroku.com/)

now that we are all setup lets get into it

##### Step One

###### Clone the repository and intall dependencies

clone the boilerplate repository

<SyntaxHighlighter language="bash">
git clone https://github.com/Souhaib-Benbouzid/strapi-cloudinary-postgresql-heroku-example.git
</SyntaxHighlighter>

install all the dependencies

<SyntaxHighlighter language="bash" >
 cd strapi-cloudinary-postgre-heroku-example && yarn
</SyntaxHighlighter>

###### setup environment variables cloudinary & postgre in heroku

###### Login into your heroku account

<SyntaxHighlighter language="bash" >
heroku login
</SyntaxHighlighter>

###### Create a heroku app

<SyntaxHighlighter language="bash" >
heroku create my-app
</SyntaxHighlighter>

###### Create a hobby postgre database

<SyntaxHighlighter language="bash" >
heroku addons:create heroku-postgresql:hobby-dev
</SyntaxHighlighter>

<SyntaxHighlighter language="bash" >
heroku git:remote -a your-heroku-app-name
</SyntaxHighlighter>

###### display your database URI

<SyntaxHighlighter language="bash" >
heroku config
</SyntaxHighlighter>

This should print something like this:

DATABASE_URL=postgres://username:password@host:port/database_name

i.e:
DATABASE_URL=postgres://ebitxebvixeeqd:dc59b16dedb3a1eef84d4999sb4baf@ec2-50-37-231-192.compute-2.amazonaws.com:5432/d516fp1u21ph7b.

###### split the DATABASE_URL into the following

<SyntaxHighlighter language="bash" >
heroku config:set DATABASE_USERNAME=ebitxebvixeeqd
heroku config:set DATABASE_PASSWORD=dc59b16dedb3a1eef84d4999sb4baf
heroku config:set DATABASE_HOST=ec2-50-37-231-192.compute-2.amazonaws.com
heroku config:set DATABASE_PORT=5432
heroku config:set DATABASE_NAME=d516fp1u21ph7b
heroku config:set CLOUDINARY_NAME=YOUR_CLOUDINARY_NAME
heroku config:set CLOUDINARY_KEY=YOUR_CLOUDINARY_KEY
heroku config:set CLOUDINARY_SECRET=YOUR_CLOUDINARY_SECRET_KEY
</SyntaxHighlighter>

##### Step Two

###### Making changes to your project

first you need to build the strapi UI

<SyntaxHighlighter language="bash" >
yarn build
</SyntaxHighlighter>

run development server

<SyntaxHighlighter language="bash" >
yarn develop
</SyntaxHighlighter>

##### Step Three

###### deploy to heroku

remove origin repository and push your edits

<SyntaxHighlighter language="bash" >
git remote remove origin
git add .
git commit -m "initial commit"
git push heroku master
</SyntaxHighlighter>

##### Congratulations your Strapi-API is deployed

###### Important: open your app and setup your api

<SyntaxHighlighter language="bash" >
heroku open
</SyntaxHighlighter>

created by [sohaib-benbouzid](https://wwww.sohaibbenbouzid.com)
