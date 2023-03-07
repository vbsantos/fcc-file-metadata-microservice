#!/bin/bash

# Create a temporary file
tempfile=$(mktemp)

# Write the script to the file
cat <<EOF >$tempfile
#!/bin/bash

echo "Hello World!"
EOF

# Make the curl request using the file
curl -X POST -H "Content-Type: multipart/form-data" -F "upfile=@$tempfile" http://localhost:3000/fileanalyse

# Delete the temporary file
rm $tempfile
