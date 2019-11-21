# Step By Step Build Guide

This is an step by step guide for Mac OS users to setting up this project.

### Step 1： Install Node and npm

This guide highly recommends you install Homebrew for install other packages like Node.js and MongoDB, to install Homebrew, please open your terminal then run:

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

you can run below to check did you install Homebrew successfully

```
brew update
```

After instal Homebrew successfully, you can install Node.js now, please run

```
brew install node
```

then please run

```
brew install npm
```

After that ,you can run

```
node -v
```

and

```
npm -v
```

to check your node and npm version, which also means you installed them successfully.

# Step 2： Build the project at localhost

Download and unzip this project then change your terminal direcotry to the project.

Then install the necessary dependencies of this project

```
npm install
```

at the project root directory, this may takes a few mins.

then you can run the project in the localhost

```
npm start
```

Normally, everything will be good, and you may see below information at your terminal:

```
------------------------------------------------
[watch-client] Local:             http://localhost:4000
[watch-client] On Your Network:   http://192.168.0.201:4000
------------------------------------------------
```

then you can go to Chrome and type `localhost:4000` to view the project.
