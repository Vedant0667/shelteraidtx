# Cloud Run Deployment Script for Shelter Aid TX
# PowerShell version

# Configuration
$PROJECT_ID = "shelteraidtx-website"  # Replace with your GCP project ID
$SERVICE_NAME = "shelteraidtx-web"
$REGION = "us-central1"  # Change if needed (us-east1, us-west1, etc.)
$IMAGE_NAME = "us-central1-docker.pkg.dev/$PROJECT_ID/shelteraidtx-web/$SERVICE_NAME"

# Set these for now (you can use real keys later when donations are enabled)
$env:NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = "pk_test_placeholder"
$env:STRIPE_SECRET_KEY = "sk_test_placeholder"
$env:EMAIL_HOST = "smtp.gmail.com"
$env:EMAIL_PORT = "587"
$env:EMAIL_USER = "shelteraidtx@gmail.com"
$env:EMAIL_PASSWORD = "placeholder"


Write-Host "Deploying Shelter Aid TX to Google Cloud Run..." -ForegroundColor Cyan

# Set the active project
gcloud config set project $PROJECT_ID

Write-Host "Building Docker image..." -ForegroundColor Yellow
gcloud builds submit --tag $IMAGE_NAME

Write-Host "Deploying to Cloud Run..." -ForegroundColor Yellow
gcloud run deploy $SERVICE_NAME `
  --image $IMAGE_NAME `
  --platform managed `
  --region $REGION `
  --allow-unauthenticated `
  --port 3000 `
  --memory 512Mi `
  --cpu 1 `
  --min-instances 0 `
  --max-instances 10 `
  --set-env-vars "NODE_ENV=production" `
  --set-env-vars "NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=$env:NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY" `
  --set-env-vars "STRIPE_SECRET_KEY=$env:STRIPE_SECRET_KEY" `
  --set-env-vars "EMAIL_HOST=$env:EMAIL_HOST" `
  --set-env-vars "EMAIL_PORT=$env:EMAIL_PORT" `
  --set-env-vars "EMAIL_USER=$env:EMAIL_USER" `
  --set-env-vars "EMAIL_PASSWORD=$env:EMAIL_PASSWORD"

Write-Host "Deployment complete!" -ForegroundColor Green
Write-Host "Your service URL:" -ForegroundColor Cyan
gcloud run services describe $SERVICE_NAME --region $REGION --format='value(status.url)'

