# 🤖 Anbu-bot: Your Automated DevOps Companion 🤖
Anbu-bot is a Discord bot designed to keep you up-to-date with all of your DevOps needs. 
With automated webhooks written in Typescript, JavaScript and NodeJS
it allows you to track changes in your GitHub, Jenkins, and CI/CD pipeline.
We're also looking into playing with web sockets more in the future and will be adding support 
for sites that have access to an API which emits event listeners or webhook support.

<p align="center">
  <img src="https://i.imgur.com/HSyjoN0.png" alt="Image of a flying bird" width="400" height="400" style="border-radius: 50%; border: 5px solid #888; box-shadow: 0 0 10px 5px #ccc; background-image: radial-gradient(circle at 25% 25%, #888 10%, #111 95%);">
</p>


## Features 📊

* Automatically receive notifications when changes are made to your GitHub, Jenkins, or CI/CD pipeline 🔔
* Filter notifications by repository, branch, or event 🔎
* Customizable settings to choose what types of notifications you want to receive 🔧
* Compatible with all major Discord clients 💻

# DevOps Tools 
These will eventually receive LIVE / REAL TIME push notification support and functions
TODO TECH TO ADD: 

| Tool                                                                                            | Description          |
| ----------------------------------------------------------------------------------------------- | -------------------: |
| :octocat: [GitHub](https://github.com/)                                                         | Source Control       |
| :gear: [Git](https://git-scm.com/)                                                             | Source Control       |
| :rocket: [Ansible](https://www.ansible.com/)                                                    | Configuration Management |
| :computer: [Jenkins](https://www.jenkins.io/)                                                   | Continuous Integration |
| :whale2: [Docker](https://www.docker.com/)                                                      | Containerization |
| :alarm_clock: [Nagios](https://www.nagios.org/)                                                 | Monitoring |
| :bar_chart: [ELK Stack](https://www.elastic.co/elk-stack)                                       | Logging |
| :robot: [Selenium](https://www.seleniumhq.org/)                                                 | Test Automation |
| :cloud: [Terraform](https://www.terraform.io/)                                                  | Infrastructure-as-Code |
| :key: [Confluence](https://www.atlassian.com/software/confluence)                               | Collaboration  |
| :globe_with_meridians: [Jira](https://www.atlassian.com/software/jira)                           | Project Management  |
| :books: [Bitbucket](https://bitbucket.org/)                                                     | Source Control  |
| :file_folder: [GitLab](https://about.gitlab.com/)                                                | Source Control  |
| :sunny: [AWS](https://aws.amazon.com/)                                                          | Cloud Computing  |
| :cloud: [Azure](https://azure.microsoft.com/en-us/)                                              | Cloud Computing  |


## Setup 🛠

To get started with Anbu-bot, simply follow these steps:

1. Invite Anbu-bot to your Discord server 🤝
2. Configure the settings for your desired repositories, branches, and events 🧩
3. Set up webhooks to enable automated notifications 🤖

## Support 💬

We're dedicated to providing excellent support for Anbu-bot. If you have any questions, please reach out to me at Francisco@anbu.com.

## Development 💻

To get Anbu-bot up and running, you'll need to run the command `tsc --init` to create a `tsconfig.json` file and then run `tsc -w` to start the watcher, so the Typescript will be automatically compiled to JavaScript when a change is made. Then, you'll need to make sure you're passing in the environment variable correctly `DISCORD_TOKEN=""`.  🔧

The token in this repo is exposed on purpose to test the time response for GitHub token-scanning algorithims to detect a security risk, leak or integrity issue. 
