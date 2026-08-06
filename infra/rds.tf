# L3 fixture: RDS without storage_encrypted — triggers l3-terraform-rds-encryption
resource "aws_db_instance" "primary" {
  identifier = "example-primary"
  engine       = "postgres"
  instance_class = "db.t3.micro"
}
