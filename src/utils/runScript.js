const nrc = require('node-run-cmd')
const fs = require('fs')
const path = require('path')

const dataCallback = (data) => {
    console.log(data)
}

const runScript = (lang, code, callback) => {

    const scriptPath = path.join(__dirname, '../../scripts')
    const options = { cwd: scriptPath, onData: callback}
    if (lang === 'python') {
        fs.writeFileSync(`${scriptPath}/test.py`, code)
        nrc.run('python3 test.py', options)
    }
}

module.exports = runScript