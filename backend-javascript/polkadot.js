const { ApiPromise, WsProvider } = require('@polkadot/api');
const program = require('commander');

async function showBlock(opts) {
    let ws = opts.ws
    ws = ws?ws:"wss://rpc.polkadot.io"
    const provider = new WsProvider(ws);
    const api = await ApiPromise.create({ provider });
    const chain = api.rpc.chain;
    let r = {}
    if (opts.latest) {
        r = await chain.getBlock();
    } else if (opts.height) {
        let hash = await chain.getBlockHash(opts.height);
        r = await chain.getBlock(hash);
    } else if (opts.hash) {
        r = await chain.getBlock(opts.hash);
    } else {
        r = await chain.getBlock();
    }
    return r;
}

program.option('-l, --latest', 'latest block info')
    .option('-h, --hash <hash>', 'block hash')
    .option('-n, --height <number>', 'block height')
    .option('--ws <wsurl>', 'WsProvider URL')

program.parse(process.argv);


showBlock(program.opts()).then(b => {
        console.log(JSON.stringify(b.block, null, 2));
    }).catch(console.error).finally(() => process.exit());
