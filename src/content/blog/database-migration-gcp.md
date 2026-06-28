---
title: "Database Migration: Moving SQL to Google Cloud SQL"
description: "A detailed step-by-step guide on migrating an on-premises SQL database to GCP Cloud SQL, featuring a video walkthrough and console configurations."
pubDate: "2024-10-13"
tags: ["GCP", "SQL", "Database Migration", "Cloud"]
draft: false
---

Migrating relational databases from on-premises servers to managed cloud infrastructures is a critical milestone for scalability, security, and developer productivity.

Before proceeding with the migration, it's crucial to ensure proper network access:
* Check firewall access for the required port on your local server.
* Ensure port forwarding is enabled on your router.
* If port forwarding isn't possible due to double NAT, consider using tunneling services like **Telebit**.

These steps are essential for establishing a successful connection between your local server and GCP during the migration process.

---

## Video Walkthrough

For a visual walkthrough of the database migration process, you can watch this screen recording directly in your browser:

<div class="video-container">
  <iframe src="https://drive.google.com/file/d/14SdnitpHeSsXD7stzu4eYcwsMcUGfFXR/preview" allow="autoplay" allowfullscreen></iframe>
</div>

---

## Step-by-Step Guide

Follow the detailed instructions below to perform the database migration.

### 1. Enable Database Migration API

First, enable the **Database Migration API** in your GCP project.

![Enable Database Migration API](https://github.com/user-attachments/assets/2b891ef8-66fb-44d8-80bf-0c29e5bb190a)

### 2. Create Connection Profiles

Navigate to the Database Migration service and create connection profiles for both source and destination databases.

![Create Connection Profiles](https://github.com/user-attachments/assets/a4e9d016-186d-4241-9d88-f0500704e37c)

When creating connection profiles, pay attention to the following details:

#### Source Connection Profile:
* **Hostname**: Enter the IP address or domain name of your local SQL server.
* **Port**: Specify the port number your SQL server is using (default is usually `3306` for MySQL).
* **Username**: Provide a database user with sufficient privileges to access and read the database.
* **Password**: Enter the password for the specified database user.

![Source Connection Profile Setup](https://github.com/user-attachments/assets/ada9c26d-f144-4425-92cc-707eaf592979)

### 3. Create Migration Job

Set up a new migration job to define the migration process.

![Migration Jobs list](https://github.com/user-attachments/assets/ab434cb6-c9cd-4105-bb8e-2090e8df8507)

![Create Migration Job](https://github.com/user-attachments/assets/5bcb85bb-f015-44b3-97a9-7df053cb86f1)

### 4. Configure Source and Destination

Select the source (your local SQL database) and define the destination (Cloud SQL instance).

![Configure Source and Destination](https://github.com/user-attachments/assets/17a446ba-2e5b-402f-94e4-9a4278117902)

#### Destination Profile:
* **Instance ID**: Enter a unique identifier name for your new Cloud SQL destination instance.
* **Password**: Create a secure root password for the new database instance.
* **Database Version**: Select the version that matches your source database (e.g., MySQL 8.0).
* **Connectivity**: Configure connectivity options (like Public IP or Private Service Access) depending on your network security requirements.

Once configured, validate the migration job to check connectivity, and start the job to begin the replication.

---

## Migration Code & Script Reference

You can find the full set of SQL scripts, tunneling setup files, and screenshots for this database migration process in the official repository:
👉 **[GitHub Repository - Database Migration SQL Posts](https://github.com/Thirulok-Ranganathan/Posts/tree/main/Posts/GCP/Database_Migration_SQL)**
