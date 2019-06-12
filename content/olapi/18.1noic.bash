#!/bin/bash -v
find . -name \*.html -print | xargs sed -i 's|18<i>c</i>|18c|g'
