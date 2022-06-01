const { Bee } = require('@ethersphere/bee-js')
const crypto = require('crypto')

async function main() {
    const privateKey = '9a902a97ac5c136dbd763cd8ac4da1cc48bb6650dc3e704afa7dfee06579e342'
    const postageBatchId = process.env.POSTAGE_BATCH_ID
    const identifier = crypto.randomBytes(32)
    const data = new Uint8Array([0])
    const bee = new Bee('http://localhost:1633')
    const socWriter = bee.makeSOCWriter(privateKey)
    const ref = await socWriter.upload(postageBatchId, identifier, data, { pin: true })
    await bee.unpin(ref)
}

main().catch(console.error)
