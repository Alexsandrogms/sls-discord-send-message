# About

**_sls-discord-send-message_** - And a serverless function that sends messages to discord through its api, is using the AWS environment for operation

## Channel Configuration in Discord

Step 01: Create a channel <br/>
Step 02: After you have created, enter the channel settings <br/>
Step 03: Access the Integrations option is add a new webhooks, copy the WebHooks URL. <br/>
Step 04: Add this URL to the "serverless.env.yml" file that is inside the repository that will be cloned in the tutorial below.

## Construction

You will need an account on the [node](https://discord.com/) with the developer mode option enabled in order to use the api.

Note: For the deploy to work in an automated way, you must have an aws account and have aws cli configured on your machine with your credentials

```Bash
# Repository

git clone https://github.com/alexsandrogms/sls-discord-send-message.git.

# Directory

$ cd sls-discord-send-message/

# Install dependencies

$ yarn install # or npm install

# Note: Create a file named "serverless.env.yml" paste in variable "discord_webhooks_url" the value copied in the channel creation tutorial

# Run application

$ yarn start # npm start

```

## Author.

😎 Alexsandro Gomes.

- GitHub: [@alexsandrogms] (https://github.com/alexsandrogms)
- LinkedIn: [@alexsandrogms] (https://linkedin.com/in/alexsandrogomes)

## Contribute

Contributions, problems and requests for new features are welcome!
Did you like the project? Take one ⭐️!
