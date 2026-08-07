/**
 * S3/storage config - triggers: hardcoded bucket, empty region, block_public_* false, encryption
 */
export const s3Config = {
  bucket: 'my-app-data-bucket',
  BUCKET_NAME: 'legacy-bucket-name',
  region: '',
  AWS_REGION: '',
  server_side_encryption: false,
  block_public_acls: false,
  block_public_policy: false,
};

export const otherConfig = {
  acl: 'public-read',
};
