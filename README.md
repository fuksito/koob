# Demo

  [http://blloon-fuksito.s3.amazonaws.com/index.html](http://blloon-fuksito.s3.amazonaws.com/index.html)

# Installing

Install Yeoman:

    npm install -g yo
    npm install -g grunt-cli
    npm install -g bower

Install dependencies:

    gem install compass
    npm install
    bower install

Start server:

    grunt serve

# Deploying

  To deploy first create file aws-keys.json, it can be done by coping the example file:

      cp aws-keys.json{example,}

  To deploy run command:

      grunt deploy