#!/bin/bash

# get item name
read -p 'Enter item name: ' itemName

# get price
read -p 'Enter price: ' price

# get description
read -p 'Enter description: ' desc

# get num of secondary images
read -p 'Enter number of secondary images: ' numSec

# get images of items
echo "Enter links for all images (Ctrl+D when done):"
imgArray=()
while read line
do
    imgArray+=("$line")
done

# get all secondary images
echo "Enter links for all secondary images (Ctrl+D when done):"
secImgArray=()
while read line
do
    secImgArray+=("$line")
done

# get types of product
echo "Enter categories item is in (accessories, all, bottoms, hats, music, new, socks, tees, tops) (Ctrl+D when done):"
typeArray=()
while read line
do
    typeArray+=("$line")
done

# format imgarray string 
imgJSON=$(printf '"%s",' "${imgArray[@]::${#imgArray[@]}-1}")
imgJSON+=$(printf '"%s"' "${imgArray[${#imgArray[@]} - 1]}")

secImgJSON=$(printf '"%s",' "${secImgArray[@]::${#secImgArray[@]}-1}")
secImgJSON+=$(printf '"%s"' "${secImgArray[${#secImgArray[@]} - 1]}")

typeJSON=$(printf '"%s",' "${typeArray[@]::${#typeArray[@]}-1}")
typeJSON+=$(printf '"%s"' "${typeArray[${#typeArray[@]} - 1]}")


json=$(printf '{"itemName":"%s","price":"%s","desc":"%s","numSec":"%s","images":[%s],"secImages":[%s],"type":[%s],"link":"/"}' "$itemName" "$price" "$desc" "$numSec" "$imgJSON" "$secImgJSON" "$typeJSON")

curl -X POST -d "$json" 'https://golfwang-feea0-default-rtdb.firebaseio.com/items.json'