const { Client } = require('node-scp')
const fs = require('fs')

const remoteConfig = {
  host: example.example.jp,
  port: 22,
  username: user_name,
  password: password,
  privateKey: fs.readFileSync('C:\\Users\\user_name\\.ssh\\id_rsa'),
  passphrase: passphrase,
}

const pathConfig = {
  localPath: './to',
  remotePath: '/home/user_name/public_html/path/to'
}

const localPath = pathConfig.localPath;
const remotePath = pathConfig.remotePath;

async function download () {
  try {
    const client = await Client(remoteConfig)
    await client.downloadDir(remotePath, localPath)
    client.close()
  } catch (e) {
    console.log(e)
  }
}

download()

async function upload () {
  try {
    const client = await Client(remoteConfig)
    await client.uploadDir(localPath, remotePath)
    client.close()
  } catch (e) {
    console.log(e)
  }
}

upload ()