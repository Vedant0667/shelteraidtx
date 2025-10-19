# Shelter Aid TX - GCP Deployment Guide

## 🎯 Mission: Replace GoDaddy Site with New Next.js Site on GCP

---

## PHASE 1: Prerequisites & Setup

### 1.1 Install Google Cloud SDK

**Windows:**
1. Download installer: https://cloud.google.com/sdk/docs/install
2. Run installer and follow prompts
3. Open new PowerShell window
4. Verify: `gcloud --version`

**macOS/Linux:**
```bash
curl https://sdk.cloud.google.com | bash
exec -l $SHELL
gcloud --version
```

### 1.2 Authenticate with GCP

```bash
# Login to your Google account
gcloud auth login

# Set application default credentials
gcloud auth application-default login
```

### 1.3 Create GCP Project

```bash
# Create project (or use existing)
gcloud projects create shelteraidtx-website --name="Shelter Aid TX Website"

# Set as active project
gcloud config set project shelteraidtx-website

# Enable billing (required - go to console)
# https://console.cloud.google.com/billing/linkedaccount?project=shelteraidtx-website
```

### 1.4 Enable Required APIs

```bash
gcloud services enable run.googleapis.com
gcloud services enable cloudbuild.googleapis.com
gcloud services enable containerregistry.googleapis.com
```

---

## PHASE 2: Configure Environment Variables

### 2.1 Get Your Production Credentials

**Stripe Keys** (if donations enabled):
1. Go to https://dashboard.stripe.com/
2. Switch to "Production" mode (top right)
3. Go to Developers → API Keys
4. Copy:
   - Publishable key: `pk_live_...`
   - Secret key: `sk_live_...`

**Email Configuration** (for contact form):
1. Use Gmail App Password:
   - Go to https://myaccount.google.com/security
   - Enable 2-Step Verification
   - Go to App Passwords
   - Generate password for "Mail" app
   - Copy the 16-character password

### 2.2 Set Environment Variables (PowerShell)

```powershell
# Set these in your PowerShell session before deploying
$env:NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = "pk_live_your_real_key"
$env:STRIPE_SECRET_KEY = "sk_live_your_real_key"
$env:EMAIL_HOST = "smtp.gmail.com"
$env:EMAIL_PORT = "587"
$env:EMAIL_USER = "shelteraidtx@gmail.com"
$env:EMAIL_PASSWORD = "your_16_char_app_password"
```

---

## PHASE 3: Deploy to Google Cloud Run

### 3.1 Update Configuration

Edit `deploy.ps1` and set your project ID:
```powershell
$PROJECT_ID = "shelteraidtx-website"  # Your actual project ID
```

### 3.2 Run Deployment

```powershell
# Make sure you're in the project directory
cd D:\24 - My Projects\shelteraidtx-site

# Set environment variables (from Phase 2.2)

# Run deployment script
.\deploy.ps1
```

**What happens:**
1. Builds Docker container with your Next.js app
2. Uploads to Google Container Registry
3. Deploys to Cloud Run
4. Returns a URL like: `https://shelteraidtx-web-xxxxx-uc.a.run.app`

**Estimated time:** 5-10 minutes

### 3.3 Test Your Deployment

```powershell
# Get your Cloud Run URL
gcloud run services describe shelteraidtx-web --region us-central1 --format="value(status.url)"
```

Visit the URL in your browser and test:
- ✅ Homepage loads
- ✅ Navigation works
- ✅ Contact form works
- ✅ All pages accessible
- ✅ Images load
- ✅ No console errors

---

## PHASE 4: Set Up Custom Domain (shelteraidtx.org)

### 4.1 Verify Domain Ownership in GCP

```bash
# Add domain mapping
gcloud beta run domain-mappings create \
  --service shelteraidtx-web \
  --domain shelteraidtx.org \
  --region us-central1
```

**This will output DNS records you need to add to GoDaddy**

### 4.2 Update DNS at GoDaddy

1. **Login to GoDaddy:** https://dcc.godaddy.com/
2. **Go to:** My Products → Domains → shelteraidtx.org → DNS
3. **Add these records** (from GCP output):

**Type A Record:**
```
Type: A
Name: @
Value: 216.239.32.21 (or IP provided by GCP)
TTL: 1 Hour
```

**Type A Records (additional):**
```
Type: A
Name: @
Value: 216.239.34.21
TTL: 1 Hour

Type: A
Name: @
Value: 216.239.36.21
TTL: 1 Hour

Type: A
Name: @
Value: 216.239.38.21
TTL: 1 Hour
```

**Type AAAA Records (IPv6):**
```
Type: AAAA
Name: @
Value: 2001:4860:4802:32::15 (or IPv6 provided by GCP)
TTL: 1 Hour

Type: AAAA
Name: @
Value: 2001:4860:4802:34::15
TTL: 1 Hour

Type: AAAA
Name: @
Value: 2001:4860:4802:36::15
TTL: 1 Hour

Type: AAAA
Name: @
Value: 2001:4860:4802:38::15
TTL: 1 Hour
```

**Type CNAME Record (for www):**
```
Type: CNAME
Name: www
Value: ghs.googlehosted.com
TTL: 1 Hour
```

### 4.3 Wait for DNS Propagation

