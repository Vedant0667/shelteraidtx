#!/bin/bash
# Cloud Run Deployment Script for Shelter Aid TX

# Configuration
PROJECT_ID="shelteraidtx-website"  # Replace with your GCP project ID
SERVICE_NAME="shelteraidtx-web"
REGION="us-central1"  # Change if needed (us-east1, us-west1, etc.)
IMAGE_NAME="gcr.io/${PROJECT_ID}/${SERVICE_NAME}"

echo "🚀 Deploying Shelter Aid TX to Google Cloud Run..."

# Set the active project
gcloud config set project ${PROJECT_ID}

echo "📦 Building Docker image..."
gcloud builds submit --tag ${IMAGE_NAME}

echo "☁️ Deploying to Cloud Run..."
gcloud run deploy ${SERVICE_NAME} \
  --image ${IMAGE_NAME} \
  --platform managed \
  --region ${REGION} \
  --allow-unauthenticated \
  --port 3000 \
  --memory 512Mi \
  --cpu 1 \
  --min-instances 0 \
  --max-instances 10 \
  --set-env-vars "NODE_ENV=production" \
  --set-env-vars "NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=${NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}" \
  --set-env-vars "STRIPE_SECRET_KEY=${STRIPE_SECRET_KEY}" \
  --set-env-vars "EMAIL_HOST=${EMAIL_HOST}" \
  --set-env-vars "EMAIL_PORT=${EMAIL_PORT}" \
  --set-env-vars "EMAIL_USER=${EMAIL_USER}" \
  --set-env-vars "EMAIL_PASSWORD=${EMAIL_PASSWORD}"

echo "✅ Deployment complete!"
echo "🌐 Your service URL:"
gcloud run services describe ${SERVICE_NAME} --region ${REGION} --format="value(status.url)"

