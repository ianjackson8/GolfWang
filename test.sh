#!/bin/bash

# get item name
read -p 'Enter item name: ' itemName

# get images of items
echo "Enter links for all images (Ctrl+D when done):"
imgArray=()
while read line
do
    imgArray+=("$line")
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

typeJSON=$(printf '"%s",' "${typeArray[@]::${#typeArray[@]}-1}")
typeJSON+=$(printf '"%s"' "${typeArray[${#typeArray[@]} - 1]}")

json=$(printf '{"itemName":"%s","images":[%s],"type":[%s],"link":"/"}' "$itemName" "$imgJSON" "$typeJSON")

curl -X POST -d "$json" 'https://golfwang-feea0-default-rtdb.firebaseio.com/items.json'

