# Quick Deployment Checklist

## ⚡ Fast Track: Deploy to GCP in 30 Minutes

### Step 1: Install Google Cloud SDK (5 min)
```powershell
# Download and install from:
# https://cloud.google.com/sdk/docs/install

# Verify installation
gcloud --version
```

### Step 2: Authenticate & Create Project (5 min)
```powershell
gcloud auth login
gcloud projects create shelteraidtx-website
gcloud config set project shelteraidtx-website

# Enable APIs
gcloud services enable run.googleapis.com cloudbuild.googleapis.com containerregistry.googleapis.com
```

### Step 3: Set Environment Variables (2 min)
```powershell
$env:NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = "pk_test_placeholder"
$env:STRIPE_SECRET_KEY = "sk_test_placeholder"
$env:EMAIL_HOST = "smtp.gmail.com"
$env:EMAIL_PORT = "587"
$env:EMAIL_USER = "shelteraidtx@gmail.com"
$env:EMAIL_PASSWORD = "your_password"
```

### Step 4: Update deploy.ps1 (1 min)
Edit line 4:
```powershell
$PROJECT_ID = "shelteraidtx-website"  # Your project ID
```

### Step 5: Deploy! (10 min)
```powershell
cd "D:\24 - My Projects\shelteraidtx-site"
.\deploy.ps1
```

### Step 6: Test Your Site (2 min)
Visit the URL returned by the deployment script

### Step 7: Connect Domain (5 min)
```bash
gcloud beta run domain-mappings create \
  --service shelteraidtx-web \
  --domain shelteraidtx.org \
  --region us-central1
```

### Step 8: Update GoDaddy DNS
Copy the DNS records from GCP and add to GoDaddy:
- 4 x A records
- 4 x AAAA records  
- 1 x CNAME record (www)

### Step 9: Wait for DNS (5-60 min)
```powershell
nslookup shelteraidtx.org
```

### Step 10: Go Live! ✅
Visit https://shelteraidtx.org

---

## 🔧 One-Command Deploy (After Initial Setup)

```powershell
# Set environment variables (once per session)
$env:NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = "pk_live_..."
$env:STRIPE_SECRET_KEY = "sk_live_..."
$env:EMAIL_HOST = "smtp.gmail.com"
$env:EMAIL_PORT = "587"
$env:EMAIL_USER = "shelteraidtx@gmail.com"
$env:EMAIL_PASSWORD = "..."

# Deploy
.\deploy.ps1
```

---

## 📱 Monitor Your Site

```bash
# View logs
gcloud run services logs read shelteraidtx-web --region us-central1 --limit 50

# View metrics
# https://console.cloud.google.com/run/detail/us-central1/shelteraidtx-web/metrics
```

---

## 🚨 Emergency Rollback

```bash
# List revisions
gcloud run revisions list --service shelteraidtx-web --region us-central1

# Rollback to previous
gcloud run services update-traffic shelteraidtx-web \
  --region us-central1 \
  --to-revisions [PREVIOUS_REVISION_NAME]=100
```

---

## 💰 Expected Cost

- **Light traffic** (< 10K visits/mo): $0-5/month
- **Medium traffic** (10K-50K visits/mo): $5-20/month
- **Heavy traffic** (50K-100K visits/mo): $20-50/month

First 2 million requests per month are FREE!

---

## ✅ Pre-Flight Checklist

Before deploying:
- [ ] Google Cloud SDK installed
- [ ] Authenticated with `gcloud auth login`
- [ ] Project created and billing enabled
- [ ] Environment variables set
- [ ] deploy.ps1 updated with project ID
- [ ] Test locally with `npm run dev`
- [ ] All changes committed to git (optional but recommended)

---

## 📞 Quick Help

**Build fails?**
```bash
gcloud builds log $(gcloud builds list --limit=1 --format="value(ID)")
```

**Service not starting?**
```bash
gcloud run services describe shelteraidtx-web --region us-central1
```

**Domain not working?**
```bash
gcloud beta run domain-mappings describe --domain shelteraidtx.org --region us-central1
```

---

For detailed instructions, see: `GCP_DEPLOYMENT_GUIDE.md`

