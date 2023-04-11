#!/bin/bash

read -p 'Are you sure? (y/n): ' input

if [ "$input" == 'y' ]
then
    curl -X DELETE https://golfwang-feea0-default-rtdb.firebaseio.com/items.json
fi