```powershell
# Check DNS propagation (takes 5 minutes to 48 hours)
nslookup shelteraidtx.org

# Or use online tool: https://dnschecker.org/#A/shelteraidtx.org
```

### 4.4 Verify SSL Certificate

Cloud Run automatically provisions SSL certificates. Check status:

```bash
gcloud beta run domain-mappings describe \
  --domain shelteraidtx.org \
  --region us-central1
```

Wait for `status.certificate.status: ACTIVE`

---

## PHASE 5: Final Verification & Go Live

### 5.1 Test Production Site

Visit https://shelteraidtx.org and verify:

- ✅ HTTPS works (green padlock)
- ✅ All pages load correctly
- ✅ Contact form sends emails
- ✅ Stripe payment works (if enabled)
- ✅ Images/logos display
- ✅ Mobile responsive
- ✅ No console errors

### 5.2 Update Google Search Console

1. Go to: https://search.google.com/search-console
2. Add property: `https://shelteraidtx.org`
3. Verify ownership (use DNS TXT record method)
4. Submit sitemap: `https://shelteraidtx.org/sitemap.xml`

### 5.3 Monitor Performance

```bash
# View logs
gcloud run services logs read shelteraidtx-web --region us-central1 --limit 50

# View metrics in console
# https://console.cloud.google.com/run/detail/us-central1/shelteraidtx-web/metrics
```

---

## PHASE 6: Post-Deployment

### 6.1 Backup Old Site

**Before shutting down GoDaddy:**
1. Download full backup of old site
2. Save to external storage
3. Keep GoDaddy hosting active for 30 days (parallel run)

### 6.2 Set Up Monitoring

**Enable Uptime Monitoring:**
```bash
# Install monitoring agent
gcloud alpha monitoring uptime create shelteraidtx-check \
  --display-name="Shelter Aid TX Website" \
  --resource-type=uptime-url \
  --monitored-resource="https://shelteraidtx.org" \
  --check-interval=5m
```

### 6.3 Enable Automatic Backups

Cloud Run is stateless, but enable project-level backups:
1. Go to: https://console.cloud.google.com/gcr/images
2. Enable Container Analysis
3. Set retention policy for images

---

## 💰 Cost Estimate

**Cloud Run Pricing (US):**
- First 2 million requests/month: FREE
- CPU: $0.00002400/vCPU-second
- Memory: $0.00000250/GiB-second
- Requests: $0.40/million

**Expected Monthly Cost:**
- Low traffic (< 10K visits/mo): **$0-5**
- Medium traffic (10K-50K visits/mo): **$5-20**
- High traffic (50K-100K visits/mo): **$20-50**

**Much cheaper than traditional hosting!**

---

## 🚨 Troubleshooting

### Issue: Build Fails

```bash
# Check build logs
gcloud builds list --limit=5
gcloud builds log [BUILD_ID]
```

### Issue: Deployment Fails

```bash
# Check service status
gcloud run services describe shelteraidtx-web --region us-central1

# View error logs
gcloud run services logs read shelteraidtx-web --region us-central1 --limit 100
```

### Issue: Domain Not Working

```bash
# Check domain mapping status
gcloud beta run domain-mappings describe --domain shelteraidtx.org --region us-central1

# Verify DNS
nslookup shelteraidtx.org
```

### Issue: Environment Variables Not Set

```bash
# Update environment variables
gcloud run services update shelteraidtx-web \
  --region us-central1 \
  --set-env-vars "KEY=VALUE"
```

---

## 🔄 Future Updates

### Deploy New Version

```powershell
# Make code changes
# Then run deployment script again
.\deploy.ps1

# Cloud Run automatically handles zero-downtime deployment
```

### Rollback to Previous Version

```bash
# List revisions
gcloud run revisions list --service shelteraidtx-web --region us-central1

# Rollback
gcloud run services update-traffic shelteraidtx-web \
  --region us-central1 \
  --to-revisions [REVISION_NAME]=100
```

---

## 📞 Support Resources

- **GCP Documentation:** https://cloud.google.com/run/docs
- **GCP Support:** https://console.cloud.google.com/support
- **Community Forum:** https://stackoverflow.com/questions/tagged/google-cloud-run
- **Pricing Calculator:** https://cloud.google.com/products/calculator

---

## ✅ Deployment Checklist

**Pre-Deployment:**
- [ ] GCP account created
- [ ] Project created and billing enabled
- [ ] APIs enabled (Cloud Run, Cloud Build)
- [ ] gcloud CLI installed and authenticated
- [ ] Production environment variables configured
- [ ] Dockerfile and deployment scripts created

**Deployment:**
- [ ] Docker build successful
- [ ] Cloud Run service deployed
- [ ] Test URL works correctly
- [ ] All pages accessible
- [ ] Contact form works
- [ ] No console errors

**Domain Setup:**
- [ ] Domain mapping created in GCP
- [ ] DNS records updated at GoDaddy
- [ ] DNS propagation complete
- [ ] SSL certificate active
- [ ] https://shelteraidtx.org works
- [ ] www.shelteraidtx.org redirects

**Post-Deployment:**
- [ ] Google Search Console configured
- [ ] Sitemap submitted
- [ ] Uptime monitoring enabled
- [ ] Old site backed up
- [ ] Team notified of new site
- [ ] Social media links updated

---

**🎉 Congratulations! Your site is live on GCP!**

