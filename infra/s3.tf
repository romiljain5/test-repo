# L3 fixture: S3 bucket without SSE — triggers l3-terraform-s3-encryption
resource "aws_s3_bucket" "app_uploads" {
  bucket = "example-app-uploads"
}
