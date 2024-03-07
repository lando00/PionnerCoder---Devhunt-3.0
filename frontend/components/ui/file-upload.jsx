"use client"

import React from 'react'

import { UploadDropzone,UploadButton,Uploader } from '../../lib/uploadthing'

import "@uploadthing/react/styles.css"

const FileUpload = ({endpoint}) => {
  return (
    <>
    <UploadDropzone

      endpoint={endpoint}
      onUploadComplete={(res)=>{
      console.log(res)
     }}
      onUploadError={(err)=>{
        console.log(err)  
      }}
    />

    {/* <UploadButton
    endpoint={endpoint}
      onUploadComplete={(res)=>{
      console.log(res)
     }}
      onUploadError={(err)=>{
        console.log(err)  
      }}
    /> */}
    </>
  )
}

export default FileUpload