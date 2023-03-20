#!/bin/bash

# get item name
read -p 'Enter item name: ' itemName

curl -X POST -d '{
    "itemName" : $itemName,
    "images" : [
        "https://cdn.shopify.com/s/files/1/0412/0133/6481/products/FW22LOGOPUFFYJACKET-BROWN_1296x.jpg?v=1675797870",
        "https://cdn.shopify.com/s/files/1/0412/0133/6481/products/FW22LOGOPUFFYJACKET-YELLOW_1296x.jpg?v=1675797872",
        "https://cdn.shopify.com/s/files/1/0412/0133/6481/products/FW22LOGOPUFFYJACKET-MINT_1296x.jpg?v=1675797872"
    ],
    "type" : ["new", "all", "tops"],
    "link" : "/"
}' 'https://golfwang-feea0-default-rtdb.firebaseio.com/items.json'