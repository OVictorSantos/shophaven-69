
# OpenShift Deployment Guide

This directory contains configuration files for deploying the ShopHaven application to OpenShift.

## Prerequisites

- OpenShift CLI (`oc`) installed and configured
- Access to an OpenShift cluster
- Docker installed for local testing

## Local Testing with Docker

Before deploying to OpenShift, you can test your application locally:

```bash
# Build the Docker image
docker build -t shophaven:latest .

# Run the container locally
docker run -p 8080:8080 shophaven:latest
```

## Deploying to OpenShift

1. Log in to your OpenShift cluster:
   ```bash
   oc login <your-openshift-cluster-url>
   ```

2. Create a new project (if needed):
   ```bash
   oc new-project shophaven
   ```

3. Apply the configuration files:
   ```bash
   oc apply -f openshift/deployment.yaml
   oc apply -f openshift/service.yaml
   oc apply -f openshift/route.yaml
   ```

4. Build and push the image:
   ```bash
   # Using OpenShift's built-in build capability
   oc new-build --binary --name=shophaven -l app=shophaven
   oc start-build shophaven --from-dir=. --follow
   ```

5. Check deployment status:
   ```bash
   oc status
   ```

6. Get the application URL:
   ```bash
   oc get route shophaven
   ```

## Updating the Application

To update your application after making changes:

```bash
oc start-build shophaven --from-dir=. --follow
```

## Scaling the Application

```bash
oc scale deployment/shophaven --replicas=3
```
