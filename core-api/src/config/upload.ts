export const uploadConfig = () => ({
  upload: {
    maxFileSize: parseInt(process.env.MAX_UPLOAD_FILE_SIZE),
    maxFiles: parseInt(process.env.MAX_UPLOAD_FILES),
  },
});

export type UploadConfig = ReturnType<typeof uploadConfig>['upload'];
