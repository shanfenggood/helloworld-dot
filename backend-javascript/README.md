# help

```bash
node polkadot.js --help


Usage: polkadot [options]

Options:
  -l, --latest           latest block info
  -h, --hash <hash>      block hash
  -n, --height <number>  block height
  --ws <wsurl>           WsProvider URL
  --help                 display help for command
```
# example

```bash
node polkadot.js -h 0xf9458a04eb8bff12afc4064b4d327e5a59c8384a84dc2b180e5601b16359125d

{
  "header": {
    "parentHash": "0x2e900cf4982480aea5599986a7545f87eb1f0946ab8a420e2b01fdfd78faed8b",
    "number": 2089759,
    "stateRoot": "0x400e3909ee957f3929e13d151a8f209a7b62bf6f944808035020b74fa0c5a32a",
    "extrinsicsRoot": "0xbafd31bf5831d4b38910eebd2608d9ba3d9159dad364fdffe1a457b92b10bae9",
    "digest": {
      "logs": [
        {
          "PreRuntime": [
            1161969986,
            "0x03130000003ae5ec0f00000000044d865afa0f01664a36961f2ecb23250c07e9120e19f7ad31de2ee6f17c62293c334f49e3592462fc3280f34604cca117b026266e89c4ed8c4bd39c1848930a3730b0063e710912a0c0126683b53a0ebec164d1ce4d3a78322b9c2b68789004"
          ]
        },
        {
          "Seal": [
            1161969986,
            "0x7403f13f2a96611f5249e3f810279e6100a046f7eabfb787ddf0f3b193aa761e9c40ff35dce4b45d2d626e579775c007814b6b8e1a1f03d64294924a8e83ce81"
          ]
        }
      ]
    }
  },
  "extrinsics": [
    "0x280403000b607f3c407501",
    "0x1c040a00728c7f00"
  ]
}
```
