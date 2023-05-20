#!/bin/sh

echo ">> Building contract"

near-sdk-js build src/contract.js build/hello_near.wasm
