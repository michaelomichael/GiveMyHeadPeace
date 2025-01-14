#!/bin/bash

ROOT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)

function create-zip() {
  local BROWSER="$1"
  local BROWSER_FOLDER="${ROOT_DIR}/src/${BROWSER}"
  local COMMON_FOLDER="${ROOT_DIR}/src/common"
  local VERSION=$(jq -r ".version" ${BROWSER_FOLDER}/manifest.json)
  local ZIPFILE="${ROOT_DIR}/GiveMyHeadPeace-${BROWSER}-${VERSION}.zip"
  
  echo "Creating ${ZIPFILE} ..."
  
  # Add files from the "xxx" folder
  (cd "${BROWSER_FOLDER}"  &&  zip -q -r "${ZIPFILE}" *)
  
  # Add files from the "common" folder
  (cd "${COMMON_FOLDER}"  &&  zip -q -r -u "${ZIPFILE}" *)
}

for BROWSER in chrome firefox
do
  create-zip "${BROWSER}"
done
